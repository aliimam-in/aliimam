/**
 * Auto-generated logo component: Signal Zero (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SignalZeroLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SignalZeroLogo = React.forwardRef<SVGSVGElement, SignalZeroLogoProps>(
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
    </svg>
  )
);

SignalZeroLogo.displayName = "SignalZeroLogo";

export const SignalZeroLogoMetadata = {
  id: "signal-zero",
  baseId: "signal-zero",
  variant: "default",
  name: "Signal Zero",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SignalZeroLogo;
