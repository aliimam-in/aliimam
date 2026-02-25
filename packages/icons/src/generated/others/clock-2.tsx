/**
 * Auto-generated logo component: Clock 2 (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Clock2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Clock2Logo = React.forwardRef<SVGSVGElement, Clock2LogoProps>(
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
  <path d="M12 6v6l4-2" />
    </svg>
  )
);

Clock2Logo.displayName = "Clock2Logo";

export const Clock2LogoMetadata = {
  id: "clock-2",
  baseId: "clock-2",
  variant: "default",
  name: "Clock 2",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Clock2Logo;
