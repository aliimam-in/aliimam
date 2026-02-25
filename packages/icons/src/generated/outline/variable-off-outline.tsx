/**
 * Auto-generated logo component: Variable Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VariableOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const VariableOffOutlineLogo = React.forwardRef<SVGSVGElement, VariableOffOutlineLogoProps>(
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
      <path d="M4.675 4.68c-2.17 4.776 -2.062 9.592 .325 15.32" />
  <path d="M19 4c1.959 3.917 2.383 7.834 1.272 12.232m-.983 3.051c-.093 .238 -.189 .477 -.289 .717" />
  <path d="M11.696 11.696c.095 .257 .2 .533 .32 .831c.984 2.473 .984 3.473 1.984 3.473h1" />
  <path d="M8 16c1.5 0 3 -2 4 -3.5m2.022 -2.514c.629 -.582 1.304 -.986 1.978 -.986" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

VariableOffOutlineLogo.displayName = "VariableOffOutlineLogo";

export const VariableOffOutlineLogoMetadata = {
  id: "variable-off-outline",
  baseId: "variable-off-outline",
  variant: "default",
  name: "Variable Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default VariableOffOutlineLogo;
