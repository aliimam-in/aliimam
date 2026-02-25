/**
 * Auto-generated logo component: Arrow Big Left Lines Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowBigLeftLinesOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowBigLeftLinesOutlineLogo = React.forwardRef<SVGSVGElement, ArrowBigLeftLinesOutlineLogoProps>(
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
      <path d="M12 15v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h3v6h-3" />
  <path d="M21 15v-6" />
  <path d="M18 15v-6" />
    </svg>
  )
);

ArrowBigLeftLinesOutlineLogo.displayName = "ArrowBigLeftLinesOutlineLogo";

export const ArrowBigLeftLinesOutlineLogoMetadata = {
  id: "arrow-big-left-lines-outline",
  baseId: "arrow-big-left-lines-outline",
  variant: "default",
  name: "Arrow Big Left Lines Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowBigLeftLinesOutlineLogo;
