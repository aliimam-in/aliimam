/**
 * Auto-generated logo component: Tally 5 (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Tally5LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Tally5Logo = React.forwardRef<SVGSVGElement, Tally5LogoProps>(
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
  <path d="M14 4v16" />
  <path d="M19 4v16" />
  <path d="M22 6 2 18" />
    </svg>
  )
);

Tally5Logo.displayName = "Tally5Logo";

export const Tally5LogoMetadata = {
  id: "tally-5",
  baseId: "tally-5",
  variant: "default",
  name: "Tally 5",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Tally5Logo;
