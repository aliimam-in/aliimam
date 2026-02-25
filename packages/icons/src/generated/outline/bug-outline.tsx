/**
 * Auto-generated logo component: Bug Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BugOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BugOutlineLogo = React.forwardRef<SVGSVGElement, BugOutlineLogoProps>(
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
      <path d="M9 9v-1a3 3 0 0 1 6 0v1" />
  <path d="M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1 -10 0v-3a6 6 0 0 1 1 -3" />
  <path d="M3 13l4 0" />
  <path d="M17 13l4 0" />
  <path d="M12 20l0 -6" />
  <path d="M4 19l3.35 -2" />
  <path d="M20 19l-3.35 -2" />
  <path d="M4 7l3.75 2.4" />
  <path d="M20 7l-3.75 2.4" />
    </svg>
  )
);

BugOutlineLogo.displayName = "BugOutlineLogo";

export const BugOutlineLogoMetadata = {
  id: "bug-outline",
  baseId: "bug-outline",
  variant: "default",
  name: "Bug Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BugOutlineLogo;
