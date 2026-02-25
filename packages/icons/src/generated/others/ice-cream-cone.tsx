/**
 * Auto-generated logo component: Ice Cream Cone (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface IceCreamConeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const IceCreamConeLogo = React.forwardRef<SVGSVGElement, IceCreamConeLogoProps>(
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
      <path d="m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11" />
  <path d="M17 7A5 5 0 0 0 7 7" />
  <path d="M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4" />
    </svg>
  )
);

IceCreamConeLogo.displayName = "IceCreamConeLogo";

export const IceCreamConeLogoMetadata = {
  id: "ice-cream-cone",
  baseId: "ice-cream-cone",
  variant: "default",
  name: "Ice Cream Cone",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default IceCreamConeLogo;
