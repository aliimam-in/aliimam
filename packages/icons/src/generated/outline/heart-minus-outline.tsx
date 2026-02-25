/**
 * Auto-generated logo component: Heart Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HeartMinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HeartMinusOutlineLogo = React.forwardRef<SVGSVGElement, HeartMinusOutlineLogoProps>(
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
      <path d="M19.5 12.572l-2.494 2.47m-5.006 4.958l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
  <path d="M16 19h6" />
    </svg>
  )
);

HeartMinusOutlineLogo.displayName = "HeartMinusOutlineLogo";

export const HeartMinusOutlineLogoMetadata = {
  id: "heart-minus-outline",
  baseId: "heart-minus-outline",
  variant: "default",
  name: "Heart Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HeartMinusOutlineLogo;
