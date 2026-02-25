/**
 * Auto-generated logo component: Number 77 Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Number77SmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Number77SmallOutlineLogo = React.forwardRef<SVGSVGElement, Number77SmallOutlineLogoProps>(
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
      <path d="M14 8h4l-2 8" />
  <path d="M6 8h4l-2 8" />
    </svg>
  )
);

Number77SmallOutlineLogo.displayName = "Number77SmallOutlineLogo";

export const Number77SmallOutlineLogoMetadata = {
  id: "number-77-small-outline",
  baseId: "number-77-small-outline",
  variant: "default",
  name: "Number 77 Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number77SmallOutlineLogo;
