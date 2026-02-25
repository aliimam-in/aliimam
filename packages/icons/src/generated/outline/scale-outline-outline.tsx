/**
 * Auto-generated logo component: Scale Outline Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ScaleOutlineOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ScaleOutlineOutlineLogo = React.forwardRef<SVGSVGElement, ScaleOutlineOutlineLogoProps>(
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
      <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-10" />
  <path d="M12 7c1.956 0 3.724 .802 5 2.095l-2.956 2.904a3 3 0 0 0 -2.038 -.799a3 3 0 0 0 -2.038 .798l-2.956 -2.903a6.979 6.979 0 0 1 5 -2.095" />
    </svg>
  )
);

ScaleOutlineOutlineLogo.displayName = "ScaleOutlineOutlineLogo";

export const ScaleOutlineOutlineLogoMetadata = {
  id: "scale-outline-outline",
  baseId: "scale-outline-outline",
  variant: "default",
  name: "Scale Outline Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ScaleOutlineOutlineLogo;
