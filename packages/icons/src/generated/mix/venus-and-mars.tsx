/**
 * Auto-generated logo component: Venus And Mars (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VenusAndMarsLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const VenusAndMarsLogo = React.forwardRef<SVGSVGElement, VenusAndMarsLogoProps>(
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
      <path d="M10 20h4" />
  <path d="M12 16v6" />
  <path d="M17 2h4v4" />
  <path d="m21 2-5.46 5.46" />
  <circle cx="12" cy="11" r="5" />
    </svg>
  )
);

VenusAndMarsLogo.displayName = "VenusAndMarsLogo";

export const VenusAndMarsLogoMetadata = {
  id: "venus-and-mars",
  baseId: "venus-and-mars",
  variant: "default",
  name: "Venus And Mars",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default VenusAndMarsLogo;
