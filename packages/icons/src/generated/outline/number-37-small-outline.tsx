/**
 * Auto-generated logo component: Number 37 Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Number37SmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Number37SmallOutlineLogo = React.forwardRef<SVGSVGElement, Number37SmallOutlineLogoProps>(
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
  <path d="M6 8h2.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1 -1.5 1.5h-1.5h1.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1 -1.5 1.5h-2.5" />
    </svg>
  )
);

Number37SmallOutlineLogo.displayName = "Number37SmallOutlineLogo";

export const Number37SmallOutlineLogoMetadata = {
  id: "number-37-small-outline",
  baseId: "number-37-small-outline",
  variant: "default",
  name: "Number 37 Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number37SmallOutlineLogo;
