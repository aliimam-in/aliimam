/**
 * Auto-generated logo component: Arrow Merge Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowMergeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowMergeOutlineLogo = React.forwardRef<SVGSVGElement, ArrowMergeOutlineLogoProps>(
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
      <path d="M8 7l4 -4l4 4" />
  <path d="M12 3v5.394a6.737 6.737 0 0 1 -3 5.606a6.737 6.737 0 0 0 -3 5.606v1.394" />
  <path d="M12 3v5.394a6.737 6.737 0 0 0 3 5.606a6.737 6.737 0 0 1 3 5.606v1.394" />
    </svg>
  )
);

ArrowMergeOutlineLogo.displayName = "ArrowMergeOutlineLogo";

export const ArrowMergeOutlineLogoMetadata = {
  id: "arrow-merge-outline",
  baseId: "arrow-merge-outline",
  variant: "default",
  name: "Arrow Merge Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowMergeOutlineLogo;
