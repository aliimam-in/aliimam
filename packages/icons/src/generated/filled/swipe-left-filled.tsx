/**
 * Auto-generated logo component: Swipe Left Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SwipeLeftFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SwipeLeftFilledLogo = React.forwardRef<SVGSVGElement, SwipeLeftFilledLogoProps>(
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
      <path d="M16 7a5 5 0 1 1 -4.9 6.001l-4.685 -.001l1.292 1.293a1 1 0 0 1 .083 1.32l-.083 .094a1 1 0 0 1 -1.414 0l-3 -3a1 1 0 0 1 -.097 -.112l-.071 -.11l-.054 -.114l-.035 -.105l-.025 -.118l-.007 -.058l-.004 -.09l.003 -.075l.017 -.126l.03 -.111l.044 -.111l.052 -.098l.067 -.096l.08 -.09l3 -3a1 1 0 0 1 1.414 1.414l-1.292 1.293h4.685a5 5 0 0 1 4.9 -4" />
    </svg>
  )
);

SwipeLeftFilledLogo.displayName = "SwipeLeftFilledLogo";

export const SwipeLeftFilledLogoMetadata = {
  id: "swipe-left-filled",
  baseId: "swipe-left-filled",
  variant: "default",
  name: "Swipe Left Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SwipeLeftFilledLogo;
