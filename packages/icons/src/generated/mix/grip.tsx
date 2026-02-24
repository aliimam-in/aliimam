/**
 * Auto-generated logo component: Grip (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GripLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GripLogo = React.forwardRef<SVGSVGElement, GripLogoProps>(
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
      <circle cx="12" cy="5" r="1" />
  <circle cx="19" cy="5" r="1" />
  <circle cx="5" cy="5" r="1" />
  <circle cx="12" cy="12" r="1" />
  <circle cx="19" cy="12" r="1" />
  <circle cx="5" cy="12" r="1" />
  <circle cx="12" cy="19" r="1" />
  <circle cx="19" cy="19" r="1" />
  <circle cx="5" cy="19" r="1" />
    </svg>
  )
);

GripLogo.displayName = "GripLogo";

export const GripLogoMetadata = {
  id: "grip",
  baseId: "grip",
  variant: "default",
  name: "Grip",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GripLogo;
