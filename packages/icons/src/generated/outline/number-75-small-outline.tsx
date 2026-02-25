/**
 * Auto-generated logo component: Number 75 Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Number75SmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Number75SmallOutlineLogo = React.forwardRef<SVGSVGElement, Number75SmallOutlineLogoProps>(
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
      <path d="M14 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-3v-4h4" />
  <path d="M6 8h4l-2 8" />
    </svg>
  )
);

Number75SmallOutlineLogo.displayName = "Number75SmallOutlineLogo";

export const Number75SmallOutlineLogoMetadata = {
  id: "number-75-small-outline",
  baseId: "number-75-small-outline",
  variant: "default",
  name: "Number 75 Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number75SmallOutlineLogo;
