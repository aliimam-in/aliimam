/**
 * Auto-generated logo component: Math Sec Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MathSecOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MathSecOutlineLogo = React.forwardRef<SVGSVGElement, MathSecOutlineLogoProps>(
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
      <path d="M3 15c.345 .6 1.258 1 2 1a2 2 0 1 0 0 -4a2 2 0 1 1 0 -4c.746 0 1.656 .394 2 1" />
  <path d="M21 10a2 2 0 1 0 -4 0v4a2 2 0 1 0 4 0" />
  <path d="M14 8h-4v8h4" />
  <path d="M10 12h2.5" />
    </svg>
  )
);

MathSecOutlineLogo.displayName = "MathSecOutlineLogo";

export const MathSecOutlineLogoMetadata = {
  id: "math-sec-outline",
  baseId: "math-sec-outline",
  variant: "default",
  name: "Math Sec Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MathSecOutlineLogo;
