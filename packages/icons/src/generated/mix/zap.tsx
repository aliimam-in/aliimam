/**
 * Auto-generated logo component: Zap (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixZapLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixZapLogo = React.forwardRef<SVGSVGElement, MixZapLogoProps>(
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
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
  )
);

MixZapLogo.displayName = "MixZapLogo";

export const MixZapLogoMetadata = {
  id: "zap",
  baseId: "zap",
  variant: "default",
  name: "Zap",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixZapLogo;
