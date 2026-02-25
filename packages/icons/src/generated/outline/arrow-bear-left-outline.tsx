/**
 * Auto-generated logo component: Arrow Bear Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowBearLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowBearLeftOutlineLogo = React.forwardRef<SVGSVGElement, ArrowBearLeftOutlineLogoProps>(
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
      <path d="M13 3h-5v5" />
  <path d="M8 3l7.536 7.536a5 5 0 0 1 1.464 3.534v6.93" />
    </svg>
  )
);

ArrowBearLeftOutlineLogo.displayName = "ArrowBearLeftOutlineLogo";

export const ArrowBearLeftOutlineLogoMetadata = {
  id: "arrow-bear-left-outline",
  baseId: "arrow-bear-left-outline",
  variant: "default",
  name: "Arrow Bear Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowBearLeftOutlineLogo;
