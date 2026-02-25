/**
 * Auto-generated logo component: Pi (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PiLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PiLogo = React.forwardRef<SVGSVGElement, PiLogoProps>(
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
      <line x1="9" x2="9" y1="4" y2="20" />
  <path d="M4 7c0-1.7 1.3-3 3-3h13" />
  <path d="M18 20c-1.7 0-3-1.3-3-3V4" />
    </svg>
  )
);

PiLogo.displayName = "PiLogo";

export const PiLogoMetadata = {
  id: "pi",
  baseId: "pi",
  variant: "default",
  name: "Pi",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PiLogo;
