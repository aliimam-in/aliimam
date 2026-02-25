/**
 * Auto-generated logo component: Egg Fried Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EggFriedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EggFriedOutlineLogo = React.forwardRef<SVGSVGElement, EggFriedOutlineLogoProps>(
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
      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M14 3a5 5 0 0 1 4.872 6.13a3 3 0 0 1 .178 5.681a3 3 0 1 1 -4.684 3.626a5 5 0 1 1 -8.662 -5a5 5 0 1 1 4.645 -8.856a4.982 4.982 0 0 1 3.651 -1.585l0 .004" />
    </svg>
  )
);

EggFriedOutlineLogo.displayName = "EggFriedOutlineLogo";

export const EggFriedOutlineLogoMetadata = {
  id: "egg-fried-outline",
  baseId: "egg-fried-outline",
  variant: "default",
  name: "Egg Fried Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EggFriedOutlineLogo;
