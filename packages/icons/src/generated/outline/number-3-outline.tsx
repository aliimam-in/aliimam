/**
 * Auto-generated logo component: Number 3 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Number3OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Number3OutlineLogo = React.forwardRef<SVGSVGElement, Number3OutlineLogoProps>(
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
      <path d="M12 12a4 4 0 1 0 -4 -4" />
  <path d="M8 16a4 4 0 1 0 4 -4" />
    </svg>
  )
);

Number3OutlineLogo.displayName = "Number3OutlineLogo";

export const Number3OutlineLogoMetadata = {
  id: "number-3-outline",
  baseId: "number-3-outline",
  variant: "default",
  name: "Number 3 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number3OutlineLogo;
