/**
 * Auto-generated logo component: Sunset Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SunsetOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SunsetOutlineLogo = React.forwardRef<SVGSVGElement, SunsetOutlineLogoProps>(
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
      <path d="M3 17h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 0 1 8 0" />
  <path d="M3 21l18 0" />
  <path d="M12 3v6l3 -3m-6 0l3 3" />
    </svg>
  )
);

SunsetOutlineLogo.displayName = "SunsetOutlineLogo";

export const SunsetOutlineLogoMetadata = {
  id: "sunset-outline",
  baseId: "sunset-outline",
  variant: "default",
  name: "Sunset Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SunsetOutlineLogo;
