/**
 * Auto-generated logo component: Arrow Big Up Lines Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowBigUpLinesOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowBigUpLinesOutlineLogo = React.forwardRef<SVGSVGElement, ArrowBigUpLinesOutlineLogoProps>(
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
      <path d="M9 12h-3.586a1 1 0 0 1 -.707 -1.707l6.586 -6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 -.707 1.707h-3.586v3h-6v-3" />
  <path d="M9 21h6" />
  <path d="M9 18h6" />
    </svg>
  )
);

ArrowBigUpLinesOutlineLogo.displayName = "ArrowBigUpLinesOutlineLogo";

export const ArrowBigUpLinesOutlineLogoMetadata = {
  id: "arrow-big-up-lines-outline",
  baseId: "arrow-big-up-lines-outline",
  variant: "default",
  name: "Arrow Big Up Lines Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowBigUpLinesOutlineLogo;
