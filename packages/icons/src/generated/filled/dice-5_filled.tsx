/**
 * Auto-generated logo component: Dice 5 (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Dice5FilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Dice5FilledLogo = React.forwardRef<SVGSVGElement, Dice5FilledLogoProps>(
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
      <path d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005 .195v12.666c0 1.96 -1.537 3.56 -3.472 3.662l-.195 .005h-12.666a3.667 3.667 0 0 1 -3.662 -3.472l-.005 -.195v-12.666c0 -1.96 1.537 -3.56 3.472 -3.662l.195 -.005h12.666zm-2.833 12a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3m-7 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3m3.5 -3.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3m-3.5 -3.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3m7 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3" />
    </svg>
  )
);

Dice5FilledLogo.displayName = "Dice5FilledLogo";

export const Dice5FilledLogoMetadata = {
  id: "dice-5_filled",
  baseId: "dice-5",
  variant: "filled",
  name: "Dice 5",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Dice5FilledLogo;
