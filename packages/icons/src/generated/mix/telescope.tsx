/**
 * Auto-generated logo component: Telescope (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TelescopeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TelescopeLogo = React.forwardRef<SVGSVGElement, TelescopeLogoProps>(
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
      <path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44" />
  <path d="m13.56 11.747 4.332-.924" />
  <path d="m16 21-3.105-6.21" />
  <path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z" />
  <path d="m6.158 8.633 1.114 4.456" />
  <path d="m8 21 3.105-6.21" />
  <circle cx="12" cy="13" r="2" />
    </svg>
  )
);

TelescopeLogo.displayName = "TelescopeLogo";

export const TelescopeLogoMetadata = {
  id: "telescope",
  baseId: "telescope",
  variant: "default",
  name: "Telescope",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TelescopeLogo;
