/**
 * Auto-generated logo component: Chevron Right Pipe Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChevronRightPipeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChevronRightPipeOutlineLogo = React.forwardRef<SVGSVGElement, ChevronRightPipeOutlineLogoProps>(
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
      <path d="M6 6l6 6l-6 6" />
  <path d="M17 5v13" />
    </svg>
  )
);

ChevronRightPipeOutlineLogo.displayName = "ChevronRightPipeOutlineLogo";

export const ChevronRightPipeOutlineLogoMetadata = {
  id: "chevron-right-pipe-outline",
  baseId: "chevron-right-pipe-outline",
  variant: "default",
  name: "Chevron Right Pipe Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChevronRightPipeOutlineLogo;
