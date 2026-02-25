/**
 * Auto-generated logo component: Number 1 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Number1OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Number1OutlineLogo = React.forwardRef<SVGSVGElement, Number1OutlineLogoProps>(
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
      <path d="M13 20v-16l-5 5" />
    </svg>
  )
);

Number1OutlineLogo.displayName = "Number1OutlineLogo";

export const Number1OutlineLogoMetadata = {
  id: "number-1-outline",
  baseId: "number-1-outline",
  variant: "default",
  name: "Number 1 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number1OutlineLogo;
