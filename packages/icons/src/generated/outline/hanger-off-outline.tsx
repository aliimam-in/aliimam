/**
 * Auto-generated logo component: Hanger Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HangerOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HangerOffOutlineLogo = React.forwardRef<SVGSVGElement, HangerOffOutlineLogoProps>(
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
      <path d="M14 6a2 2 0 1 0 -4 0m6.506 6.506l3.461 1.922a2 2 0 0 1 1.029 1.749v.823m-2 2h-14a2 2 0 0 1 -2 -2v-.823a2 2 0 0 1 1.029 -1.749l6.673 -3.707" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

HangerOffOutlineLogo.displayName = "HangerOffOutlineLogo";

export const HangerOffOutlineLogoMetadata = {
  id: "hanger-off-outline",
  baseId: "hanger-off-outline",
  variant: "default",
  name: "Hanger Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HangerOffOutlineLogo;
