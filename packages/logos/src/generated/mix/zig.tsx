/**
 * Auto-generated logo component: Zig (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZigLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ZigLogo = React.forwardRef<SVGSVGElement, ZigLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 300 176"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#F7A41D" d="M158.395 55.695H85.877V23.453h104.966L262.393 0 142.274 120.337h72.745v32.296H110.048l-71.55 22.655L158.395 55.695ZM0 120.288V23.453h71.746V55.75h-39.46v64.592H80.73l-32.296 32.297H0v-32.351Zm267.709-64.593h-48.45L251.555 23.4H300v129.18h-71.746v-32.296h39.504l-.049-64.588Z" />
    </svg>
  )
);

ZigLogo.displayName = "ZigLogo";

export const ZigLogoMetadata = {
  id: "zig",
  baseId: "zig",
  variant: "default",
  name: "Zig",
  category: "mix",
  tags: [],
  viewBox: "0 0 300 176",
} as const;

export default ZigLogo;
