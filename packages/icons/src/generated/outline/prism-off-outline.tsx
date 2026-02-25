/**
 * Auto-generated logo component: Prism Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PrismOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PrismOffOutlineLogo = React.forwardRef<SVGSVGElement, PrismOffOutlineLogoProps>(
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
      <path d="M12 12v10" />
  <path d="M17.957 17.952l-4.937 3.703a1.7 1.7 0 0 1 -2.04 0l-5.98 -4.485a2.5 2.5 0 0 1 -1 -2v-11.17m3 -1h12a1 1 0 0 1 1 1v11.17c0 .25 -.037 .495 -.109 .729" />
  <path d="M12.688 8.7a1.7 1.7 0 0 0 .357 -.214l6.655 -5.186" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

PrismOffOutlineLogo.displayName = "PrismOffOutlineLogo";

export const PrismOffOutlineLogoMetadata = {
  id: "prism-off-outline",
  baseId: "prism-off-outline",
  variant: "default",
  name: "Prism Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PrismOffOutlineLogo;
