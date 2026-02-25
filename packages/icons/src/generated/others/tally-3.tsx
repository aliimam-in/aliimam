/**
 * Auto-generated logo component: Tally 3 (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Tally3LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Tally3Logo = React.forwardRef<SVGSVGElement, Tally3LogoProps>(
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
    </svg>
  )
);

Tally3Logo.displayName = "Tally3Logo";

export const Tally3LogoMetadata = {
  id: "tally-3",
  baseId: "tally-3",
  variant: "default",
  name: "Tally 3",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Tally3Logo;
