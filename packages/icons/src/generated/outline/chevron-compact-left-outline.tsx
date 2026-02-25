/**
 * Auto-generated logo component: Chevron Compact Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChevronCompactLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChevronCompactLeftOutlineLogo = React.forwardRef<SVGSVGElement, ChevronCompactLeftOutlineLogoProps>(
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
      <path d="M13 20l-3 -8l3 -8" />
    </svg>
  )
);

ChevronCompactLeftOutlineLogo.displayName = "ChevronCompactLeftOutlineLogo";

export const ChevronCompactLeftOutlineLogoMetadata = {
  id: "chevron-compact-left-outline",
  baseId: "chevron-compact-left-outline",
  variant: "default",
  name: "Chevron Compact Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChevronCompactLeftOutlineLogo;
