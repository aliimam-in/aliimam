/**
 * Auto-generated logo component: Arrow Merge Both Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowMergeBothOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowMergeBothOutlineLogo = React.forwardRef<SVGSVGElement, ArrowMergeBothOutlineLogoProps>(
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
      <path d="M16 8l-4 -4l-4 4" />
  <path d="M12 20v-16" />
  <path d="M18 18c-4 -1.333 -6 -4.667 -6 -10" />
  <path d="M6 18c4 -1.333 6 -4.667 6 -10" />
    </svg>
  )
);

ArrowMergeBothOutlineLogo.displayName = "ArrowMergeBothOutlineLogo";

export const ArrowMergeBothOutlineLogoMetadata = {
  id: "arrow-merge-both-outline",
  baseId: "arrow-merge-both-outline",
  variant: "default",
  name: "Arrow Merge Both Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowMergeBothOutlineLogo;
