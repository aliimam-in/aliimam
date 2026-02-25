/**
 * Auto-generated logo component: Hand Grab (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HandGrabLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HandGrabLogo = React.forwardRef<SVGSVGElement, HandGrabLogoProps>(
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
      <path d="M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" />
  <path d="M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" />
  <path d="M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5" />
  <path d="M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
  <path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0" />
    </svg>
  )
);

HandGrabLogo.displayName = "HandGrabLogo";

export const HandGrabLogoMetadata = {
  id: "hand-grab",
  baseId: "hand-grab",
  variant: "default",
  name: "Hand Grab",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HandGrabLogo;
