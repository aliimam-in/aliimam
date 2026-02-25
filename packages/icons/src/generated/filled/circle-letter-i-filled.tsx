/**
 * Auto-generated logo component: Circle Letter I Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleLetterIFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleLetterIFilledLogo = React.forwardRef<SVGSVGElement, CircleLetterIFilledLogoProps>(
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m0 5a1 1 0 0 0 -1 1v8a1 1 0 0 0 2 0v-8a1 1 0 0 0 -1 -1" />
    </svg>
  )
);

CircleLetterIFilledLogo.displayName = "CircleLetterIFilledLogo";

export const CircleLetterIFilledLogoMetadata = {
  id: "circle-letter-i-filled",
  baseId: "circle-letter-i-filled",
  variant: "default",
  name: "Circle Letter I Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleLetterIFilledLogo;
