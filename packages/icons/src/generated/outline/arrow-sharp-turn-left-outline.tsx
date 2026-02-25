/**
 * Auto-generated logo component: Arrow Sharp Turn Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowSharpTurnLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowSharpTurnLeftOutlineLogo = React.forwardRef<SVGSVGElement, ArrowSharpTurnLeftOutlineLogoProps>(
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
      <path d="M17 18v-11.31a.7 .7 0 0 0 -1.195 -.495l-9.805 9.805" />
  <path d="M11 16h-5v-5" />
    </svg>
  )
);

ArrowSharpTurnLeftOutlineLogo.displayName = "ArrowSharpTurnLeftOutlineLogo";

export const ArrowSharpTurnLeftOutlineLogoMetadata = {
  id: "arrow-sharp-turn-left-outline",
  baseId: "arrow-sharp-turn-left-outline",
  variant: "default",
  name: "Arrow Sharp Turn Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowSharpTurnLeftOutlineLogo;
