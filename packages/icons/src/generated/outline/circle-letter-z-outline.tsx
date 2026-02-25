/**
 * Auto-generated logo component: Circle Letter Z Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleLetterZOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleLetterZOutlineLogo = React.forwardRef<SVGSVGElement, CircleLetterZOutlineLogoProps>(
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
  <path d="M10 8h4l-4 8h4" />
    </svg>
  )
);

CircleLetterZOutlineLogo.displayName = "CircleLetterZOutlineLogo";

export const CircleLetterZOutlineLogoMetadata = {
  id: "circle-letter-z-outline",
  baseId: "circle-letter-z-outline",
  variant: "default",
  name: "Circle Letter Z Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleLetterZOutlineLogo;
