/**
 * Auto-generated logo component: Layout Bottombar Inactive Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayoutBottombarInactiveOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayoutBottombarInactiveOutlineLogo = React.forwardRef<SVGSVGElement, LayoutBottombarInactiveOutlineLogoProps>(
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
      <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12" />
  <path d="M4 15h1" />
  <path d="M19 15h1" />
  <path d="M9 15h1" />
  <path d="M14 15h1" />
    </svg>
  )
);

LayoutBottombarInactiveOutlineLogo.displayName = "LayoutBottombarInactiveOutlineLogo";

export const LayoutBottombarInactiveOutlineLogoMetadata = {
  id: "layout-bottombar-inactive-outline",
  baseId: "layout-bottombar-inactive-outline",
  variant: "default",
  name: "Layout Bottombar Inactive Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayoutBottombarInactiveOutlineLogo;
