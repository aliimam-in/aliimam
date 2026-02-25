/**
 * Auto-generated logo component: Egg Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EggOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EggOutlineLogo = React.forwardRef<SVGSVGElement, EggOutlineLogoProps>(
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
      <path d="M19 14.083c0 4.154 -2.966 6.74 -7 6.917c-4.2 0 -7 -2.763 -7 -6.917c0 -5.538 3.5 -11.09 7 -11.083c3.5 .007 7 5.545 7 11.083" />
    </svg>
  )
);

EggOutlineLogo.displayName = "EggOutlineLogo";

export const EggOutlineLogoMetadata = {
  id: "egg-outline",
  baseId: "egg-outline",
  variant: "default",
  name: "Egg Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EggOutlineLogo;
