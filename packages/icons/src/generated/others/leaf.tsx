/**
 * Auto-generated logo component: Leaf (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LeafLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LeafLogo = React.forwardRef<SVGSVGElement, LeafLogoProps>(
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
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
);

LeafLogo.displayName = "LeafLogo";

export const LeafLogoMetadata = {
  id: "leaf",
  baseId: "leaf",
  variant: "default",
  name: "Leaf",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LeafLogo;
