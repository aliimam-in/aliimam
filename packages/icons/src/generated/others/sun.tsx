/**
 * Auto-generated logo component: Sun (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SunLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SunLogo = React.forwardRef<SVGSVGElement, SunLogoProps>(
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
      <circle cx="12" cy="12" r="4" />
  <path d="M12 2v2" />
  <path d="M12 20v2" />
  <path d="m4.93 4.93 1.41 1.41" />
  <path d="m17.66 17.66 1.41 1.41" />
  <path d="M2 12h2" />
  <path d="M20 12h2" />
  <path d="m6.34 17.66-1.41 1.41" />
  <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
);

SunLogo.displayName = "SunLogo";

export const SunLogoMetadata = {
  id: "sun",
  baseId: "sun",
  variant: "default",
  name: "Sun",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SunLogo;
