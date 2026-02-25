/**
 * Auto-generated logo component: Square Arrow Out Up Right (default)
 * Category: square
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareArrowOutUpRightLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareArrowOutUpRightLogo = React.forwardRef<SVGSVGElement, SquareArrowOutUpRightLogoProps>(
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
      <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
  <path d="m21 3-9 9" />
  <path d="M15 3h6v6" />
    </svg>
  )
);

SquareArrowOutUpRightLogo.displayName = "SquareArrowOutUpRightLogo";

export const SquareArrowOutUpRightLogoMetadata = {
  id: "square-arrow-out-up-right",
  baseId: "square-arrow-out-up-right",
  variant: "default",
  name: "Square Arrow Out Up Right",
  category: "square",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareArrowOutUpRightLogo;
