/**
 * Auto-generated logo component: Clock 1 (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Clock1LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Clock1Logo = React.forwardRef<SVGSVGElement, Clock1LogoProps>(
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
      <circle cx="12" cy="12" r="10" />
  <path d="M12 6v6l2-4" />
    </svg>
  )
);

Clock1Logo.displayName = "Clock1Logo";

export const Clock1LogoMetadata = {
  id: "clock-1",
  baseId: "clock-1",
  variant: "default",
  name: "Clock 1",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Clock1Logo;
