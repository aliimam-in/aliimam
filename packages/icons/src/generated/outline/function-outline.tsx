/**
 * Auto-generated logo component: Function Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FunctionOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FunctionOutlineLogo = React.forwardRef<SVGSVGElement, FunctionOutlineLogoProps>(
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
      <path d="M4 6.667a2.667 2.667 0 0 1 2.667 -2.667h10.666a2.667 2.667 0 0 1 2.667 2.667v10.666a2.667 2.667 0 0 1 -2.667 2.667h-10.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -10.666" />
  <path d="M9 15.5v.25c0 .69 .56 1.25 1.25 1.25c.71 0 1.304 -.538 1.374 -1.244l.752 -7.512a1.381 1.381 0 0 1 1.374 -1.244c.69 0 1.25 .56 1.25 1.25v.25" />
  <path d="M9 12h6" />
    </svg>
  )
);

FunctionOutlineLogo.displayName = "FunctionOutlineLogo";

export const FunctionOutlineLogoMetadata = {
  id: "function-outline",
  baseId: "function-outline",
  variant: "default",
  name: "Function Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FunctionOutlineLogo;
