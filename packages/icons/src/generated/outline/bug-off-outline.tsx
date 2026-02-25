/**
 * Auto-generated logo component: Bug Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BugOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BugOffOutlineLogo = React.forwardRef<SVGSVGElement, BugOffOutlineLogoProps>(
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
      <path d="M9.884 5.873a3 3 0 0 1 5.116 2.127v1" />
  <path d="M13 9h3a6 6 0 0 1 1 3v1m-.298 3.705a5 5 0 0 1 -9.702 -1.705v-3a6 6 0 0 1 1 -3h1" />
  <path d="M3 13h4" />
  <path d="M17 13h4" />
  <path d="M12 20v-6" />
  <path d="M4 19l3.35 -2" />
  <path d="M4 7l3.75 2.4" />
  <path d="M20 7l-3.75 2.4" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

BugOffOutlineLogo.displayName = "BugOffOutlineLogo";

export const BugOffOutlineLogoMetadata = {
  id: "bug-off-outline",
  baseId: "bug-off-outline",
  variant: "default",
  name: "Bug Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BugOffOutlineLogo;
