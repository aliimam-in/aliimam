/**
 * Auto-generated logo component: Calendar 1 (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Calendar1LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Calendar1Logo = React.forwardRef<SVGSVGElement, Calendar1LogoProps>(
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
      <path d="M11 14h1v4" />
  <path d="M16 2v4" />
  <path d="M3 10h18" />
  <path d="M8 2v4" />
  <rect x="3" y="4" width="18" height="18" rx="2" />
    </svg>
  )
);

Calendar1Logo.displayName = "Calendar1Logo";

export const Calendar1LogoMetadata = {
  id: "calendar-1",
  baseId: "calendar-1",
  variant: "default",
  name: "Calendar 1",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Calendar1Logo;
