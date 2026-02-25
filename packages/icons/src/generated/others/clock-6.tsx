/**
 * Auto-generated logo component: Clock 6 (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Clock6LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Clock6Logo = React.forwardRef<SVGSVGElement, Clock6LogoProps>(
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
  <path d="M12 6v10" />
    </svg>
  )
);

Clock6Logo.displayName = "Clock6Logo";

export const Clock6LogoMetadata = {
  id: "clock-6",
  baseId: "clock-6",
  variant: "default",
  name: "Clock 6",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Clock6Logo;
