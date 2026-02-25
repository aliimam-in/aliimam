/**
 * Auto-generated logo component: Table Shortcut Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TableShortcutOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TableShortcutOutlineLogo = React.forwardRef<SVGSVGElement, TableShortcutOutlineLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M3 13v-8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8" />
  <path d="M3 10h18" />
  <path d="M10 3v11" />
  <path d="M2 22l5 -5" />
  <path d="M7 21.5v-4.5h-4.5" />
    </svg>
  )
);

TableShortcutOutlineLogo.displayName = "TableShortcutOutlineLogo";

export const TableShortcutOutlineLogoMetadata = {
  id: "table-shortcut-outline",
  baseId: "table-shortcut-outline",
  variant: "default",
  name: "Table Shortcut Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TableShortcutOutlineLogo;
