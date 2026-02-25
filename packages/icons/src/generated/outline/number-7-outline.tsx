/**
 * Auto-generated logo component: Number 7 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Number7OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Number7OutlineLogo = React.forwardRef<SVGSVGElement, Number7OutlineLogoProps>(
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
      <path d="M8 4h8l-4 16" />
    </svg>
  )
);

Number7OutlineLogo.displayName = "Number7OutlineLogo";

export const Number7OutlineLogoMetadata = {
  id: "number-7-outline",
  baseId: "number-7-outline",
  variant: "default",
  name: "Number 7 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number7OutlineLogo;
