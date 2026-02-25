/**
 * Auto-generated logo component: Tally 4 (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Tally4LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Tally4Logo = React.forwardRef<SVGSVGElement, Tally4LogoProps>(
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
    </svg>
  )
);

Tally4Logo.displayName = "Tally4Logo";

export const Tally4LogoMetadata = {
  id: "tally-4",
  baseId: "tally-4",
  variant: "default",
  name: "Tally 4",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Tally4Logo;
