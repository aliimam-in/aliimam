/**
 * Auto-generated logo component: Arrow Left Circle Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowLeftCircleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowLeftCircleOutlineLogo = React.forwardRef<SVGSVGElement, ArrowLeftCircleOutlineLogoProps>(
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
      <path d="M17 12h-14" />
  <path d="M6 9l-3 3l3 3" />
  <path d="M17 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    </svg>
  )
);

ArrowLeftCircleOutlineLogo.displayName = "ArrowLeftCircleOutlineLogo";

export const ArrowLeftCircleOutlineLogoMetadata = {
  id: "arrow-left-circle-outline",
  baseId: "arrow-left-circle-outline",
  variant: "default",
  name: "Arrow Left Circle Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowLeftCircleOutlineLogo;
