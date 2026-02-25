/**
 * Auto-generated logo component: Code Variable Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CodeVariableMinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CodeVariableMinusOutlineLogo = React.forwardRef<SVGSVGElement, CodeVariableMinusOutlineLogoProps>(
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
      <path d="M12.5 16h-6.5a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
  <path d="M16 18h6" />
    </svg>
  )
);

CodeVariableMinusOutlineLogo.displayName = "CodeVariableMinusOutlineLogo";

export const CodeVariableMinusOutlineLogoMetadata = {
  id: "code-variable-minus-outline",
  baseId: "code-variable-minus-outline",
  variant: "default",
  name: "Code Variable Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CodeVariableMinusOutlineLogo;
