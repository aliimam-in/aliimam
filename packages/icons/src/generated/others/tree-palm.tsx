/**
 * Auto-generated logo component: Tree Palm (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TreePalmLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TreePalmLogo = React.forwardRef<SVGSVGElement, TreePalmLogoProps>(
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
      <path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4" />
  <path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3" />
  <path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35" />
  <path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14" />
    </svg>
  )
);

TreePalmLogo.displayName = "TreePalmLogo";

export const TreePalmLogoMetadata = {
  id: "tree-palm",
  baseId: "tree-palm",
  variant: "default",
  name: "Tree Palm",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TreePalmLogo;
