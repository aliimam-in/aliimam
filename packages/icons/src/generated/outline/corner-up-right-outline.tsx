/**
 * Auto-generated logo component: Corner Up Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CornerUpRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CornerUpRightOutlineLogo = React.forwardRef<SVGSVGElement, CornerUpRightOutlineLogoProps>(
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
      <path d="M6 18v-6a3 3 0 0 1 3 -3h10l-4 -4m0 8l4 -4" />
    </svg>
  )
);

CornerUpRightOutlineLogo.displayName = "CornerUpRightOutlineLogo";

export const CornerUpRightOutlineLogoMetadata = {
  id: "corner-up-right-outline",
  baseId: "corner-up-right-outline",
  variant: "default",
  name: "Corner Up Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CornerUpRightOutlineLogo;
