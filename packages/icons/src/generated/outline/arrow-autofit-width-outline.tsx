/**
 * Auto-generated logo component: Arrow Autofit Width Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowAutofitWidthOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowAutofitWidthOutlineLogo = React.forwardRef<SVGSVGElement, ArrowAutofitWidthOutlineLogoProps>(
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
      <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" />
  <path d="M10 18h-7" />
  <path d="M21 18h-7" />
  <path d="M6 15l-3 3l3 3" />
  <path d="M18 15l3 3l-3 3" />
    </svg>
  )
);

ArrowAutofitWidthOutlineLogo.displayName = "ArrowAutofitWidthOutlineLogo";

export const ArrowAutofitWidthOutlineLogoMetadata = {
  id: "arrow-autofit-width-outline",
  baseId: "arrow-autofit-width-outline",
  variant: "default",
  name: "Arrow Autofit Width Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowAutofitWidthOutlineLogo;
