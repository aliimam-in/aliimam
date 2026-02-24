/**
 * Auto-generated logo component: Mic Off (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MicOffLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MicOffLogo = React.forwardRef<SVGSVGElement, MicOffLogoProps>(
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
      <line x1="1" y1="1" x2="23" y2="23"/><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"/><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>
    </svg>
  )
);

MicOffLogo.displayName = "MicOffLogo";

export const MicOffLogoMetadata = {
  id: "mic-off",
  baseId: "mic-off",
  variant: "default",
  name: "Mic Off",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MicOffLogo;
