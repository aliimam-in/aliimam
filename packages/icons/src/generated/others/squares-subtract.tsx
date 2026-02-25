/**
 * Auto-generated logo component: Squares Subtract (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquaresSubtractLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquaresSubtractLogo = React.forwardRef<SVGSVGElement, SquaresSubtractLogoProps>(
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
      <path d="M10 22a2 2 0 0 1-2-2" />
  <path d="M16 22h-2" />
  <path d="M16 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-5a2 2 0 0 1 2-2h5a1 1 0 0 0 1-1z" />
  <path d="M20 8a2 2 0 0 1 2 2" />
  <path d="M22 14v2" />
  <path d="M22 20a2 2 0 0 1-2 2" />
    </svg>
  )
);

SquaresSubtractLogo.displayName = "SquaresSubtractLogo";

export const SquaresSubtractLogoMetadata = {
  id: "squares-subtract",
  baseId: "squares-subtract",
  variant: "default",
  name: "Squares Subtract",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquaresSubtractLogo;
