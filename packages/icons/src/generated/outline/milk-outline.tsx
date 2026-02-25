/**
 * Auto-generated logo component: Milk Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MilkOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MilkOutlineLogo = React.forwardRef<SVGSVGElement, MilkOutlineLogoProps>(
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
      <path d="M8 6h8v-2a1 1 0 0 0 -1 -1h-6a1 1 0 0 0 -1 1v2" />
  <path d="M16 6l1.094 1.759a6 6 0 0 1 .906 3.17v8.071a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8.071a6 6 0 0 1 .906 -3.17l1.094 -1.759" />
  <path d="M10 16a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M10 10h4" />
    </svg>
  )
);

MilkOutlineLogo.displayName = "MilkOutlineLogo";

export const MilkOutlineLogoMetadata = {
  id: "milk-outline",
  baseId: "milk-outline",
  variant: "default",
  name: "Milk Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MilkOutlineLogo;
