/**
 * Auto-generated logo component: Clock 10 (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Clock10LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Clock10Logo = React.forwardRef<SVGSVGElement, Clock10LogoProps>(
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
  <path d="M12 6v6l-4-2" />
    </svg>
  )
);

Clock10Logo.displayName = "Clock10Logo";

export const Clock10LogoMetadata = {
  id: "clock-10",
  baseId: "clock-10",
  variant: "default",
  name: "Clock 10",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Clock10Logo;
