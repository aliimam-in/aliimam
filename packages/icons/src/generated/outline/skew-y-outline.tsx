/**
 * Auto-generated logo component: Skew Y Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SkewYOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SkewYOutlineLogo = React.forwardRef<SVGSVGElement, SkewYOutlineLogoProps>(
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
      <path d="M4.326 19h15.348a1 1 0 0 0 .962 -1.275l-3.429 -12a1 1 0 0 0 -.961 -.725h-8.492a1 1 0 0 0 -.961 .725l-3.429 12a1 1 0 0 0 .962 1.275" />
    </svg>
  )
);

SkewYOutlineLogo.displayName = "SkewYOutlineLogo";

export const SkewYOutlineLogoMetadata = {
  id: "skew-y-outline",
  baseId: "skew-y-outline",
  variant: "default",
  name: "Skew Y Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SkewYOutlineLogo;
