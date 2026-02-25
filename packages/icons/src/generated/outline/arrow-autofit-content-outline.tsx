/**
 * Auto-generated logo component: Arrow Autofit Content Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowAutofitContentOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowAutofitContentOutlineLogo = React.forwardRef<SVGSVGElement, ArrowAutofitContentOutlineLogoProps>(
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
      <path d="M6 4l-3 3l3 3" />
  <path d="M18 4l3 3l-3 3" />
  <path d="M4 16a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -2" />
  <path d="M10 7h-7" />
  <path d="M21 7h-7" />
    </svg>
  )
);

ArrowAutofitContentOutlineLogo.displayName = "ArrowAutofitContentOutlineLogo";

export const ArrowAutofitContentOutlineLogoMetadata = {
  id: "arrow-autofit-content-outline",
  baseId: "arrow-autofit-content-outline",
  variant: "default",
  name: "Arrow Autofit Content Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowAutofitContentOutlineLogo;
