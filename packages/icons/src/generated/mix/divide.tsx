/**
 * Auto-generated logo component: Divide (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixDivideLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixDivideLogo = React.forwardRef<SVGSVGElement, MixDivideLogoProps>(
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
      <circle cx="12" cy="6" r="1" />
  <line x1="5" x2="19" y1="12" y2="12" />
  <circle cx="12" cy="18" r="1" />
    </svg>
  )
);

MixDivideLogo.displayName = "MixDivideLogo";

export const MixDivideLogoMetadata = {
  id: "divide",
  baseId: "divide",
  variant: "default",
  name: "Divide",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixDivideLogo;
