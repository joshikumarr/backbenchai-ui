import React, { forwardRef, useState, useMemo } from "react";
import { Box } from "../primitives/Box";
import { Inline } from "../primitives/Inline";
import { Grid } from "../primitives/Grid";
import { Text } from "../primitives/Text";
import { Button } from "../primitives/Button";
import { IconButton } from "../primitives/IconButton";
import type { TextColorToken, BackgroundColorToken } from "../tokens";
import {
  Spacing,
  FontSize,
  FontWeight,
  TextColor,
  BackgroundColor,
  BorderColor,
  BorderRadius,
} from "../tokens";

export interface CalendarProps {
  value?: Date;
  defaultValue?: Date;
  onChange?: (date: Date) => void;
  min?: Date;
  max?: Date;
  /** Color for the selected date (default: TextColor.Inverse) */
  selectedColor?: TextColorToken;
  /** Background for the selected date (default: BackgroundColor.Brand) */
  selectedBackground?: BackgroundColorToken;
}

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getStartDayOfWeek(year: number, month: number): number {
  return new Date(year, month, 1).getDay();
}

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{ width: "1rem", height: "1rem" }}>
    <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
  </svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{ width: "1rem", height: "1rem" }}>
    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
  </svg>
);

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export const Calendar = forwardRef<HTMLDivElement, CalendarProps>(
  (
    {
      value: controlledValue,
      defaultValue,
      onChange,
      min,
      max,
      selectedColor = TextColor.Inverse,
      selectedBackground = BackgroundColor.Brand,
    },
    ref
  ) => {
    const today = new Date();
    const [internalValue, setInternalValue] = useState<Date | undefined>(defaultValue);
    const isControlled = controlledValue !== undefined;
    const selectedDate = isControlled ? controlledValue : internalValue;

    const [viewYear, setViewYear] = useState(
      (selectedDate ?? today).getFullYear()
    );
    const [viewMonth, setViewMonth] = useState(
      (selectedDate ?? today).getMonth()
    );

    const daysInMonth = useMemo(() => getDaysInMonth(viewYear, viewMonth), [viewYear, viewMonth]);
    const startDay = useMemo(() => getStartDayOfWeek(viewYear, viewMonth), [viewYear, viewMonth]);

    const handlePrev = () => {
      if (viewMonth === 0) {
        setViewMonth(11);
        setViewYear((y) => y - 1);
      } else {
        setViewMonth((m) => m - 1);
      }
    };

    const handleNext = () => {
      if (viewMonth === 11) {
        setViewMonth(0);
        setViewYear((y) => y + 1);
      } else {
        setViewMonth((m) => m + 1);
      }
    };

    const handleSelect = (day: number) => {
      const date = new Date(viewYear, viewMonth, day);
      if (!isControlled) setInternalValue(date);
      onChange?.(date);
    };

    const isDisabled = (day: number): boolean => {
      const date = new Date(viewYear, viewMonth, day);
      if (min && date < new Date(min.getFullYear(), min.getMonth(), min.getDate())) return true;
      if (max && date > new Date(max.getFullYear(), max.getMonth(), max.getDate())) return true;
      return false;
    };

    const cells: React.ReactNode[] = [];

    for (let i = 0; i < startDay; i++) {
      cells.push(<Box key={`empty-${i}`} />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(viewYear, viewMonth, day);
      const isSelected = selectedDate ? isSameDay(date, selectedDate) : false;
      const isToday = isSameDay(date, today);
      const disabled = isDisabled(day);

      cells.push(
        <Button
          key={day}
          disabled={disabled}
          onClick={() => handleSelect(day)}
          borderRadius={BorderRadius.Medium}
          style={{
            width: "2.25rem",
            height: "2.25rem",
            padding: 0,
            fontSize: FontSize.XSmall,
            fontWeight: isSelected ? FontWeight.Semibold : FontWeight.Regular,
            backgroundColor: isSelected
              ? selectedBackground
              : "transparent",
            color: isSelected
              ? selectedColor
              : disabled
              ? TextColor.Disabled
              : TextColor.Default,
            border: isToday && !isSelected
              ? `1px solid ${BorderColor.Default}`
              : "none",
            cursor: disabled ? "default" : "pointer",
          }}
        >
          {day}
        </Button>
      );
    }

    return (
      <Box
        ref={ref}
        padding={Spacing.Large}
        borderRadius={BorderRadius.XLarge}
        borderColor={BorderColor.Default}
        borderSide="all"
        backgroundColor={BackgroundColor.Default}
        style={{ width: "fit-content" }}
      >
        <Inline
          alignBlock="center"
          spread="space-between"
          marginBlockEnd={Spacing.Medium}
        >
          <IconButton label="Previous month" onClick={handlePrev} color={TextColor.Subtle} padding={Spacing.XSmall}>
            <ChevronLeft />
          </IconButton>
          <Text as="span" size={FontSize.XSmall} weight={FontWeight.Semibold} color={TextColor.Default}>
            {MONTH_NAMES[viewMonth]} {viewYear}
          </Text>
          <IconButton label="Next month" onClick={handleNext} color={TextColor.Subtle} padding={Spacing.XSmall}>
            <ChevronRight />
          </IconButton>
        </Inline>
        <Grid columns={7} gap={Spacing.XXSmall}>
          {DAYS.map((d) => (
            <Text
              key={d}
              as="span"
              size={FontSize.XXSmall}
              weight={FontWeight.Medium}
              color={TextColor.Subtlest}
              align="center"
              style={{ padding: `${Spacing.XSmall} 0` }}
            >
              {d}
            </Text>
          ))}
          {cells}
        </Grid>
      </Box>
    );
  }
);

Calendar.displayName = "Calendar";
