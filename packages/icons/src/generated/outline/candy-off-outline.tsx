/**
 * Auto-generated logo component: Candy Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CandyOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CandyOffOutlineLogo = React.forwardRef<SVGSVGElement, CandyOffOutlineLogoProps>(
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
      <path d="M11.174 7.17l.119 -.12a2 2 0 0 1 2.828 0l2.829 2.83a2 2 0 0 1 0 2.828l-.124 .124m-2 2l-2.123 2.123a2 2 0 0 1 -2.828 0l-2.829 -2.831a2 2 0 0 1 0 -2.828l2.113 -2.112" />
  <path d="M16.243 9.172l3.086 -.772a1.5 1.5 0 0 0 .697 -2.516l-2.216 -2.217a1.5 1.5 0 0 0 -2.44 .47l-1.248 2.913" />
  <path d="M9.172 16.243l-.772 3.086a1.5 1.5 0 0 1 -2.516 .697l-2.217 -2.216a1.5 1.5 0 0 1 .47 -2.44l2.913 -1.248" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

CandyOffOutlineLogo.displayName = "CandyOffOutlineLogo";

export const CandyOffOutlineLogoMetadata = {
  id: "candy-off-outline",
  baseId: "candy-off-outline",
  variant: "default",
  name: "Candy Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CandyOffOutlineLogo;
