/**
 * Auto-generated logo component: Arrow Autofit Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowAutofitUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowAutofitUpOutlineLogo = React.forwardRef<SVGSVGElement, ArrowAutofitUpOutlineLogoProps>(
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
      <path d="M12 4h-6a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h8" />
  <path d="M18 20v-17" />
  <path d="M15 6l3 -3l3 3" />
    </svg>
  )
);

ArrowAutofitUpOutlineLogo.displayName = "ArrowAutofitUpOutlineLogo";

export const ArrowAutofitUpOutlineLogoMetadata = {
  id: "arrow-autofit-up-outline",
  baseId: "arrow-autofit-up-outline",
  variant: "default",
  name: "Arrow Autofit Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowAutofitUpOutlineLogo;
