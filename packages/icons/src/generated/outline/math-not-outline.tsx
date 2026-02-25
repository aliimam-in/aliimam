/**
 * Auto-generated logo component: Math Not Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MathNotOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MathNotOutlineLogo = React.forwardRef<SVGSVGElement, MathNotOutlineLogoProps>(
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
      <path d="M5 12h14v4" />
    </svg>
  )
);

MathNotOutlineLogo.displayName = "MathNotOutlineLogo";

export const MathNotOutlineLogoMetadata = {
  id: "math-not-outline",
  baseId: "math-not-outline",
  variant: "default",
  name: "Math Not Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MathNotOutlineLogo;
