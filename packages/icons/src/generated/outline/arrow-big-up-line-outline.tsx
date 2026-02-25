/**
 * Auto-generated logo component: Arrow Big Up Line Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowBigUpLineOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowBigUpLineOutlineLogo = React.forwardRef<SVGSVGElement, ArrowBigUpLineOutlineLogoProps>(
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
      <path d="M9 12h-3.586a1 1 0 0 1 -.707 -1.707l6.586 -6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 -.707 1.707h-3.586v6h-6v-6" />
  <path d="M9 21h6" />
    </svg>
  )
);

ArrowBigUpLineOutlineLogo.displayName = "ArrowBigUpLineOutlineLogo";

export const ArrowBigUpLineOutlineLogoMetadata = {
  id: "arrow-big-up-line-outline",
  baseId: "arrow-big-up-line-outline",
  variant: "default",
  name: "Arrow Big Up Line Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowBigUpLineOutlineLogo;
