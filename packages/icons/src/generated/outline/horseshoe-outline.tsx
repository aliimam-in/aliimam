/**
 * Auto-generated logo component: Horseshoe Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HorseshoeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HorseshoeOutlineLogo = React.forwardRef<SVGSVGElement, HorseshoeOutlineLogoProps>(
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
      <path d="M19 17c.5 -1.242 2 -2 2 -5s-1 -9 -9 -9s-9 6 -9 9s1.495 3.749 2 5l-2 1l2 3l2.406 -1.147c1.25 -.714 1.778 -2.08 1.203 -3.363c-1.078 -2.407 -1.609 -8.49 3.391 -8.49s4.469 6.083 3.39 8.49c-.574 1.284 -.045 2.649 1.204 3.363l2.406 1.147l2 -3l-2 -1" />
    </svg>
  )
);

HorseshoeOutlineLogo.displayName = "HorseshoeOutlineLogo";

export const HorseshoeOutlineLogoMetadata = {
  id: "horseshoe-outline",
  baseId: "horseshoe-outline",
  variant: "default",
  name: "Horseshoe Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HorseshoeOutlineLogo;
