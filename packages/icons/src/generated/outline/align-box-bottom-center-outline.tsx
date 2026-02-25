/**
 * Auto-generated logo component: Align Box Bottom Center Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlignBoxBottomCenterOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlignBoxBottomCenterOutlineLogo = React.forwardRef<SVGSVGElement, AlignBoxBottomCenterOutlineLogoProps>(
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
      <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
  <path d="M9 15v2" />
  <path d="M12 11v6" />
  <path d="M15 13v4" />
    </svg>
  )
);

AlignBoxBottomCenterOutlineLogo.displayName = "AlignBoxBottomCenterOutlineLogo";

export const AlignBoxBottomCenterOutlineLogoMetadata = {
  id: "align-box-bottom-center-outline",
  baseId: "align-box-bottom-center-outline",
  variant: "default",
  name: "Align Box Bottom Center Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlignBoxBottomCenterOutlineLogo;
