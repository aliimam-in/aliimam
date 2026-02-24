/**
 * Auto-generated logo component: Circle Arrow Down (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleArrowDownLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleArrowDownLogo = React.forwardRef<SVGSVGElement, CircleArrowDownLogoProps>(
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
  <path d="M12 8v8" />
  <path d="m8 12 4 4 4-4" />
    </svg>
  )
);

CircleArrowDownLogo.displayName = "CircleArrowDownLogo";

export const CircleArrowDownLogoMetadata = {
  id: "circle-arrow-down",
  baseId: "circle-arrow-down",
  variant: "default",
  name: "Circle Arrow Down",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleArrowDownLogo;
