/**
 * Auto-generated logo component: Circle Slash 2 (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleSlash2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleSlash2Logo = React.forwardRef<SVGSVGElement, CircleSlash2LogoProps>(
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
  <path d="M22 2 2 22" />
    </svg>
  )
);

CircleSlash2Logo.displayName = "CircleSlash2Logo";

export const CircleSlash2LogoMetadata = {
  id: "circle-slash-2",
  baseId: "circle-slash-2",
  variant: "default",
  name: "Circle Slash 2",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleSlash2Logo;
