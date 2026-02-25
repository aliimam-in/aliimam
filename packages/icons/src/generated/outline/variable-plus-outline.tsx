/**
 * Auto-generated logo component: Variable Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VariablePlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const VariablePlusOutlineLogo = React.forwardRef<SVGSVGElement, VariablePlusOutlineLogoProps>(
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
      <path d="M5 4c-2.5 5 -2.5 10 0 16m14 -16c1.38 2.76 2 5.52 1.855 8.448m-11.855 -3.448h1c1 0 1 1 2.016 3.527c.785 1.972 .944 3.008 1.483 3.346" />
  <path d="M8 16c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
    </svg>
  )
);

VariablePlusOutlineLogo.displayName = "VariablePlusOutlineLogo";

export const VariablePlusOutlineLogoMetadata = {
  id: "variable-plus-outline",
  baseId: "variable-plus-outline",
  variant: "default",
  name: "Variable Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default VariablePlusOutlineLogo;
