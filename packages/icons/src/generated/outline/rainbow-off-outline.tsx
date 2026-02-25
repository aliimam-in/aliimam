/**
 * Auto-generated logo component: Rainbow Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RainbowOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RainbowOffOutlineLogo = React.forwardRef<SVGSVGElement, RainbowOffOutlineLogoProps>(
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
      <path d="M22 17c0 -5.523 -4.477 -10 -10 -10c-.308 0 -.613 .014 -.914 .041m-3.208 .845a10 10 0 0 0 -5.878 9.114" />
  <path d="M11.088 11.069a6 6 0 0 0 -5.088 5.931" />
  <path d="M14 17a2 2 0 1 0 -4 0" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

RainbowOffOutlineLogo.displayName = "RainbowOffOutlineLogo";

export const RainbowOffOutlineLogoMetadata = {
  id: "rainbow-off-outline",
  baseId: "rainbow-off-outline",
  variant: "default",
  name: "Rainbow Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RainbowOffOutlineLogo;
