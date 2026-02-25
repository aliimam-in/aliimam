/**
 * Auto-generated logo component: Signal H Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SignalHOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SignalHOutlineLogo = React.forwardRef<SVGSVGElement, SignalHOutlineLogoProps>(
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
      <path d="M10 16v-8" />
  <path d="M14 8v8" />
  <path d="M10 12h4" />
    </svg>
  )
);

SignalHOutlineLogo.displayName = "SignalHOutlineLogo";

export const SignalHOutlineLogoMetadata = {
  id: "signal-h-outline",
  baseId: "signal-h-outline",
  variant: "default",
  name: "Signal H Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SignalHOutlineLogo;
