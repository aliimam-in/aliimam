/**
 * Auto-generated logo component: Arrow Big Right Lines Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowBigRightLinesOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowBigRightLinesOutlineLogo = React.forwardRef<SVGSVGElement, ArrowBigRightLinesOutlineLogoProps>(
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
      <path d="M12 9v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-3v-6h3" />
  <path d="M3 9v6" />
  <path d="M6 9v6" />
    </svg>
  )
);

ArrowBigRightLinesOutlineLogo.displayName = "ArrowBigRightLinesOutlineLogo";

export const ArrowBigRightLinesOutlineLogoMetadata = {
  id: "arrow-big-right-lines-outline",
  baseId: "arrow-big-right-lines-outline",
  variant: "default",
  name: "Arrow Big Right Lines Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowBigRightLinesOutlineLogo;
