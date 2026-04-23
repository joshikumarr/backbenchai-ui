import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

/**
 * Three discrete density modes. Each maps to a base `font-size` on `<html>`.
 * Because every spacing/font token in the lib is rem-based, swapping the root
 * font-size rescales the entire UI — sidebar, header, content, gauge — at once.
 */
export type PageSize = "small" | "medium" | "large";

interface PageSizeContextValue {
  pageSize: PageSize;
  setPageSize: (size: PageSize) => void;
}

const STORAGE_KEY = "bbui-page-size";
const DEFAULT_SIZE: PageSize = "medium";

const PageSizeContext = createContext<PageSizeContextValue | null>(null);

function applyPageSize(size: PageSize) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-page-size", size);
}

function readInitial(): PageSize {
  if (typeof localStorage === "undefined") return DEFAULT_SIZE;
  const stored = localStorage.getItem(STORAGE_KEY) as PageSize | null;
  return stored === "small" || stored === "medium" || stored === "large"
    ? stored
    : DEFAULT_SIZE;
}

export interface PageSizeProviderProps {
  /** Initial size before user interaction (default: "medium") */
  defaultSize?: PageSize;
  /** Persist selection to localStorage (default: true) */
  persist?: boolean;
  children: React.ReactNode;
}

export function PageSizeProvider({
  defaultSize,
  persist = true,
  children,
}: PageSizeProviderProps) {
  const [pageSize, setPageSizeState] = useState<PageSize>(
    () => (persist ? readInitial() : defaultSize ?? DEFAULT_SIZE),
  );

  const setPageSize = useCallback(
    (size: PageSize) => {
      setPageSizeState(size);
      if (persist && typeof localStorage !== "undefined") {
        localStorage.setItem(STORAGE_KEY, size);
      }
    },
    [persist],
  );

  useEffect(() => {
    applyPageSize(pageSize);
  }, [pageSize]);

  const value = useMemo(
    () => ({ pageSize, setPageSize }),
    [pageSize, setPageSize],
  );

  return (
    <PageSizeContext.Provider value={value}>
      {children}
    </PageSizeContext.Provider>
  );
}

export function usePageSize(): PageSizeContextValue {
  const ctx = useContext(PageSizeContext);
  if (!ctx) {
    throw new Error("usePageSize must be used inside <PageSizeProvider>");
  }
  return ctx;
}
