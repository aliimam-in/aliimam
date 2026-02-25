/**
 * Auto-generated logo component: Pin Invoke Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PinInvokeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PinInvokeOutlineLogo = React.forwardRef<SVGSVGElement, PinInvokeOutlineLogoProps>(
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
      <path d="M21 13v5a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h9" />
  <path d="M17 7a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M10 11h4v4" />
  <path d="M10 15l4 -4" />
    </svg>
  )
);

PinInvokeOutlineLogo.displayName = "PinInvokeOutlineLogo";

export const PinInvokeOutlineLogoMetadata = {
  id: "pin-invoke-outline",
  baseId: "pin-invoke-outline",
  variant: "default",
  name: "Pin Invoke Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PinInvokeOutlineLogo;
