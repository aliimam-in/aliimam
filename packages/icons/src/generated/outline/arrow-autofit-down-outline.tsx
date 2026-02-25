/**
 * Auto-generated logo component: Arrow Autofit Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowAutofitDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowAutofitDownOutlineLogo = React.forwardRef<SVGSVGElement, ArrowAutofitDownOutlineLogoProps>(
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
      <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8" />
  <path d="M18 4v17" />
  <path d="M15 18l3 3l3 -3" />
    </svg>
  )
);

ArrowAutofitDownOutlineLogo.displayName = "ArrowAutofitDownOutlineLogo";

export const ArrowAutofitDownOutlineLogoMetadata = {
  id: "arrow-autofit-down-outline",
  baseId: "arrow-autofit-down-outline",
  variant: "default",
  name: "Arrow Autofit Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowAutofitDownOutlineLogo;
