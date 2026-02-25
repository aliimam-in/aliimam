/**
 * Auto-generated logo component: Variable Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VariableOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const VariableOutlineLogo = React.forwardRef<SVGSVGElement, VariableOutlineLogoProps>(
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
      <path d="M5 4c-2.5 5 -2.5 10 0 16m14 -16c2.5 5 2.5 10 0 16m-10 -11h1c1 0 1 1 2.016 3.527c.984 2.473 .984 3.473 1.984 3.473h1" />
  <path d="M8 16c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5" />
    </svg>
  )
);

VariableOutlineLogo.displayName = "VariableOutlineLogo";

export const VariableOutlineLogoMetadata = {
  id: "variable-outline",
  baseId: "variable-outline",
  variant: "default",
  name: "Variable Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default VariableOutlineLogo;
