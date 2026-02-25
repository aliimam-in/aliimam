/**
 * Auto-generated logo component: Math Lower Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MathLowerOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MathLowerOutlineLogo = React.forwardRef<SVGSVGElement, MathLowerOutlineLogoProps>(
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
      <path d="M19 18l-14 -6l14 -6" />
    </svg>
  )
);

MathLowerOutlineLogo.displayName = "MathLowerOutlineLogo";

export const MathLowerOutlineLogoMetadata = {
  id: "math-lower-outline",
  baseId: "math-lower-outline",
  variant: "default",
  name: "Math Lower Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MathLowerOutlineLogo;
