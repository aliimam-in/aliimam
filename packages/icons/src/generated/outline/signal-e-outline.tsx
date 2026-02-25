/**
 * Auto-generated logo component: Signal E Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SignalEOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SignalEOutlineLogo = React.forwardRef<SVGSVGElement, SignalEOutlineLogoProps>(
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
      <path d="M14 8h-4v8h4" />
  <path d="M10 12h2.5" />
    </svg>
  )
);

SignalEOutlineLogo.displayName = "SignalEOutlineLogo";

export const SignalEOutlineLogoMetadata = {
  id: "signal-e-outline",
  baseId: "signal-e-outline",
  variant: "default",
  name: "Signal E Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SignalEOutlineLogo;
