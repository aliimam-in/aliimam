/**
 * Auto-generated logo component: Trees (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TreesLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TreesLogo = React.forwardRef<SVGSVGElement, TreesLogoProps>(
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
      <path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" />
  <path d="M7 16v6" />
  <path d="M13 19v3" />
  <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" />
    </svg>
  )
);

TreesLogo.displayName = "TreesLogo";

export const TreesLogoMetadata = {
  id: "trees",
  baseId: "trees",
  variant: "default",
  name: "Trees",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TreesLogo;
