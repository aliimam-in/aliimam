/**
 * Auto-generated logo component: Clock 4 (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Clock4LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Clock4Logo = React.forwardRef<SVGSVGElement, Clock4LogoProps>(
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
  <path d="M12 6v6l4 2" />
    </svg>
  )
);

Clock4Logo.displayName = "Clock4Logo";

export const Clock4LogoMetadata = {
  id: "clock-4",
  baseId: "clock-4",
  variant: "default",
  name: "Clock 4",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Clock4Logo;
