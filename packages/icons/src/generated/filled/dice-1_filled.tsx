/**
 * Auto-generated logo component: Dice 1 (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Dice1FilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Dice1FilledLogo = React.forwardRef<SVGSVGElement, Dice1FilledLogoProps>(
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
      <path d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005 .195v12.666c0 1.96 -1.537 3.56 -3.472 3.662l-.195 .005h-12.666a3.667 3.667 0 0 1 -3.662 -3.472l-.005 -.195v-12.666c0 -1.96 1.537 -3.56 3.472 -3.662l.195 -.005h12.666zm-6.333 8.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3" />
    </svg>
  )
);

Dice1FilledLogo.displayName = "Dice1FilledLogo";

export const Dice1FilledLogoMetadata = {
  id: "dice-1_filled",
  baseId: "dice-1",
  variant: "filled",
  name: "Dice 1",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Dice1FilledLogo;
