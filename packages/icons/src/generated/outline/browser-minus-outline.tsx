/**
 * Auto-generated logo component: Browser Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrowserMinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrowserMinusOutlineLogo = React.forwardRef<SVGSVGElement, BrowserMinusOutlineLogoProps>(
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
      <path d="M4 8h16" />
  <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v9" />
  <path d="M8 4v4" />
  <path d="M16 19h6" />
    </svg>
  )
);

BrowserMinusOutlineLogo.displayName = "BrowserMinusOutlineLogo";

export const BrowserMinusOutlineLogoMetadata = {
  id: "browser-minus-outline",
  baseId: "browser-minus-outline",
  variant: "default",
  name: "Browser Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrowserMinusOutlineLogo;
