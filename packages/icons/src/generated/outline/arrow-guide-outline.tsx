/**
 * Auto-generated logo component: Arrow Guide Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowGuideOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowGuideOutlineLogo = React.forwardRef<SVGSVGElement, ArrowGuideOutlineLogoProps>(
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
      <path d="M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M7 19h3a2 2 0 0 0 2 -2v-8a2 2 0 0 1 2 -2h7" />
  <path d="M18 4l3 3l-3 3" />
    </svg>
  )
);

ArrowGuideOutlineLogo.displayName = "ArrowGuideOutlineLogo";

export const ArrowGuideOutlineLogoMetadata = {
  id: "arrow-guide-outline",
  baseId: "arrow-guide-outline",
  variant: "default",
  name: "Arrow Guide Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowGuideOutlineLogo;
