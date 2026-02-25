/**
 * Auto-generated logo component: Arrow Big Left Line Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowBigLeftLineOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowBigLeftLineOutlineLogo = React.forwardRef<SVGSVGElement, ArrowBigLeftLineOutlineLogoProps>(
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
      <path d="M12 15v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h6v6h-6" />
  <path d="M21 15v-6" />
    </svg>
  )
);

ArrowBigLeftLineOutlineLogo.displayName = "ArrowBigLeftLineOutlineLogo";

export const ArrowBigLeftLineOutlineLogoMetadata = {
  id: "arrow-big-left-line-outline",
  baseId: "arrow-big-left-line-outline",
  variant: "default",
  name: "Arrow Big Left Line Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowBigLeftLineOutlineLogo;
