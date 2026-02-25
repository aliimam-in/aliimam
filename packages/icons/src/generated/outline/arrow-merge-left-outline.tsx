/**
 * Auto-generated logo component: Arrow Merge Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowMergeLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowMergeLeftOutlineLogo = React.forwardRef<SVGSVGElement, ArrowMergeLeftOutlineLogoProps>(
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
      <path d="M8 8l4 -4l4 4" />
  <path d="M12 20v-16" />
  <path d="M6 18c4 -1.333 6 -4.667 6 -10" />
    </svg>
  )
);

ArrowMergeLeftOutlineLogo.displayName = "ArrowMergeLeftOutlineLogo";

export const ArrowMergeLeftOutlineLogoMetadata = {
  id: "arrow-merge-left-outline",
  baseId: "arrow-merge-left-outline",
  variant: "default",
  name: "Arrow Merge Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowMergeLeftOutlineLogo;
