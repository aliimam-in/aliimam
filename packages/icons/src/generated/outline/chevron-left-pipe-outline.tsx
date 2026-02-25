/**
 * Auto-generated logo component: Chevron Left Pipe Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChevronLeftPipeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChevronLeftPipeOutlineLogo = React.forwardRef<SVGSVGElement, ChevronLeftPipeOutlineLogoProps>(
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
      <path d="M7 6v12" />
  <path d="M18 6l-6 6l6 6" />
    </svg>
  )
);

ChevronLeftPipeOutlineLogo.displayName = "ChevronLeftPipeOutlineLogo";

export const ChevronLeftPipeOutlineLogoMetadata = {
  id: "chevron-left-pipe-outline",
  baseId: "chevron-left-pipe-outline",
  variant: "default",
  name: "Chevron Left Pipe Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChevronLeftPipeOutlineLogo;
