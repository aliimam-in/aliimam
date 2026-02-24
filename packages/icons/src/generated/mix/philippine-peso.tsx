/**
 * Auto-generated logo component: Philippine Peso (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PhilippinePesoLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PhilippinePesoLogo = React.forwardRef<SVGSVGElement, PhilippinePesoLogoProps>(
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
      <path d="M20 11H4" />
  <path d="M20 7H4" />
  <path d="M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7" />
    </svg>
  )
);

PhilippinePesoLogo.displayName = "PhilippinePesoLogo";

export const PhilippinePesoLogoMetadata = {
  id: "philippine-peso",
  baseId: "philippine-peso",
  variant: "default",
  name: "Philippine Peso",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PhilippinePesoLogo;
