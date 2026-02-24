/**
 * Auto-generated logo component: Square Pen (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquarePenLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquarePenLogo = React.forwardRef<SVGSVGElement, SquarePenLogoProps>(
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
      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
  <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
    </svg>
  )
);

SquarePenLogo.displayName = "SquarePenLogo";

export const SquarePenLogoMetadata = {
  id: "square-pen",
  baseId: "square-pen",
  variant: "default",
  name: "Square Pen",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquarePenLogo;
