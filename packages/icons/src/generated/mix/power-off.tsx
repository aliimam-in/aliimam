/**
 * Auto-generated logo component: Power Off (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PowerOffLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PowerOffLogo = React.forwardRef<SVGSVGElement, PowerOffLogoProps>(
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
      <path d="M18.36 6.64A9 9 0 0 1 20.77 15" />
  <path d="M6.16 6.16a9 9 0 1 0 12.68 12.68" />
  <path d="M12 2v4" />
  <path d="m2 2 20 20" />
    </svg>
  )
);

PowerOffLogo.displayName = "PowerOffLogo";

export const PowerOffLogoMetadata = {
  id: "power-off",
  baseId: "power-off",
  variant: "default",
  name: "Power Off",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PowerOffLogo;
