/**
 * Auto-generated logo component: Hand Finger Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HandFingerDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HandFingerDownOutlineLogo = React.forwardRef<SVGSVGElement, HandFingerDownOutlineLogoProps>(
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
      <path d="M8 12v8.5a1.5 1.5 0 0 0 3 0v-7.5" />
  <path d="M11 13.5v2a1.5 1.5 0 0 0 3 0v-2.5" />
  <path d="M14 14.5a1.5 1.5 0 0 0 3 0v-1.5" />
  <path d="M17 13.5a1.5 1.5 0 0 0 3 0v-4.5a6 6 0 0 0 -6 -6h-2h.208a6 6 0 0 0 -5.012 2.7l-.196 .3q -.468 .718 -3.286 5.728a1.5 1.5 0 0 0 .536 2.022c.734 .44 1.674 .325 2.28 -.28l1.47 -1.47" />
    </svg>
  )
);

HandFingerDownOutlineLogo.displayName = "HandFingerDownOutlineLogo";

export const HandFingerDownOutlineLogoMetadata = {
  id: "hand-finger-down-outline",
  baseId: "hand-finger-down-outline",
  variant: "default",
  name: "Hand Finger Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HandFingerDownOutlineLogo;
