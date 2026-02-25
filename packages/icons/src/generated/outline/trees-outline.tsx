/**
 * Auto-generated logo component: Trees Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TreesOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TreesOutlineLogo = React.forwardRef<SVGSVGElement, TreesOutlineLogoProps>(
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
      <path d="M16 5l3 3l-2 1l4 4l-3 1l4 4h-9" />
  <path d="M15 21l0 -3" />
  <path d="M8 13l-2 -2" />
  <path d="M8 12l2 -2" />
  <path d="M8 21v-13" />
  <path d="M5.824 16a3 3 0 0 1 -2.743 -3.69a3 3 0 0 1 .304 -4.833a3 3 0 0 1 4.615 -3.707a3 3 0 0 1 4.614 3.707a3 3 0 0 1 .305 4.833a3 3 0 0 1 -2.919 3.695h-4l-.176 -.005" />
    </svg>
  )
);

TreesOutlineLogo.displayName = "TreesOutlineLogo";

export const TreesOutlineLogoMetadata = {
  id: "trees-outline",
  baseId: "trees-outline",
  variant: "default",
  name: "Trees Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TreesOutlineLogo;
