/**
 * Auto-generated logo component: Meteor Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MeteorOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MeteorOutlineLogo = React.forwardRef<SVGSVGElement, MeteorOutlineLogoProps>(
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
      <path d="M21 3l-5 9h5l-6.891 7.086a6.5 6.5 0 1 1 -8.855 -9.506l7.746 -6.58l-1 5l9 -5" />
  <path d="M7 14.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" />
    </svg>
  )
);

MeteorOutlineLogo.displayName = "MeteorOutlineLogo";

export const MeteorOutlineLogoMetadata = {
  id: "meteor-outline",
  baseId: "meteor-outline",
  variant: "default",
  name: "Meteor Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MeteorOutlineLogo;
