/**
 * Auto-generated logo component: Signal H Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SignalHPlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SignalHPlusOutlineLogo = React.forwardRef<SVGSVGElement, SignalHPlusOutlineLogoProps>(
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
      <path d="M7 16v-8" />
  <path d="M11 8v8" />
  <path d="M7 12h4" />
  <path d="M14 12h4" />
  <path d="M16 10v4" />
    </svg>
  )
);

SignalHPlusOutlineLogo.displayName = "SignalHPlusOutlineLogo";

export const SignalHPlusOutlineLogoMetadata = {
  id: "signal-h-plus-outline",
  baseId: "signal-h-plus-outline",
  variant: "default",
  name: "Signal H Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SignalHPlusOutlineLogo;
