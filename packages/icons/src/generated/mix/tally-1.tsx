/**
 * Auto-generated logo component: Tally 1 (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Tally1LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Tally1Logo = React.forwardRef<SVGSVGElement, Tally1LogoProps>(
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
    </svg>
  )
);

Tally1Logo.displayName = "Tally1Logo";

export const Tally1LogoMetadata = {
  id: "tally-1",
  baseId: "tally-1",
  variant: "default",
  name: "Tally 1",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Tally1Logo;
