/**
 * Auto-generated logo component: Clock 7 (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Clock7LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Clock7Logo = React.forwardRef<SVGSVGElement, Clock7LogoProps>(
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
  <path d="M12 6v6l-2 4" />
    </svg>
  )
);

Clock7Logo.displayName = "Clock7Logo";

export const Clock7LogoMetadata = {
  id: "clock-7",
  baseId: "clock-7",
  variant: "default",
  name: "Clock 7",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Clock7Logo;
