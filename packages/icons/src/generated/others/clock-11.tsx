/**
 * Auto-generated logo component: Clock 11 (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Clock11LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Clock11Logo = React.forwardRef<SVGSVGElement, Clock11LogoProps>(
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
  <path d="M12 6v6l-2-4" />
    </svg>
  )
);

Clock11Logo.displayName = "Clock11Logo";

export const Clock11LogoMetadata = {
  id: "clock-11",
  baseId: "clock-11",
  variant: "default",
  name: "Clock 11",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Clock11Logo;
