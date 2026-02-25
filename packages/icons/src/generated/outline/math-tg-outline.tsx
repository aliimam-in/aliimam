/**
 * Auto-generated logo component: Math Tg Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MathTgOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MathTgOutlineLogo = React.forwardRef<SVGSVGElement, MathTgOutlineLogoProps>(
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
      <path d="M7 8h4" />
  <path d="M9 8v8" />
  <path d="M18 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1" />
    </svg>
  )
);

MathTgOutlineLogo.displayName = "MathTgOutlineLogo";

export const MathTgOutlineLogoMetadata = {
  id: "math-tg-outline",
  baseId: "math-tg-outline",
  variant: "default",
  name: "Math Tg Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MathTgOutlineLogo;
