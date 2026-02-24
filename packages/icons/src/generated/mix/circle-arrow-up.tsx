/**
 * Auto-generated logo component: Circle Arrow Up (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleArrowUpLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleArrowUpLogo = React.forwardRef<SVGSVGElement, CircleArrowUpLogoProps>(
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
  <path d="m16 12-4-4-4 4" />
  <path d="M12 16V8" />
    </svg>
  )
);

CircleArrowUpLogo.displayName = "CircleArrowUpLogo";

export const CircleArrowUpLogoMetadata = {
  id: "circle-arrow-up",
  baseId: "circle-arrow-up",
  variant: "default",
  name: "Circle Arrow Up",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleArrowUpLogo;
