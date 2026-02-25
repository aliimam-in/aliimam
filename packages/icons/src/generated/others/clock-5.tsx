/**
 * Auto-generated logo component: Clock 5 (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Clock5LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Clock5Logo = React.forwardRef<SVGSVGElement, Clock5LogoProps>(
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
  <path d="M12 6v6l2 4" />
    </svg>
  )
);

Clock5Logo.displayName = "Clock5Logo";

export const Clock5LogoMetadata = {
  id: "clock-5",
  baseId: "clock-5",
  variant: "default",
  name: "Clock 5",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Clock5Logo;
