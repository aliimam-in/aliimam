/**
 * Auto-generated logo component: Select Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SelectOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SelectOutlineLogo = React.forwardRef<SVGSVGElement, SelectOutlineLogoProps>(
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
      <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
  <path d="M9 11l3 3l3 -3" />
    </svg>
  )
);

SelectOutlineLogo.displayName = "SelectOutlineLogo";

export const SelectOutlineLogoMetadata = {
  id: "select-outline",
  baseId: "select-outline",
  variant: "default",
  name: "Select Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SelectOutlineLogo;
