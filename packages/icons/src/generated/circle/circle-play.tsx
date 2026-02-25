/**
 * Auto-generated logo component: Circle Play (default)
 * Category: circle
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CirclePlayLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CirclePlayLogo = React.forwardRef<SVGSVGElement, CirclePlayLogoProps>(
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
      <path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" />
  <circle cx="12" cy="12" r="10" />
    </svg>
  )
);

CirclePlayLogo.displayName = "CirclePlayLogo";

export const CirclePlayLogoMetadata = {
  id: "circle-play",
  baseId: "circle-play",
  variant: "default",
  name: "Circle Play",
  category: "circle",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CirclePlayLogo;
