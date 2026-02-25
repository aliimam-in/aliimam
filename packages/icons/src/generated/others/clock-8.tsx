/**
 * Auto-generated logo component: Clock 8 (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Clock8LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Clock8Logo = React.forwardRef<SVGSVGElement, Clock8LogoProps>(
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
  <path d="M12 6v6l-4 2" />
    </svg>
  )
);

Clock8Logo.displayName = "Clock8Logo";

export const Clock8LogoMetadata = {
  id: "clock-8",
  baseId: "clock-8",
  variant: "default",
  name: "Clock 8",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Clock8Logo;
