/**
 * Auto-generated logo component: Circle Letter I Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleLetterIOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleLetterIOutlineLogo = React.forwardRef<SVGSVGElement, CircleLetterIOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M12 8v8" />
    </svg>
  )
);

CircleLetterIOutlineLogo.displayName = "CircleLetterIOutlineLogo";

export const CircleLetterIOutlineLogoMetadata = {
  id: "circle-letter-i-outline",
  baseId: "circle-letter-i-outline",
  variant: "default",
  name: "Circle Letter I Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleLetterIOutlineLogo;
