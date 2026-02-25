/**
 * Auto-generated logo component: Sun Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SunOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SunOutlineLogo = React.forwardRef<SVGSVGElement, SunOutlineLogoProps>(
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
      <path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
    </svg>
  )
);

SunOutlineLogo.displayName = "SunOutlineLogo";

export const SunOutlineLogoMetadata = {
  id: "sun-outline",
  baseId: "sun-outline",
  variant: "default",
  name: "Sun Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SunOutlineLogo;
