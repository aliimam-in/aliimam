/**
 * Auto-generated logo component: Bubbles (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BubblesLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BubblesLogo = React.forwardRef<SVGSVGElement, BubblesLogoProps>(
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
      <path d="M7.001 15.085A1.5 1.5 0 0 1 9 16.5" />
  <circle cx="18.5" cy="8.5" r="3.5" />
  <circle cx="7.5" cy="16.5" r="5.5" />
  <circle cx="7.5" cy="4.5" r="2.5" />
    </svg>
  )
);

BubblesLogo.displayName = "BubblesLogo";

export const BubblesLogoMetadata = {
  id: "bubbles",
  baseId: "bubbles",
  variant: "default",
  name: "Bubbles",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BubblesLogo;
