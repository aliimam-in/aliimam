/**
 * Auto-generated logo component: Contrast 2 Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Contrast2OffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Contrast2OffOutlineLogo = React.forwardRef<SVGSVGElement, Contrast2OffOutlineLogoProps>(
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
      <path d="M4 18h2a6 6 0 0 0 6 -6m.878 -3.126a6 6 0 0 1 5.122 -2.874h2" />
  <path d="M8 4h10a2 2 0 0 1 2 2v10m-.586 3.414a2 2 0 0 1 -1.414 .586h-12a2 2 0 0 1 -2 -2v-12c0 -.547 .22 -1.043 .576 -1.405" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

Contrast2OffOutlineLogo.displayName = "Contrast2OffOutlineLogo";

export const Contrast2OffOutlineLogoMetadata = {
  id: "contrast-2-off-outline",
  baseId: "contrast-2-off-outline",
  variant: "default",
  name: "Contrast 2 Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Contrast2OffOutlineLogo;
