/**
 * Auto-generated logo component: Arrow Autofit Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowAutofitRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowAutofitRightOutlineLogo = React.forwardRef<SVGSVGElement, ArrowAutofitRightOutlineLogoProps>(
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
      <path d="M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8" />
  <path d="M4 18h17" />
  <path d="M18 15l3 3l-3 3" />
    </svg>
  )
);

ArrowAutofitRightOutlineLogo.displayName = "ArrowAutofitRightOutlineLogo";

export const ArrowAutofitRightOutlineLogoMetadata = {
  id: "arrow-autofit-right-outline",
  baseId: "arrow-autofit-right-outline",
  variant: "default",
  name: "Arrow Autofit Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowAutofitRightOutlineLogo;
