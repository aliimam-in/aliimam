/**
 * Auto-generated logo component: Arrow Left Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowLeftRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowLeftRightOutlineLogo = React.forwardRef<SVGSVGElement, ArrowLeftRightOutlineLogoProps>(
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
      <path d="M17 13l4 -4l-4 -4" />
  <path d="M7 13l-4 -4l4 -4" />
  <path d="M12 14a5 5 0 0 1 5 -5h4" />
  <path d="M12 19v-5a5 5 0 0 0 -5 -5h-4" />
    </svg>
  )
);

ArrowLeftRightOutlineLogo.displayName = "ArrowLeftRightOutlineLogo";

export const ArrowLeftRightOutlineLogoMetadata = {
  id: "arrow-left-right-outline",
  baseId: "arrow-left-right-outline",
  variant: "default",
  name: "Arrow Left Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowLeftRightOutlineLogo;
