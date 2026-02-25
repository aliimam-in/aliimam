/**
 * Auto-generated logo component: Page Break Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PageBreakOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PageBreakOutlineLogo = React.forwardRef<SVGSVGElement, PageBreakOutlineLogoProps>(
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
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M19 18v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1" />
  <path d="M3 14h3m4.5 0h3m4.5 0h3" />
  <path d="M5 10v-5a2 2 0 0 1 2 -2h7l5 5v2" />
    </svg>
  )
);

PageBreakOutlineLogo.displayName = "PageBreakOutlineLogo";

export const PageBreakOutlineLogoMetadata = {
  id: "page-break-outline",
  baseId: "page-break-outline",
  variant: "default",
  name: "Page Break Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PageBreakOutlineLogo;
