/**
 * Auto-generated logo component: Clock 12 (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Clock12LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Clock12Logo = React.forwardRef<SVGSVGElement, Clock12LogoProps>(
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
  <path d="M12 6v6" />
    </svg>
  )
);

Clock12Logo.displayName = "Clock12Logo";

export const Clock12LogoMetadata = {
  id: "clock-12",
  baseId: "clock-12",
  variant: "default",
  name: "Clock 12",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Clock12Logo;
