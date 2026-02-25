/**
 * Auto-generated logo component: Calculator Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CalculatorOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CalculatorOutlineLogo = React.forwardRef<SVGSVGElement, CalculatorOutlineLogoProps>(
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
      <path d="M4 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -14" />
  <path d="M8 8a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1l0 -1" />
  <path d="M8 14l0 .01" />
  <path d="M12 14l0 .01" />
  <path d="M16 14l0 .01" />
  <path d="M8 17l0 .01" />
  <path d="M12 17l0 .01" />
  <path d="M16 17l0 .01" />
    </svg>
  )
);

CalculatorOutlineLogo.displayName = "CalculatorOutlineLogo";

export const CalculatorOutlineLogoMetadata = {
  id: "calculator-outline",
  baseId: "calculator-outline",
  variant: "default",
  name: "Calculator Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CalculatorOutlineLogo;
