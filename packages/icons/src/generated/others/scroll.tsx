/**
 * Auto-generated logo component: Scroll (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ScrollLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ScrollLogo = React.forwardRef<SVGSVGElement, ScrollLogoProps>(
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
      <path d="M19 17V5a2 2 0 0 0-2-2H4" />
  <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
    </svg>
  )
);

ScrollLogo.displayName = "ScrollLogo";

export const ScrollLogoMetadata = {
  id: "scroll",
  baseId: "scroll",
  variant: "default",
  name: "Scroll",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ScrollLogo;
