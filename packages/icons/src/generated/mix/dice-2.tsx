/**
 * Auto-generated logo component: Dice 2 (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Dice2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Dice2Logo = React.forwardRef<SVGSVGElement, Dice2LogoProps>(
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
  <path d="M15 9h.01" />
  <path d="M9 15h.01" />
    </svg>
  )
);

Dice2Logo.displayName = "Dice2Logo";

export const Dice2LogoMetadata = {
  id: "dice-2",
  baseId: "dice-2",
  variant: "default",
  name: "Dice 2",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Dice2Logo;
