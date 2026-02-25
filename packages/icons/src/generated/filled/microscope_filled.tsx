/**
 * Auto-generated logo component: Microscope (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MicroscopeFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MicroscopeFilledLogo = React.forwardRef<SVGSVGElement, MicroscopeFilledLogoProps>(
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
      <path d="M15.707 4.293l3 3a1 1 0 0 1 0 1.414l-1.553 1.555a7 7 0 0 1 -.256 9.74l2.102 -.002a1 1 0 0 1 0 2h-14a1 1 0 0 1 0 -2h1v-1a1 1 0 0 1 0 -2h2a1 1 0 0 1 0 2v1h4a5 5 0 0 0 3.737 -8.323l-3.03 3.03a1 1 0 0 1 -1.414 0l-.793 -.792l-.793 .792a1 1 0 1 1 -1.414 -1.414l.792 -.793l-.792 -.793a1 1 0 0 1 0 -1.414l6 -6a1 1 0 0 1 1.414 0m2 -2l3 3a1 1 0 1 1 -1.414 1.414l-3 -3a1 1 0 1 1 1.414 -1.414" />
    </svg>
  )
);

MicroscopeFilledLogo.displayName = "MicroscopeFilledLogo";

export const MicroscopeFilledLogoMetadata = {
  id: "microscope_filled",
  baseId: "microscope",
  variant: "filled",
  name: "Microscope",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MicroscopeFilledLogo;
