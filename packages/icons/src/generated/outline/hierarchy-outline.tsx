/**
 * Auto-generated logo component: Hierarchy Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HierarchyOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HierarchyOutlineLogo = React.forwardRef<SVGSVGElement, HierarchyOutlineLogoProps>(
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
  <path d="M17 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M6.5 17.5l5.5 -4.5l5.5 4.5" />
  <path d="M12 7l0 6" />
    </svg>
  )
);

HierarchyOutlineLogo.displayName = "HierarchyOutlineLogo";

export const HierarchyOutlineLogoMetadata = {
  id: "hierarchy-outline",
  baseId: "hierarchy-outline",
  variant: "default",
  name: "Hierarchy Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HierarchyOutlineLogo;
