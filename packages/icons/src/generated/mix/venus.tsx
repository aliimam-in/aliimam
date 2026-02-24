/**
 * Auto-generated logo component: Venus (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VenusLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const VenusLogo = React.forwardRef<SVGSVGElement, VenusLogoProps>(
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
      <path d="M12 15v7" />
  <path d="M9 19h6" />
  <circle cx="12" cy="9" r="6" />
    </svg>
  )
);

VenusLogo.displayName = "VenusLogo";

export const VenusLogoMetadata = {
  id: "venus",
  baseId: "venus",
  variant: "default",
  name: "Venus",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default VenusLogo;
