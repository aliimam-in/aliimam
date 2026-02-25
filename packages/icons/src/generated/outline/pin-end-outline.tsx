/**
 * Auto-generated logo component: Pin End Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PinEndOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PinEndOutlineLogo = React.forwardRef<SVGSVGElement, PinEndOutlineLogoProps>(
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
      <path d="M21 11v-5a1 1 0 0 0 -1 -1h-16a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" />
  <path d="M17 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M10 13v-4h4" />
  <path d="M14 13l-4 -4" />
    </svg>
  )
);

PinEndOutlineLogo.displayName = "PinEndOutlineLogo";

export const PinEndOutlineLogoMetadata = {
  id: "pin-end-outline",
  baseId: "pin-end-outline",
  variant: "default",
  name: "Pin End Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PinEndOutlineLogo;
