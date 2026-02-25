/**
 * Auto-generated logo component: Chevron Up Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChevronUpRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChevronUpRightOutlineLogo = React.forwardRef<SVGSVGElement, ChevronUpRightOutlineLogoProps>(
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
      <path d="M8 8h8v8" />
    </svg>
  )
);

ChevronUpRightOutlineLogo.displayName = "ChevronUpRightOutlineLogo";

export const ChevronUpRightOutlineLogoMetadata = {
  id: "chevron-up-right-outline",
  baseId: "chevron-up-right-outline",
  variant: "default",
  name: "Chevron Up Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChevronUpRightOutlineLogo;
