/**
 * Auto-generated logo component: Meteor Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MeteorOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MeteorOffOutlineLogo = React.forwardRef<SVGSVGElement, MeteorOffOutlineLogoProps>(
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
      <path d="M9.75 5.761l3.25 -2.761l-1 5l9 -5l-5 9h5l-2.467 2.536m-1.983 2.04l-2.441 2.51a6.5 6.5 0 1 1 -8.855 -9.506l2.322 -1.972" />
  <path d="M7 14.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

MeteorOffOutlineLogo.displayName = "MeteorOffOutlineLogo";

export const MeteorOffOutlineLogoMetadata = {
  id: "meteor-off-outline",
  baseId: "meteor-off-outline",
  variant: "default",
  name: "Meteor Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MeteorOffOutlineLogo;
