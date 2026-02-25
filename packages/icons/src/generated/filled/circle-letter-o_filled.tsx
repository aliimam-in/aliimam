/**
 * Auto-generated logo component: Circle Letter O (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleLetterOFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleLetterOFilledLogo = React.forwardRef<SVGSVGElement, CircleLetterOFilledLogoProps>(
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m0 5a3 3 0 0 0 -3 3v4a3 3 0 0 0 6 0v-4a3 3 0 0 0 -3 -3m0 2a1 1 0 0 1 1 1v4a1 1 0 0 1 -2 0v-4a1 1 0 0 1 1 -1" />
    </svg>
  )
);

CircleLetterOFilledLogo.displayName = "CircleLetterOFilledLogo";

export const CircleLetterOFilledLogoMetadata = {
  id: "circle-letter-o_filled",
  baseId: "circle-letter-o",
  variant: "filled",
  name: "Circle Letter O",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleLetterOFilledLogo;
