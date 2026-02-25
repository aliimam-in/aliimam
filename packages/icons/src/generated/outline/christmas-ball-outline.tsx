/**
 * Auto-generated logo component: Christmas Ball Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChristmasBallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChristmasBallOutlineLogo = React.forwardRef<SVGSVGElement, ChristmasBallOutlineLogoProps>(
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
      <path d="M4 13a8 8 0 1 0 16 0a8 8 0 1 0 -16 0" />
  <path d="M11 5l1 -2l1 2" />
  <path d="M4.512 10.161c2.496 -1.105 4.992 -.825 7.488 .839c2.627 1.752 5.255 1.97 7.882 .653" />
  <path d="M4.315 15.252c2.561 -1.21 5.123 -.96 7.685 .748c2.293 1.528 4.585 1.889 6.878 1.081" />
    </svg>
  )
);

ChristmasBallOutlineLogo.displayName = "ChristmasBallOutlineLogo";

export const ChristmasBallOutlineLogoMetadata = {
  id: "christmas-ball-outline",
  baseId: "christmas-ball-outline",
  variant: "default",
  name: "Christmas Ball Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChristmasBallOutlineLogo;
