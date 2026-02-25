/**
 * Auto-generated logo component: Aerial Lift Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AerialLiftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AerialLiftOutlineLogo = React.forwardRef<SVGSVGElement, AerialLiftOutlineLogoProps>(
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
      <path d="M4 5l16 -2" />
  <path d="M12 4v10" />
  <path d="M6.894 8h10.306c2.45 3 2.45 9 -.2 12h-10.106c-2.544 -3 -2.544 -9 0 -12" />
  <path d="M5 14h14" />
    </svg>
  )
);

AerialLiftOutlineLogo.displayName = "AerialLiftOutlineLogo";

export const AerialLiftOutlineLogoMetadata = {
  id: "aerial-lift-outline",
  baseId: "aerial-lift-outline",
  variant: "default",
  name: "Aerial Lift Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AerialLiftOutlineLogo;
