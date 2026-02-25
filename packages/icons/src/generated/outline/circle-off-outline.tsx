/**
 * Auto-generated logo component: Circle Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleOffOutlineLogo = React.forwardRef<SVGSVGElement, CircleOffOutlineLogoProps>(
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
      <path d="M20.042 16.045a9 9 0 0 0 -12.087 -12.087m-2.318 1.677a9 9 0 1 0 12.725 12.73" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

CircleOffOutlineLogo.displayName = "CircleOffOutlineLogo";

export const CircleOffOutlineLogoMetadata = {
  id: "circle-off-outline",
  baseId: "circle-off-outline",
  variant: "default",
  name: "Circle Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleOffOutlineLogo;
