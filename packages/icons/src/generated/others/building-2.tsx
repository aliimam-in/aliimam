/**
 * Auto-generated logo component: Building 2 (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Building2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Building2Logo = React.forwardRef<SVGSVGElement, Building2LogoProps>(
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
      <path d="M10 12h4" />
  <path d="M10 8h4" />
  <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
  <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
  <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
    </svg>
  )
);

Building2Logo.displayName = "Building2Logo";

export const Building2LogoMetadata = {
  id: "building-2",
  baseId: "building-2",
  variant: "default",
  name: "Building 2",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Building2Logo;
