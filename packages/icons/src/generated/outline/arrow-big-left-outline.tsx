/**
 * Auto-generated logo component: Arrow Big Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowBigLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowBigLeftOutlineLogo = React.forwardRef<SVGSVGElement, ArrowBigLeftOutlineLogoProps>(
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
      <path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1" />
    </svg>
  )
);

ArrowBigLeftOutlineLogo.displayName = "ArrowBigLeftOutlineLogo";

export const ArrowBigLeftOutlineLogoMetadata = {
  id: "arrow-big-left-outline",
  baseId: "arrow-big-left-outline",
  variant: "default",
  name: "Arrow Big Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowBigLeftOutlineLogo;
