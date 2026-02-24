/**
 * Auto-generated logo component: Signal High (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SignalHighLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SignalHighLogo = React.forwardRef<SVGSVGElement, SignalHighLogoProps>(
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
  <path d="M12 20v-8" />
  <path d="M17 20V8" />
    </svg>
  )
);

SignalHighLogo.displayName = "SignalHighLogo";

export const SignalHighLogoMetadata = {
  id: "signal-high",
  baseId: "signal-high",
  variant: "default",
  name: "Signal High",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SignalHighLogo;
