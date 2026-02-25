/**
 * Auto-generated logo component: Icons Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface IconsOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const IconsOffOutlineLogo = React.forwardRef<SVGSVGElement, IconsOffOutlineLogoProps>(
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
      <path d="M4.01 4.041a3.5 3.5 0 0 0 2.49 5.959c.975 0 1.865 -.357 2.5 -1m.958 -3.044a3.503 3.503 0 0 0 -2.905 -2.912" />
  <path d="M2.5 21h8l-4 -7l-4 7" />
  <path d="M14 3l7 7" />
  <path d="M14 10l7 -7" />
  <path d="M18 14h3v3m0 4h-7v-7" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

IconsOffOutlineLogo.displayName = "IconsOffOutlineLogo";

export const IconsOffOutlineLogoMetadata = {
  id: "icons-off-outline",
  baseId: "icons-off-outline",
  variant: "default",
  name: "Icons Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default IconsOffOutlineLogo;
