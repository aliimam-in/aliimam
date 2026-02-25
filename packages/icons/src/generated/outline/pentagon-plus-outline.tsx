/**
 * Auto-generated logo component: Pentagon Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PentagonPlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PentagonPlusOutlineLogo = React.forwardRef<SVGSVGElement, PentagonPlusOutlineLogoProps>(
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
      <path d="M12.5 21.005h-5.458a1.978 1.978 0 0 1 -1.881 -1.367l-3.064 -9.43a1.978 1.978 0 0 1 .719 -2.212l8.021 -5.828a1.978 1.978 0 0 1 2.326 0l8.021 5.828c.694 .504 .984 1.397 .719 2.212l-.78 2.401" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
    </svg>
  )
);

PentagonPlusOutlineLogo.displayName = "PentagonPlusOutlineLogo";

export const PentagonPlusOutlineLogoMetadata = {
  id: "pentagon-plus-outline",
  baseId: "pentagon-plus-outline",
  variant: "default",
  name: "Pentagon Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PentagonPlusOutlineLogo;
