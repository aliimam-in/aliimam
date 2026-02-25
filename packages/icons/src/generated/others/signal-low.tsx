/**
 * Auto-generated logo component: Signal Low (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SignalLowLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SignalLowLogo = React.forwardRef<SVGSVGElement, SignalLowLogoProps>(
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
      <path d="M2 20h.01" />
  <path d="M7 20v-4" />
    </svg>
  )
);

SignalLowLogo.displayName = "SignalLowLogo";

export const SignalLowLogoMetadata = {
  id: "signal-low",
  baseId: "signal-low",
  variant: "default",
  name: "Signal Low",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SignalLowLogo;
