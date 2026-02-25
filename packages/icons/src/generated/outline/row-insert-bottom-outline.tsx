/**
 * Auto-generated logo component: Row Insert Bottom Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RowInsertBottomOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RowInsertBottomOutlineLogo = React.forwardRef<SVGSVGElement, RowInsertBottomOutlineLogoProps>(
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
      <path d="M20 6v4a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1" />
  <path d="M12 15l0 4" />
  <path d="M14 17l-4 0" />
    </svg>
  )
);

RowInsertBottomOutlineLogo.displayName = "RowInsertBottomOutlineLogo";

export const RowInsertBottomOutlineLogoMetadata = {
  id: "row-insert-bottom-outline",
  baseId: "row-insert-bottom-outline",
  variant: "default",
  name: "Row Insert Bottom Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RowInsertBottomOutlineLogo;
