/**
 * Auto-generated logo component: Leaf Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LeafOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LeafOutlineLogo = React.forwardRef<SVGSVGElement, LeafOutlineLogoProps>(
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
      <path d="M5 21c.5 -4.5 2.5 -8 7 -10" />
  <path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3l.014 0" />
    </svg>
  )
);

LeafOutlineLogo.displayName = "LeafOutlineLogo";

export const LeafOutlineLogoMetadata = {
  id: "leaf-outline",
  baseId: "leaf-outline",
  variant: "default",
  name: "Leaf Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LeafOutlineLogo;
