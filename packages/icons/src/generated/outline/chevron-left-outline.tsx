/**
 * Auto-generated logo component: Chevron Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChevronLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChevronLeftOutlineLogo = React.forwardRef<SVGSVGElement, ChevronLeftOutlineLogoProps>(
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
      <path d="M15 6l-6 6l6 6" />
    </svg>
  )
);

ChevronLeftOutlineLogo.displayName = "ChevronLeftOutlineLogo";

export const ChevronLeftOutlineLogoMetadata = {
  id: "chevron-left-outline",
  baseId: "chevron-left-outline",
  variant: "default",
  name: "Chevron Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChevronLeftOutlineLogo;
