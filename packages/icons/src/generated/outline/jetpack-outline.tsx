/**
 * Auto-generated logo component: Jetpack Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface JetpackOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const JetpackOutlineLogo = React.forwardRef<SVGSVGElement, JetpackOutlineLogoProps>(
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
      <path d="M10 6a3 3 0 1 0 -6 0v7h6v-7" />
  <path d="M14 13h6v-7a3 3 0 0 0 -6 0v7" />
  <path d="M5 16c0 2.333 .667 4 2 5c1.333 -1 2 -2.667 2 -5" />
  <path d="M15 16c0 2.333 .667 4 2 5c1.333 -1 2 -2.667 2 -5" />
  <path d="M10 8h4" />
  <path d="M10 11h4" />
    </svg>
  )
);

JetpackOutlineLogo.displayName = "JetpackOutlineLogo";

export const JetpackOutlineLogoMetadata = {
  id: "jetpack-outline",
  baseId: "jetpack-outline",
  variant: "default",
  name: "Jetpack Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default JetpackOutlineLogo;
