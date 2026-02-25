/**
 * Auto-generated logo component: Math Symbols Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MathSymbolsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MathSymbolsOutlineLogo = React.forwardRef<SVGSVGElement, MathSymbolsOutlineLogoProps>(
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
      <path d="M3 12l18 0" />
  <path d="M12 3l0 18" />
  <path d="M16.5 4.5l3 3" />
  <path d="M19.5 4.5l-3 3" />
  <path d="M6 4l0 4" />
  <path d="M4 6l4 0" />
  <path d="M18 16l.01 0" />
  <path d="M18 20l.01 0" />
  <path d="M4 18l4 0" />
    </svg>
  )
);

MathSymbolsOutlineLogo.displayName = "MathSymbolsOutlineLogo";

export const MathSymbolsOutlineLogoMetadata = {
  id: "math-symbols-outline",
  baseId: "math-symbols-outline",
  variant: "default",
  name: "Math Symbols Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MathSymbolsOutlineLogo;
