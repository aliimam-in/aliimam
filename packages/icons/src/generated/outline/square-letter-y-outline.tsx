/**
 * Auto-generated logo component: Square Letter Y Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareLetterYOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareLetterYOutlineLogo = React.forwardRef<SVGSVGElement, SquareLetterYOutlineLogoProps>(
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
  <path d="M10 8l2 5l2 -5" />
  <path d="M12 16v-3" />
    </svg>
  )
);

SquareLetterYOutlineLogo.displayName = "SquareLetterYOutlineLogo";

export const SquareLetterYOutlineLogoMetadata = {
  id: "square-letter-y-outline",
  baseId: "square-letter-y-outline",
  variant: "default",
  name: "Square Letter Y Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareLetterYOutlineLogo;
