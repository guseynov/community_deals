"use client";

import { useCallback } from "react";

type CategoryFilterButtonProps = {
  category: string;
  isSelected: boolean;
  label: string;
  onSelect: (category: string) => void;
};

export function CategoryFilterButton({
  category,
  isSelected,
  label,
  onSelect,
}: CategoryFilterButtonProps) {
  const handleClick = useCallback(() => {
    onSelect(category);
  }, [category, onSelect]);

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={isSelected}
      className="filter-pill"
    >
      {label}
    </button>
  );
}
