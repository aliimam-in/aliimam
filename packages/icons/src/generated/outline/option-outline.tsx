/**
 * Auto-generated logo component: Option Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface OptionOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const OptionOutlineLogo = React.forwardRef<SVGSVGElement, OptionOutlineLogoProps>(
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
      <path d="M14 6h5m0 12h-5l-5 -12h-4" />
    </svg>
  )
);

OptionOutlineLogo.displayName = "OptionOutlineLogo";

export const OptionOutlineLogoMetadata = {
  id: "option-outline",
  baseId: "option-outline",
  variant: "default",
  name: "Option Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default OptionOutlineLogo;
