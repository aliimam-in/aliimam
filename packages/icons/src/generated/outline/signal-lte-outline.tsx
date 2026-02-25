/**
 * Auto-generated logo component: Signal Lte Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SignalLteOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SignalLteOutlineLogo = React.forwardRef<SVGSVGElement, SignalLteOutlineLogoProps>(
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
      <path d="M21 8h-4v8h4" />
  <path d="M17 12h2.5" />
  <path d="M4 8v8h4" />
  <path d="M10 8h4" />
  <path d="M12 8v8" />
    </svg>
  )
);

SignalLteOutlineLogo.displayName = "SignalLteOutlineLogo";

export const SignalLteOutlineLogoMetadata = {
  id: "signal-lte-outline",
  baseId: "signal-lte-outline",
  variant: "default",
  name: "Signal Lte Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SignalLteOutlineLogo;
