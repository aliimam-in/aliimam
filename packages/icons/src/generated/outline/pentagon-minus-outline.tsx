/**
 * Auto-generated logo component: Pentagon Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PentagonMinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PentagonMinusOutlineLogo = React.forwardRef<SVGSVGElement, PentagonMinusOutlineLogoProps>(
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
      <path d="M12.5 21q -1.82 0 -5.458 .005a1.98 1.98 0 0 1 -1.881 -1.367l-3.064 -9.43a1.98 1.98 0 0 1 .719 -2.212l8.021 -5.828a1.98 1.98 0 0 1 2.326 0l8.021 5.828c.694 .504 .984 1.397 .719 2.212l-1.559 4.792" />
  <path d="M16 19h6" />
    </svg>
  )
);

PentagonMinusOutlineLogo.displayName = "PentagonMinusOutlineLogo";

export const PentagonMinusOutlineLogoMetadata = {
  id: "pentagon-minus-outline",
  baseId: "pentagon-minus-outline",
  variant: "default",
  name: "Pentagon Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PentagonMinusOutlineLogo;
