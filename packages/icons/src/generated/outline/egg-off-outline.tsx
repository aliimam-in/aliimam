/**
 * Auto-generated logo component: Egg Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EggOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EggOffOutlineLogo = React.forwardRef<SVGSVGElement, EggOffOutlineLogoProps>(
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
      <path d="M17.927 17.934c-1.211 1.858 -3.351 2.953 -5.927 3.066c-4.2 0 -7 -2.763 -7 -6.917c0 -2.568 .753 -5.14 1.91 -7.158" />
  <path d="M8.642 4.628c1.034 -1.02 2.196 -1.63 3.358 -1.628c3.5 .007 7 5.545 7 11.083c0 .298 -.015 .587 -.045 .868" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

EggOffOutlineLogo.displayName = "EggOffOutlineLogo";

export const EggOffOutlineLogoMetadata = {
  id: "egg-off-outline",
  baseId: "egg-off-outline",
  variant: "default",
  name: "Egg Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EggOffOutlineLogo;
