/**
 * Auto-generated logo component: Georgian Lari (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GeorgianLariLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GeorgianLariLogo = React.forwardRef<SVGSVGElement, GeorgianLariLogoProps>(
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
      <path d="M11.5 21a7.5 7.5 0 1 1 7.35-9" />
  <path d="M13 12V3" />
  <path d="M4 21h16" />
  <path d="M9 12V3" />
    </svg>
  )
);

GeorgianLariLogo.displayName = "GeorgianLariLogo";

export const GeorgianLariLogoMetadata = {
  id: "georgian-lari",
  baseId: "georgian-lari",
  variant: "default",
  name: "Georgian Lari",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GeorgianLariLogo;
