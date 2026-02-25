/**
 * Auto-generated logo component: Signal G Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SignalGOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SignalGOutlineLogo = React.forwardRef<SVGSVGElement, SignalGOutlineLogoProps>(
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
      <path d="M14 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1" />
    </svg>
  )
);

SignalGOutlineLogo.displayName = "SignalGOutlineLogo";

export const SignalGOutlineLogoMetadata = {
  id: "signal-g-outline",
  baseId: "signal-g-outline",
  variant: "default",
  name: "Signal G Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SignalGOutlineLogo;
