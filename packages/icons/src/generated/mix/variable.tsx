/**
 * Auto-generated logo component: Variable (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VariableLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const VariableLogo = React.forwardRef<SVGSVGElement, VariableLogoProps>(
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
      <path d="M8 21s-4-3-4-9 4-9 4-9" />
  <path d="M16 3s4 3 4 9-4 9-4 9" />
  <line x1="15" x2="9" y1="9" y2="15" />
  <line x1="9" x2="15" y1="9" y2="15" />
    </svg>
  )
);

VariableLogo.displayName = "VariableLogo";

export const VariableLogoMetadata = {
  id: "variable",
  baseId: "variable",
  variant: "default",
  name: "Variable",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default VariableLogo;
