/**
 * Auto-generated logo component: Signal Medium (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SignalMediumLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SignalMediumLogo = React.forwardRef<SVGSVGElement, SignalMediumLogoProps>(
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
    </svg>
  )
);

SignalMediumLogo.displayName = "SignalMediumLogo";

export const SignalMediumLogoMetadata = {
  id: "signal-medium",
  baseId: "signal-medium",
  variant: "default",
  name: "Signal Medium",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SignalMediumLogo;
