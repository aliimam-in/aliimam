/**
 * Auto-generated logo component: Chevron Down Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChevronDownLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChevronDownLeftOutlineLogo = React.forwardRef<SVGSVGElement, ChevronDownLeftOutlineLogoProps>(
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
      <path d="M8 8v8h8" />
    </svg>
  )
);

ChevronDownLeftOutlineLogo.displayName = "ChevronDownLeftOutlineLogo";

export const ChevronDownLeftOutlineLogoMetadata = {
  id: "chevron-down-left-outline",
  baseId: "chevron-down-left-outline",
  variant: "default",
  name: "Chevron Down Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChevronDownLeftOutlineLogo;
