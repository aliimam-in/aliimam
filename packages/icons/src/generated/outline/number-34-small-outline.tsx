/**
 * Auto-generated logo component: Number 34 Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Number34SmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Number34SmallOutlineLogo = React.forwardRef<SVGSVGElement, Number34SmallOutlineLogoProps>(
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
      <path d="M14 8v3a1 1 0 0 0 1 1h3" />
  <path d="M18 8v8" />
  <path d="M6 8h2.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1 -1.5 1.5h-1.5h1.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1 -1.5 1.5h-2.5" />
    </svg>
  )
);

Number34SmallOutlineLogo.displayName = "Number34SmallOutlineLogo";

export const Number34SmallOutlineLogoMetadata = {
  id: "number-34-small-outline",
  baseId: "number-34-small-outline",
  variant: "default",
  name: "Number 34 Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number34SmallOutlineLogo;
