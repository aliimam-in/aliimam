/**
 * Auto-generated logo component: Star Half Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface StarHalfOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const StarHalfOutlineLogo = React.forwardRef<SVGSVGElement, StarHalfOutlineLogoProps>(
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
      <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l.007 15.748" />
    </svg>
  )
);

StarHalfOutlineLogo.displayName = "StarHalfOutlineLogo";

export const StarHalfOutlineLogoMetadata = {
  id: "star-half-outline",
  baseId: "star-half-outline",
  variant: "default",
  name: "Star Half Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default StarHalfOutlineLogo;
