/**
 * Auto-generated logo component: Tent (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TentLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TentLogo = React.forwardRef<SVGSVGElement, TentLogoProps>(
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
      <path d="M3.5 21 14 3" />
  <path d="M20.5 21 10 3" />
  <path d="M15.5 21 12 15l-3.5 6" />
  <path d="M2 21h20" />
    </svg>
  )
);

TentLogo.displayName = "TentLogo";

export const TentLogoMetadata = {
  id: "tent",
  baseId: "tent",
  variant: "default",
  name: "Tent",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TentLogo;
