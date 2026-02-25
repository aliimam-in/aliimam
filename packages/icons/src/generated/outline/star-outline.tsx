/**
 * Auto-generated logo component: Star Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface StarOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const StarOutlineLogo = React.forwardRef<SVGSVGElement, StarOutlineLogoProps>(
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
      <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873l-6.158 -3.245" />
    </svg>
  )
);

StarOutlineLogo.displayName = "StarOutlineLogo";

export const StarOutlineLogoMetadata = {
  id: "star-outline",
  baseId: "star-outline",
  variant: "default",
  name: "Star Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default StarOutlineLogo;
