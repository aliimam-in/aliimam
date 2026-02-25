/**
 * Auto-generated logo component: Tree Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TreeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TreeOutlineLogo = React.forwardRef<SVGSVGElement, TreeOutlineLogoProps>(
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
      <path d="M12 13l-2 -2" />
  <path d="M12 12l2 -2" />
  <path d="M12 21v-13" />
  <path d="M9.824 16a3 3 0 0 1 -2.743 -3.69a3 3 0 0 1 .304 -4.833a3 3 0 0 1 4.615 -3.707a3 3 0 0 1 4.614 3.707a3 3 0 0 1 .305 4.833a3 3 0 0 1 -2.919 3.695h-4l-.176 -.005" />
    </svg>
  )
);

TreeOutlineLogo.displayName = "TreeOutlineLogo";

export const TreeOutlineLogoMetadata = {
  id: "tree-outline",
  baseId: "tree-outline",
  variant: "default",
  name: "Tree Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TreeOutlineLogo;
