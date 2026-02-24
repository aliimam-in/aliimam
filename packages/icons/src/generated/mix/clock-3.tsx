/**
 * Auto-generated logo component: Clock 3 (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Clock3LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Clock3Logo = React.forwardRef<SVGSVGElement, Clock3LogoProps>(
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
  <path d="M12 6v6h4" />
    </svg>
  )
);

Clock3Logo.displayName = "Clock3Logo";

export const Clock3LogoMetadata = {
  id: "clock-3",
  baseId: "clock-3",
  variant: "default",
  name: "Clock 3",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Clock3Logo;
