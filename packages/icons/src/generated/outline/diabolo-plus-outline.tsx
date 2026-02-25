/**
 * Auto-generated logo component: Diabolo Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DiaboloPlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DiaboloPlusOutlineLogo = React.forwardRef<SVGSVGElement, DiaboloPlusOutlineLogoProps>(
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
      <path d="M4 6a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" />
  <path d="M4 6v.143a1 1 0 0 0 .048 .307l1.952 5.55l-1.964 5.67a1 1 0 0 0 -.036 .265v.065c0 1.657 3.582 3 8 3c.17 0 .34 -.002 .508 -.006m5.492 -8.994l1.952 -5.55a1 1 0 0 0 .048 -.307v-.143" />
  <path d="M6 12c0 1.105 2.686 2 6 2s6 -.895 6 -2" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
    </svg>
  )
);

DiaboloPlusOutlineLogo.displayName = "DiaboloPlusOutlineLogo";

export const DiaboloPlusOutlineLogoMetadata = {
  id: "diabolo-plus-outline",
  baseId: "diabolo-plus-outline",
  variant: "default",
  name: "Diabolo Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DiaboloPlusOutlineLogo;
