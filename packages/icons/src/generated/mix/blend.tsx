/**
 * Auto-generated logo component: Blend (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BlendLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BlendLogo = React.forwardRef<SVGSVGElement, BlendLogoProps>(
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
      <circle cx="9" cy="9" r="7" />
  <circle cx="15" cy="15" r="7" />
    </svg>
  )
);

BlendLogo.displayName = "BlendLogo";

export const BlendLogoMetadata = {
  id: "blend",
  baseId: "blend",
  variant: "default",
  name: "Blend",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BlendLogo;
