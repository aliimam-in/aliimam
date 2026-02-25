/**
 * Auto-generated logo component: Hanger Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HangerOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HangerOutlineLogo = React.forwardRef<SVGSVGElement, HangerOutlineLogoProps>(
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
      <path d="M14 6a2 2 0 1 0 -4 0c0 1.667 .67 3 2 4h-.008l7.971 4.428a2 2 0 0 1 1.029 1.749v.823a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-.823a2 2 0 0 1 1.029 -1.749l7.971 -4.428" />
    </svg>
  )
);

HangerOutlineLogo.displayName = "HangerOutlineLogo";

export const HangerOutlineLogoMetadata = {
  id: "hanger-outline",
  baseId: "hanger-outline",
  variant: "default",
  name: "Hanger Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HangerOutlineLogo;
