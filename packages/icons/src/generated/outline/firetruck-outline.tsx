/**
 * Auto-generated logo component: Firetruck Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FiretruckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FiretruckOutlineLogo = React.forwardRef<SVGSVGElement, FiretruckOutlineLogoProps>(
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
      <path d="M3 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M7 18h8m4 0h2v-6a5 5 0 0 0 -5 -5h-1l1.5 5h4.5" />
  <path d="M12 18v-11h3" />
  <path d="M3 17l0 -5l9 0" />
  <path d="M3 9l18 -6" />
  <path d="M6 12l0 -4" />
    </svg>
  )
);

FiretruckOutlineLogo.displayName = "FiretruckOutlineLogo";

export const FiretruckOutlineLogoMetadata = {
  id: "firetruck-outline",
  baseId: "firetruck-outline",
  variant: "default",
  name: "Firetruck Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FiretruckOutlineLogo;
