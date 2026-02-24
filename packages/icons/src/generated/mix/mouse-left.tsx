/**
 * Auto-generated logo component: Mouse Left (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MouseLeftLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MouseLeftLogo = React.forwardRef<SVGSVGElement, MouseLeftLogoProps>(
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
      <path d="M12 7.318V10" />
  <path d="M5 10v5a7 7 0 0 0 14 0V9c0-3.527-2.608-6.515-6-7" />
  <circle cx="7" cy="4" r="2" />
    </svg>
  )
);

MouseLeftLogo.displayName = "MouseLeftLogo";

export const MouseLeftLogoMetadata = {
  id: "mouse-left",
  baseId: "mouse-left",
  variant: "default",
  name: "Mouse Left",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MouseLeftLogo;
