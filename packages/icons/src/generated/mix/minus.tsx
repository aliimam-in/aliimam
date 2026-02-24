/**
 * Auto-generated logo component: Minus (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixMinusLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixMinusLogo = React.forwardRef<SVGSVGElement, MixMinusLogoProps>(
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
      <path d="M5 12h14" />
    </svg>
  )
);

MixMinusLogo.displayName = "MixMinusLogo";

export const MixMinusLogoMetadata = {
  id: "minus",
  baseId: "minus",
  variant: "default",
  name: "Minus",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixMinusLogo;
