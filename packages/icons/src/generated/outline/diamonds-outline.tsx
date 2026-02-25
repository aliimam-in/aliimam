/**
 * Auto-generated logo component: Diamonds Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DiamondsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DiamondsOutlineLogo = React.forwardRef<SVGSVGElement, DiamondsOutlineLogoProps>(
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
      <path d="M10.831 20.413l-5.375 -6.91c-.608 -.783 -.608 -2.223 0 -3l5.375 -6.911a1.457 1.457 0 0 1 2.338 0l5.375 6.91c.608 .783 .608 2.223 0 3l-5.375 6.911a1.457 1.457 0 0 1 -2.338 0" />
    </svg>
  )
);

DiamondsOutlineLogo.displayName = "DiamondsOutlineLogo";

export const DiamondsOutlineLogoMetadata = {
  id: "diamonds-outline",
  baseId: "diamonds-outline",
  variant: "default",
  name: "Diamonds Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DiamondsOutlineLogo;
