/**
 * Auto-generated logo component: Chevron Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChevronUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChevronUpOutlineLogo = React.forwardRef<SVGSVGElement, ChevronUpOutlineLogoProps>(
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
      <path d="M6 15l6 -6l6 6" />
    </svg>
  )
);

ChevronUpOutlineLogo.displayName = "ChevronUpOutlineLogo";

export const ChevronUpOutlineLogoMetadata = {
  id: "chevron-up-outline",
  baseId: "chevron-up-outline",
  variant: "default",
  name: "Chevron Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChevronUpOutlineLogo;
