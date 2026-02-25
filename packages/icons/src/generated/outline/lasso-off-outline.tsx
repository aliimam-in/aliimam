/**
 * Auto-generated logo component: Lasso Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LassoOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LassoOffOutlineLogo = React.forwardRef<SVGSVGElement, LassoOffOutlineLogoProps>(
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
      <path d="M4.028 13.252c-.657 -.972 -1.028 -2.078 -1.028 -3.252c0 -1.804 .878 -3.449 2.319 -4.69m2.49 -1.506a11.066 11.066 0 0 1 4.191 -.804c4.97 0 9 3.134 9 7c0 1.799 -.873 3.44 -2.307 4.68m-2.503 1.517a11.066 11.066 0 0 1 -4.19 .803c-1.913 0 -3.686 -.464 -5.144 -1.255" />
  <path d="M3 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M5 17c0 1.42 .316 2.805 1 4" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

LassoOffOutlineLogo.displayName = "LassoOffOutlineLogo";

export const LassoOffOutlineLogoMetadata = {
  id: "lasso-off-outline",
  baseId: "lasso-off-outline",
  variant: "default",
  name: "Lasso Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LassoOffOutlineLogo;
