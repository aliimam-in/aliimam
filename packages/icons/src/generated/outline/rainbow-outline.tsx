/**
 * Auto-generated logo component: Rainbow Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RainbowOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RainbowOutlineLogo = React.forwardRef<SVGSVGElement, RainbowOutlineLogoProps>(
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
      <path d="M22 17c0 -5.523 -4.477 -10 -10 -10c-5.523 0 -10 4.477 -10 10" />
  <path d="M18 17a6 6 0 1 0 -12 0" />
  <path d="M14 17a2 2 0 1 0 -4 0" />
    </svg>
  )
);

RainbowOutlineLogo.displayName = "RainbowOutlineLogo";

export const RainbowOutlineLogoMetadata = {
  id: "rainbow-outline",
  baseId: "rainbow-outline",
  variant: "default",
  name: "Rainbow Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RainbowOutlineLogo;
