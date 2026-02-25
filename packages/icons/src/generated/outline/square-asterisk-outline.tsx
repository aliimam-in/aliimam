/**
 * Auto-generated logo component: Square Asterisk Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareAsteriskOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareAsteriskOutlineLogo = React.forwardRef<SVGSVGElement, SquareAsteriskOutlineLogoProps>(
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
      <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
  <path d="M12 8.5v7" />
  <path d="M9 10l6 4" />
  <path d="M9 14l6 -4" />
    </svg>
  )
);

SquareAsteriskOutlineLogo.displayName = "SquareAsteriskOutlineLogo";

export const SquareAsteriskOutlineLogoMetadata = {
  id: "square-asterisk-outline",
  baseId: "square-asterisk-outline",
  variant: "default",
  name: "Square Asterisk Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareAsteriskOutlineLogo;
