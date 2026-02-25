/**
 * Auto-generated logo component: Pentagon Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PentagonOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PentagonOffOutlineLogo = React.forwardRef<SVGSVGElement, PentagonOffOutlineLogoProps>(
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
      <path d="M8.133 4.133l2.704 -1.965a1.978 1.978 0 0 1 2.326 0l8.021 5.828c.694 .504 .984 1.397 .719 2.212l-1.887 5.808m-.981 3.02l-.196 .602a1.978 1.978 0 0 1 -1.881 1.367h-9.916a1.978 1.978 0 0 1 -1.881 -1.367l-3.064 -9.43a1.978 1.978 0 0 1 .719 -2.212l2.994 -2.176" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

PentagonOffOutlineLogo.displayName = "PentagonOffOutlineLogo";

export const PentagonOffOutlineLogoMetadata = {
  id: "pentagon-off-outline",
  baseId: "pentagon-off-outline",
  variant: "default",
  name: "Pentagon Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PentagonOffOutlineLogo;
