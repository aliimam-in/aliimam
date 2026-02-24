/**
 * Auto-generated logo component: Dice 4 (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Dice4LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Dice4Logo = React.forwardRef<SVGSVGElement, Dice4LogoProps>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
  <path d="M16 8h.01" />
  <path d="M8 8h.01" />
  <path d="M8 16h.01" />
  <path d="M16 16h.01" />
    </svg>
  )
);

Dice4Logo.displayName = "Dice4Logo";

export const Dice4LogoMetadata = {
  id: "dice-4",
  baseId: "dice-4",
  variant: "default",
  name: "Dice 4",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Dice4Logo;
