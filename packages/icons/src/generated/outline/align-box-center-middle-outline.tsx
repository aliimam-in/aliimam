/**
 * Auto-generated logo component: Align Box Center Middle Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlignBoxCenterMiddleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlignBoxCenterMiddleOutlineLogo = React.forwardRef<SVGSVGElement, AlignBoxCenterMiddleOutlineLogoProps>(
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
  <path d="M11 15h2" />
  <path d="M9 12h6" />
  <path d="M10 9h4" />
    </svg>
  )
);

AlignBoxCenterMiddleOutlineLogo.displayName = "AlignBoxCenterMiddleOutlineLogo";

export const AlignBoxCenterMiddleOutlineLogoMetadata = {
  id: "align-box-center-middle-outline",
  baseId: "align-box-center-middle-outline",
  variant: "default",
  name: "Align Box Center Middle Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlignBoxCenterMiddleOutlineLogo;
