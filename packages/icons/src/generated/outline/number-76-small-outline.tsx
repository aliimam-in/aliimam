/**
 * Auto-generated logo component: Number 76 Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Number76SmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Number76SmallOutlineLogo = React.forwardRef<SVGSVGElement, Number76SmallOutlineLogoProps>(
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
      <path d="M18 9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-3" />
  <path d="M6 8h4l-2 8" />
    </svg>
  )
);

Number76SmallOutlineLogo.displayName = "Number76SmallOutlineLogo";

export const Number76SmallOutlineLogoMetadata = {
  id: "number-76-small-outline",
  baseId: "number-76-small-outline",
  variant: "default",
  name: "Number 76 Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number76SmallOutlineLogo;
