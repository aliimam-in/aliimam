/**
 * Auto-generated logo component: Ripple Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RippleUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RippleUpOutlineLogo = React.forwardRef<SVGSVGElement, RippleUpOutlineLogoProps>(
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
      <path d="M3 7q 4.5 -3 9 0t 9 0" />
  <path d="M3 17q 4.5 -3 9 0q .218 .144 .434 .275" />
  <path d="M3 12q 4.5 -3 9 0q 1.941 1.294 3.882 1.472" />
  <path d="M19 22v-6" />
  <path d="M22 19l-3 -3l-3 3" />
    </svg>
  )
);

RippleUpOutlineLogo.displayName = "RippleUpOutlineLogo";

export const RippleUpOutlineLogoMetadata = {
  id: "ripple-up-outline",
  baseId: "ripple-up-outline",
  variant: "default",
  name: "Ripple Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RippleUpOutlineLogo;
