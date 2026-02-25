/**
 * Auto-generated logo component: Dice 1 (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Dice1LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Dice1Logo = React.forwardRef<SVGSVGElement, Dice1LogoProps>(
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
  <path d="M12 12h.01" />
    </svg>
  )
);

Dice1Logo.displayName = "Dice1Logo";

export const Dice1LogoMetadata = {
  id: "dice-1",
  baseId: "dice-1",
  variant: "default",
  name: "Dice 1",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Dice1Logo;
