/**
 * Auto-generated logo component: Arrow Sharp Turn Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowSharpTurnRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowSharpTurnRightOutlineLogo = React.forwardRef<SVGSVGElement, ArrowSharpTurnRightOutlineLogoProps>(
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
      <path d="M7 18v-11.31a.7 .7 0 0 1 1.195 -.495l9.805 9.805" />
  <path d="M13 16h5v-5" />
    </svg>
  )
);

ArrowSharpTurnRightOutlineLogo.displayName = "ArrowSharpTurnRightOutlineLogo";

export const ArrowSharpTurnRightOutlineLogoMetadata = {
  id: "arrow-sharp-turn-right-outline",
  baseId: "arrow-sharp-turn-right-outline",
  variant: "default",
  name: "Arrow Sharp Turn Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowSharpTurnRightOutlineLogo;
