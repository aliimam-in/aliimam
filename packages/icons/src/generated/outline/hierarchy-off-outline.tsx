/**
 * Auto-generated logo component: Hierarchy Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HierarchyOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HierarchyOffOutlineLogo = React.forwardRef<SVGSVGElement, HierarchyOffOutlineLogoProps>(
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
      <path d="M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M17.585 17.587a2 2 0 0 0 2.813 2.843" />
  <path d="M6.5 17.5l5.5 -4.5l5.5 4.5" />
  <path d="M12 7v1m0 4v1" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

HierarchyOffOutlineLogo.displayName = "HierarchyOffOutlineLogo";

export const HierarchyOffOutlineLogoMetadata = {
  id: "hierarchy-off-outline",
  baseId: "hierarchy-off-outline",
  variant: "default",
  name: "Hierarchy Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HierarchyOffOutlineLogo;
