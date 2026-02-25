/**
 * Auto-generated logo component: Arrow Big Down Lines Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowBigDownLinesOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowBigDownLinesOutlineLogo = React.forwardRef<SVGSVGElement, ArrowBigDownLinesOutlineLogoProps>(
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
      <path d="M15 12h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-3h6v3" />
  <path d="M15 3h-6" />
  <path d="M15 6h-6" />
    </svg>
  )
);

ArrowBigDownLinesOutlineLogo.displayName = "ArrowBigDownLinesOutlineLogo";

export const ArrowBigDownLinesOutlineLogoMetadata = {
  id: "arrow-big-down-lines-outline",
  baseId: "arrow-big-down-lines-outline",
  variant: "default",
  name: "Arrow Big Down Lines Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowBigDownLinesOutlineLogo;
