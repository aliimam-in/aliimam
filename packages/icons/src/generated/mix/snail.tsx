/**
 * Auto-generated logo component: Snail (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SnailLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SnailLogo = React.forwardRef<SVGSVGElement, SnailLogoProps>(
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
      <path d="M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0" />
  <circle cx="10" cy="13" r="8" />
  <path d="M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6" />
  <path d="M18 3 19.1 5.2" />
  <path d="M22 3 20.9 5.2" />
    </svg>
  )
);

SnailLogo.displayName = "SnailLogo";

export const SnailLogoMetadata = {
  id: "snail",
  baseId: "snail",
  variant: "default",
  name: "Snail",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SnailLogo;
