/**
 * Auto-generated logo component: Heart Handshake (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HeartHandshakeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HeartHandshakeLogo = React.forwardRef<SVGSVGElement, HeartHandshakeLogoProps>(
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
      <path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762" />
    </svg>
  )
);

HeartHandshakeLogo.displayName = "HeartHandshakeLogo";

export const HeartHandshakeLogoMetadata = {
  id: "heart-handshake",
  baseId: "heart-handshake",
  variant: "default",
  name: "Heart Handshake",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HeartHandshakeLogo;
