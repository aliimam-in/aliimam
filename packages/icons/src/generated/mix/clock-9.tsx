/**
 * Auto-generated logo component: Clock 9 (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Clock9LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Clock9Logo = React.forwardRef<SVGSVGElement, Clock9LogoProps>(
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
  <path d="M12 6v6H8" />
    </svg>
  )
);

Clock9Logo.displayName = "Clock9Logo";

export const Clock9LogoMetadata = {
  id: "clock-9",
  baseId: "clock-9",
  variant: "default",
  name: "Clock 9",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Clock9Logo;
