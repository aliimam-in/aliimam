/**
 * Auto-generated logo component: Jewish Star Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface JewishStarOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const JewishStarOutlineLogo = React.forwardRef<SVGSVGElement, JewishStarOutlineLogoProps>(
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
      <path d="M12 2l3 5h6l-3 5l3 5h-6l-3 5l-3 -5h-6l3 -5l-3 -5h6l3 -5" />
    </svg>
  )
);

JewishStarOutlineLogo.displayName = "JewishStarOutlineLogo";

export const JewishStarOutlineLogoMetadata = {
  id: "jewish-star-outline",
  baseId: "jewish-star-outline",
  variant: "default",
  name: "Jewish Star Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default JewishStarOutlineLogo;
