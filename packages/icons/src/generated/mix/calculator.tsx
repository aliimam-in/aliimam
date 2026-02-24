/**
 * Auto-generated logo component: Calculator (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CalculatorLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CalculatorLogo = React.forwardRef<SVGSVGElement, CalculatorLogoProps>(
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
      <rect width="16" height="20" x="4" y="2" rx="2" />
  <line x1="8" x2="16" y1="6" y2="6" />
  <line x1="16" x2="16" y1="14" y2="18" />
  <path d="M16 10h.01" />
  <path d="M12 10h.01" />
  <path d="M8 10h.01" />
  <path d="M12 14h.01" />
  <path d="M8 14h.01" />
  <path d="M12 18h.01" />
  <path d="M8 18h.01" />
    </svg>
  )
);

CalculatorLogo.displayName = "CalculatorLogo";

export const CalculatorLogoMetadata = {
  id: "calculator",
  baseId: "calculator",
  variant: "default",
  name: "Calculator",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CalculatorLogo;
