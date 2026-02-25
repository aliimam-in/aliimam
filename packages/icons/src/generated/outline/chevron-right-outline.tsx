/**
 * Auto-generated logo component: Chevron Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChevronRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChevronRightOutlineLogo = React.forwardRef<SVGSVGElement, ChevronRightOutlineLogoProps>(
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
      <path d="M9 6l6 6l-6 6" />
    </svg>
  )
);

ChevronRightOutlineLogo.displayName = "ChevronRightOutlineLogo";

export const ChevronRightOutlineLogoMetadata = {
  id: "chevron-right-outline",
  baseId: "chevron-right-outline",
  variant: "default",
  name: "Chevron Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChevronRightOutlineLogo;
