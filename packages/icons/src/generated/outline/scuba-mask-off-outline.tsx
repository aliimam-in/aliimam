/**
 * Auto-generated logo component: Scuba Mask Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ScubaMaskOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ScubaMaskOffOutlineLogo = React.forwardRef<SVGSVGElement, ScubaMaskOffOutlineLogoProps>(
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
      <path d="M11 7h5a1 1 0 0 1 1 1v4.5c0 .154 -.014 .304 -.04 .45m-2 2.007c-.15 .028 -.305 .043 -.463 .043h-.5a2 2 0 0 1 -2 -2a2 2 0 1 0 -4 0a2 2 0 0 1 -2 2h-.5a2.5 2.5 0 0 1 -2.5 -2.5v-4.5a1 1 0 0 1 1 -1h3" />
  <path d="M10 17a2 2 0 0 0 2 2h3.5a5.475 5.475 0 0 0 2.765 -.744m2 -2c.47 -.81 .739 -1.752 .739 -2.756v-9.5" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ScubaMaskOffOutlineLogo.displayName = "ScubaMaskOffOutlineLogo";

export const ScubaMaskOffOutlineLogoMetadata = {
  id: "scuba-mask-off-outline",
  baseId: "scuba-mask-off-outline",
  variant: "default",
  name: "Scuba Mask Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ScubaMaskOffOutlineLogo;
