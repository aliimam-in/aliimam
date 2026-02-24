/**
 * Auto-generated logo component: Link 2 (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Link2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Link2Logo = React.forwardRef<SVGSVGElement, Link2LogoProps>(
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
      <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"/><line x1="8" y1="12" x2="16" y2="12"/>
    </svg>
  )
);

Link2Logo.displayName = "Link2Logo";

export const Link2LogoMetadata = {
  id: "link-2",
  baseId: "link-2",
  variant: "default",
  name: "Link 2",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Link2Logo;
