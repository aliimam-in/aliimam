/**
 * Auto-generated logo component: Html Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HtmlOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HtmlOutlineLogo = React.forwardRef<SVGSVGElement, HtmlOutlineLogoProps>(
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
      <path d="M13 16v-8l2 5l2 -5v8" />
  <path d="M1 16v-8" />
  <path d="M5 8v8" />
  <path d="M1 12h4" />
  <path d="M7 8h4" />
  <path d="M9 8v8" />
  <path d="M20 8v8h3" />
    </svg>
  )
);

HtmlOutlineLogo.displayName = "HtmlOutlineLogo";

export const HtmlOutlineLogoMetadata = {
  id: "html-outline",
  baseId: "html-outline",
  variant: "default",
  name: "Html Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HtmlOutlineLogo;
