/**
 * Auto-generated logo component: Arrow Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowLeftOutlineLogo = React.forwardRef<SVGSVGElement, ArrowLeftOutlineLogoProps>(
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
      <path d="M5 12l14 0" />
  <path d="M5 12l6 6" />
  <path d="M5 12l6 -6" />
    </svg>
  )
);

ArrowLeftOutlineLogo.displayName = "ArrowLeftOutlineLogo";

export const ArrowLeftOutlineLogoMetadata = {
  id: "arrow-left-outline",
  baseId: "arrow-left-outline",
  variant: "default",
  name: "Arrow Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowLeftOutlineLogo;
