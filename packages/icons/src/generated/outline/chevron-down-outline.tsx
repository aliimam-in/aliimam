/**
 * Auto-generated logo component: Chevron Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChevronDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChevronDownOutlineLogo = React.forwardRef<SVGSVGElement, ChevronDownOutlineLogoProps>(
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
      <path d="M6 9l6 6l6 -6" />
    </svg>
  )
);

ChevronDownOutlineLogo.displayName = "ChevronDownOutlineLogo";

export const ChevronDownOutlineLogoMetadata = {
  id: "chevron-down-outline",
  baseId: "chevron-down-outline",
  variant: "default",
  name: "Chevron Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChevronDownOutlineLogo;
