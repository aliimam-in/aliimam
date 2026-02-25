/**
 * Auto-generated logo component: Align Box Center Top Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlignBoxCenterTopOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlignBoxCenterTopOutlineLogo = React.forwardRef<SVGSVGElement, AlignBoxCenterTopOutlineLogoProps>(
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
      <path d="M3 19v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2" />
  <path d="M11 13h2" />
  <path d="M9 10h6" />
  <path d="M10 7h4" />
    </svg>
  )
);

AlignBoxCenterTopOutlineLogo.displayName = "AlignBoxCenterTopOutlineLogo";

export const AlignBoxCenterTopOutlineLogoMetadata = {
  id: "align-box-center-top-outline",
  baseId: "align-box-center-top-outline",
  variant: "default",
  name: "Align Box Center Top Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlignBoxCenterTopOutlineLogo;
