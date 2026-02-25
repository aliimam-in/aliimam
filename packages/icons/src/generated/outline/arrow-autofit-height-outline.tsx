/**
 * Auto-generated logo component: Arrow Autofit Height Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowAutofitHeightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowAutofitHeightOutlineLogo = React.forwardRef<SVGSVGElement, ArrowAutofitHeightOutlineLogoProps>(
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
      <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6" />
  <path d="M18 14v7" />
  <path d="M18 3v7" />
  <path d="M15 18l3 3l3 -3" />
  <path d="M15 6l3 -3l3 3" />
    </svg>
  )
);

ArrowAutofitHeightOutlineLogo.displayName = "ArrowAutofitHeightOutlineLogo";

export const ArrowAutofitHeightOutlineLogoMetadata = {
  id: "arrow-autofit-height-outline",
  baseId: "arrow-autofit-height-outline",
  variant: "default",
  name: "Arrow Autofit Height Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowAutofitHeightOutlineLogo;
