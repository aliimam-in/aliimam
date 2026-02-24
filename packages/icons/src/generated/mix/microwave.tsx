/**
 * Auto-generated logo component: Microwave (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MicrowaveLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MicrowaveLogo = React.forwardRef<SVGSVGElement, MicrowaveLogoProps>(
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
      <rect width="20" height="15" x="2" y="4" rx="2" />
  <rect width="8" height="7" x="6" y="8" rx="1" />
  <path d="M18 8v7" />
  <path d="M6 19v2" />
  <path d="M18 19v2" />
    </svg>
  )
);

MicrowaveLogo.displayName = "MicrowaveLogo";

export const MicrowaveLogoMetadata = {
  id: "microwave",
  baseId: "microwave",
  variant: "default",
  name: "Microwave",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MicrowaveLogo;
