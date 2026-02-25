/**
 * Auto-generated logo component: Lollipop (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LollipopLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LollipopLogo = React.forwardRef<SVGSVGElement, LollipopLogoProps>(
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
      <circle cx="11" cy="11" r="8" />
  <path d="m21 21-4.3-4.3" />
  <path d="M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0" />
    </svg>
  )
);

LollipopLogo.displayName = "LollipopLogo";

export const LollipopLogoMetadata = {
  id: "lollipop",
  baseId: "lollipop",
  variant: "default",
  name: "Lollipop",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LollipopLogo;
