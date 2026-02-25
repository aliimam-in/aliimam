/**
 * Auto-generated logo component: Browser Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrowserOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrowserOffOutlineLogo = React.forwardRef<SVGSVGElement, BrowserOffOutlineLogoProps>(
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
      <path d="M8 4h11a1 1 0 0 1 1 1v11m-.288 3.702a1 1 0 0 1 -.712 .298h-14a1 1 0 0 1 -1 -1v-14c0 -.276 .112 -.526 .293 -.707" />
  <path d="M4 8h4m4 0h8" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

BrowserOffOutlineLogo.displayName = "BrowserOffOutlineLogo";

export const BrowserOffOutlineLogoMetadata = {
  id: "browser-off-outline",
  baseId: "browser-off-outline",
  variant: "default",
  name: "Browser Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrowserOffOutlineLogo;
