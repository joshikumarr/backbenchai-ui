import React, { forwardRef, useState, useMemo } from "react";
import { Box } from "../primitives/Box";
import { Inline } from "../primitives/Inline";
import { Text } from "../primitives/Text";
import { Button } from "../primitives/Button";
import { Spinner } from "../primitives/Spinner";
import {
  Spacing,
  FontSize,
  FontWeight,
  TextColor,
  BackgroundColor,
  BorderColor,
  BorderRadius,
} from "../tokens";

export type SortOrder = "ASC" | "DESC";

export interface TableHeadCell {
  key: string;
  label: string;
  isSortable?: boolean;
  width?: string;
}

export interface TableRow {
  key: string;
  cells: React.ReactNode[];
  /** Callback when the row is clicked */
  onClick?: () => void;
}

export interface TableProps {
  caption?: string;
  head: TableHeadCell[];
  rows: TableRow[];
  /** Rows shown per page (default: all rows) */
  rowsPerPage?: number;
  /** Current page (controlled) */
  page?: number;
  /** Default page for uncontrolled mode (default: 1) */
  defaultPage?: number;
  /** Current sort key (controlled) */
  sortKey?: string;
  /** Current sort order (controlled) */
  sortOrder?: SortOrder;
  /** Default sort key for uncontrolled mode */
  defaultSortKey?: string;
  /** Default sort order for uncontrolled mode */
  defaultSortOrder?: SortOrder;
  onSort?: (key: string, order: SortOrder) => void;
  onSetPage?: (page: number) => void;
  isLoading?: boolean;
  /** Fixed column widths (default: false) */
  isFixedSize?: boolean;
}

const SortIcon = ({ order }: { order?: SortOrder }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    style={{
      width: "0.75rem",
      height: "0.75rem",
      marginInlineStart: "0.25rem",
      opacity: order ? 1 : 0.3,
    }}
  >
    {order === "ASC" ? (
      <path d="M8 3l4 5H4l4-5z" />
    ) : order === "DESC" ? (
      <path d="M8 13l4-5H4l4 5z" />
    ) : (
      <>
        <path d="M8 3l3 4H5l3-4z" />
        <path d="M8 13l3-4H5l3 4z" />
      </>
    )}
  </svg>
);

export const Table = forwardRef<HTMLTableElement, TableProps>(
  (
    {
      caption,
      head,
      rows,
      rowsPerPage,
      page: controlledPage,
      defaultPage = 1,
      sortKey: controlledSortKey,
      sortOrder: controlledSortOrder,
      defaultSortKey,
      defaultSortOrder = "ASC",
      onSort,
      onSetPage,
      isLoading = false,
      isFixedSize = false,
    },
    ref
  ) => {
    const [internalPage, setInternalPage] = useState(defaultPage);
    const [internalSortKey, setInternalSortKey] = useState(defaultSortKey);
    const [internalSortOrder, setInternalSortOrder] = useState<SortOrder>(defaultSortOrder);

    const isPageControlled = controlledPage !== undefined;
    const currentPage = isPageControlled ? controlledPage : internalPage;

    const isSortControlled = controlledSortKey !== undefined;
    const activeSortKey = isSortControlled ? controlledSortKey : internalSortKey;
    const activeSortOrder = isSortControlled
      ? controlledSortOrder ?? "ASC"
      : internalSortOrder;

    const totalPages = rowsPerPage ? Math.max(1, Math.ceil(rows.length / rowsPerPage)) : 1;

    const visibleRows = useMemo(() => {
      if (!rowsPerPage) return rows;
      const start = (currentPage - 1) * rowsPerPage;
      return rows.slice(start, start + rowsPerPage);
    }, [rows, rowsPerPage, currentPage]);

    const handleSort = (key: string) => {
      const nextOrder: SortOrder =
        activeSortKey === key && activeSortOrder === "ASC" ? "DESC" : "ASC";
      if (!isSortControlled) {
        setInternalSortKey(key);
        setInternalSortOrder(nextOrder);
      }
      onSort?.(key, nextOrder);
    };

    const handleSetPage = (p: number) => {
      if (!isPageControlled) setInternalPage(p);
      onSetPage?.(p);
    };

    const cellPadding: React.CSSProperties = {
      padding: `${Spacing.MediumLarge} ${Spacing.Large}`,
    };

    return (
      <Box style={{ position: "relative" }}>
        {isLoading && (
          <Box
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(255,255,255,0.7)",
              zIndex: 10,
              borderRadius: BorderRadius.XXLarge,
            }}
          >
            <Spinner size="large" />
          </Box>
        )}
        <table
          ref={ref}
          style={{
            width: "100%",
            borderCollapse: "collapse",
            tableLayout: isFixedSize ? "fixed" : "auto",
            fontSize: FontSize.XSmall,
          }}
        >
          {caption && (
            <caption
              style={{
                textAlign: "left",
                paddingBlockEnd: Spacing.Medium,
                fontWeight: FontWeight.Semibold,
                fontSize: FontSize.Small,
                color: TextColor.Default,
              }}
            >
              {caption}
            </caption>
          )}
          <thead>
            <tr>
              {head.map((cell) => (
                <th
                  key={cell.key}
                  style={{
                    ...cellPadding,
                    textAlign: "left",
                    fontWeight: FontWeight.Semibold,
                    fontSize: FontSize.XXSmall,
                    color: TextColor.Subtle,
                    borderBottom: `1px solid ${BorderColor.Default}`,
                    whiteSpace: "nowrap",
                    cursor: cell.isSortable ? "pointer" : "default",
                    userSelect: cell.isSortable ? "none" : undefined,
                    ...(cell.width ? { width: cell.width } : {}),
                  }}
                  onClick={cell.isSortable ? () => handleSort(cell.key) : undefined}
                >
                  <span style={{ display: "inline-flex", alignItems: "center" }}>
                    {cell.label}
                    {cell.isSortable && (
                      <SortIcon
                        order={activeSortKey === cell.key ? activeSortOrder : undefined}
                      />
                    )}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visibleRows.map((row) => (
              <tr
                key={row.key}
                onClick={row.onClick}
                style={{
                  cursor: row.onClick ? "pointer" : "default",
                  borderBottom: `1px solid ${BorderColor.Default}`,
                }}
              >
                {row.cells.map((cell, cIdx) => (
                  <td key={cIdx} style={{ ...cellPadding, color: TextColor.Default }}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
            {visibleRows.length === 0 && (
              <tr>
                <td
                  colSpan={head.length}
                  style={{
                    ...cellPadding,
                    textAlign: "center",
                    color: TextColor.Subtle,
                  }}
                >
                  No data
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {rowsPerPage && totalPages > 1 && (
          <Inline
            space={Spacing.Medium}
            alignBlock="center"
            alignInline="center"
            style={{ paddingBlock: Spacing.Large }}
          >
            <Button
              disabled={currentPage <= 1}
              onClick={() => handleSetPage(currentPage - 1)}
              paddingBlock={Spacing.XSmall}
              paddingInline={Spacing.Medium}
              borderRadius={BorderRadius.Large}
              backgroundColor={BackgroundColor.Default}
              color={TextColor.Default}
              style={{ fontSize: FontSize.XXSmall, border: `1px solid ${BorderColor.Default}` }}
            >
              Previous
            </Button>
            <Text size={FontSize.XXSmall} color={TextColor.Subtle}>
              Page {currentPage} of {totalPages}
            </Text>
            <Button
              disabled={currentPage >= totalPages}
              onClick={() => handleSetPage(currentPage + 1)}
              paddingBlock={Spacing.XSmall}
              paddingInline={Spacing.Medium}
              borderRadius={BorderRadius.Large}
              backgroundColor={BackgroundColor.Default}
              color={TextColor.Default}
              style={{ fontSize: FontSize.XXSmall, border: `1px solid ${BorderColor.Default}` }}
            >
              Next
            </Button>
          </Inline>
        )}
      </Box>
    );
  }
);

Table.displayName = "Table";
