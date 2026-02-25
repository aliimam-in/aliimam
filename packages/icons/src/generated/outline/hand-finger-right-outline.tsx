/**
 * Auto-generated logo component: Hand Finger Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HandFingerRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HandFingerRightOutlineLogo = React.forwardRef<SVGSVGElement, HandFingerRightOutlineLogoProps>(
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
      <path d="M12 8h8.5a1.5 1.5 0 0 1 0 3h-7.5" />
  <path d="M13.5 11h2a1.5 1.5 0 0 1 0 3h-2.5" />
  <path d="M14.5 14a1.5 1.5 0 0 1 0 3h-1.5" />
  <path d="M13.5 17a1.5 1.5 0 1 1 0 3h-4.5a6 6 0 0 1 -6 -6v-2v.208a6 6 0 0 1 2.7 -5.012l.3 -.196q .718 -.468 5.728 -3.286a1.5 1.5 0 0 1 2.022 .536c.44 .734 .325 1.674 -.28 2.28l-1.47 1.47" />
    </svg>
  )
);

HandFingerRightOutlineLogo.displayName = "HandFingerRightOutlineLogo";

export const HandFingerRightOutlineLogoMetadata = {
  id: "hand-finger-right-outline",
  baseId: "hand-finger-right-outline",
  variant: "default",
  name: "Hand Finger Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HandFingerRightOutlineLogo;
