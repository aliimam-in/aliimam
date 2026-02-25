/**
 * Auto-generated logo component: Chevron Down Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChevronDownRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChevronDownRightOutlineLogo = React.forwardRef<SVGSVGElement, ChevronDownRightOutlineLogoProps>(
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
      <path d="M16 8v8h-8" />
    </svg>
  )
);

ChevronDownRightOutlineLogo.displayName = "ChevronDownRightOutlineLogo";

export const ChevronDownRightOutlineLogoMetadata = {
  id: "chevron-down-right-outline",
  baseId: "chevron-down-right-outline",
  variant: "default",
  name: "Chevron Down Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChevronDownRightOutlineLogo;
