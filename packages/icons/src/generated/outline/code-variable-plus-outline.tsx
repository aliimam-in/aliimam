/**
 * Auto-generated logo component: Code Variable Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CodeVariablePlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CodeVariablePlusOutlineLogo = React.forwardRef<SVGSVGElement, CodeVariablePlusOutlineLogoProps>(
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
      <path d="M13 16h-7a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v1" />
  <path d="M16 18h6" />
  <path d="M19 15v6" />
    </svg>
  )
);

CodeVariablePlusOutlineLogo.displayName = "CodeVariablePlusOutlineLogo";

export const CodeVariablePlusOutlineLogoMetadata = {
  id: "code-variable-plus-outline",
  baseId: "code-variable-plus-outline",
  variant: "default",
  name: "Code Variable Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CodeVariablePlusOutlineLogo;
