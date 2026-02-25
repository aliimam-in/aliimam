/**
 * Auto-generated logo component: Number 70 Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Number70SmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Number70SmallOutlineLogo = React.forwardRef<SVGSVGElement, Number70SmallOutlineLogoProps>(
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
      <path d="M14 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0" />
  <path d="M6 8h4l-2 8" />
    </svg>
  )
);

Number70SmallOutlineLogo.displayName = "Number70SmallOutlineLogo";

export const Number70SmallOutlineLogoMetadata = {
  id: "number-70-small-outline",
  baseId: "number-70-small-outline",
  variant: "default",
  name: "Number 70 Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number70SmallOutlineLogo;
