/**
 * Auto-generated logo component: Sun Wind Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SunWindOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SunWindOutlineLogo = React.forwardRef<SVGSVGElement, SunWindOutlineLogoProps>(
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
      <path d="M14.468 10a4 4 0 1 0 -5.466 5.46" />
  <path d="M2 12h1" />
  <path d="M11 3v1" />
  <path d="M11 20v1" />
  <path d="M4.6 5.6l.7 .7" />
  <path d="M17.4 5.6l-.7 .7" />
  <path d="M5.3 17.7l-.7 .7" />
  <path d="M15 13h5a2 2 0 1 0 0 -4" />
  <path d="M12 16h5.714l.253 0a2 2 0 0 1 2.033 2a2 2 0 0 1 -2 2h-.286" />
    </svg>
  )
);

SunWindOutlineLogo.displayName = "SunWindOutlineLogo";

export const SunWindOutlineLogoMetadata = {
  id: "sun-wind-outline",
  baseId: "sun-wind-outline",
  variant: "default",
  name: "Sun Wind Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SunWindOutlineLogo;
