/**
 * Auto-generated logo component: Square Dashed Bottom Code (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareDashedBottomCodeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareDashedBottomCodeLogo = React.forwardRef<SVGSVGElement, SquareDashedBottomCodeLogoProps>(
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
      <path d="M10 9.5 8 12l2 2.5" />
  <path d="M14 21h1" />
  <path d="m14 9.5 2 2.5-2 2.5" />
  <path d="M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2" />
  <path d="M9 21h1" />
    </svg>
  )
);

SquareDashedBottomCodeLogo.displayName = "SquareDashedBottomCodeLogo";

export const SquareDashedBottomCodeLogoMetadata = {
  id: "square-dashed-bottom-code",
  baseId: "square-dashed-bottom-code",
  variant: "default",
  name: "Square Dashed Bottom Code",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareDashedBottomCodeLogo;
