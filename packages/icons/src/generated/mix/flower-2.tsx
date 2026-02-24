/**
 * Auto-generated logo component: Flower 2 (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Flower2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Flower2Logo = React.forwardRef<SVGSVGElement, Flower2LogoProps>(
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
      <path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1" />
  <circle cx="12" cy="8" r="2" />
  <path d="M12 10v12" />
  <path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z" />
  <path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z" />
    </svg>
  )
);

Flower2Logo.displayName = "Flower2Logo";

export const Flower2LogoMetadata = {
  id: "flower-2",
  baseId: "flower-2",
  variant: "default",
  name: "Flower 2",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Flower2Logo;
