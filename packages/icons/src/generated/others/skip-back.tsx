/**
 * Auto-generated logo component: Skip Back (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SkipBackLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SkipBackLogo = React.forwardRef<SVGSVGElement, SkipBackLogoProps>(
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
      <path d="M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z" />
  <path d="M3 20V4" />
    </svg>
  )
);

SkipBackLogo.displayName = "SkipBackLogo";

export const SkipBackLogoMetadata = {
  id: "skip-back",
  baseId: "skip-back",
  variant: "default",
  name: "Skip Back",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SkipBackLogo;
