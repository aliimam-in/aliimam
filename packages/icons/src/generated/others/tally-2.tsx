/**
 * Auto-generated logo component: Tally 2 (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Tally2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Tally2Logo = React.forwardRef<SVGSVGElement, Tally2LogoProps>(
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
      <path d="M4 4v16" />
  <path d="M9 4v16" />
    </svg>
  )
);

Tally2Logo.displayName = "Tally2Logo";

export const Tally2LogoMetadata = {
  id: "tally-2",
  baseId: "tally-2",
  variant: "default",
  name: "Tally 2",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Tally2Logo;
