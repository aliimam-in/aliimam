/**
 * Auto-generated logo component: Markdown Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MarkdownOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MarkdownOffOutlineLogo = React.forwardRef<SVGSVGElement, MarkdownOffOutlineLogoProps>(
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
      <path d="M9 5h10a2 2 0 0 1 2 2v10" />
  <path d="M19 19h-14a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 1.85 -2" />
  <path d="M7 15v-6l2 2l1 -1m1 1v4" />
  <path d="M17.5 13.5l.5 -.5m-2 -1v-3" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

MarkdownOffOutlineLogo.displayName = "MarkdownOffOutlineLogo";

export const MarkdownOffOutlineLogoMetadata = {
  id: "markdown-off-outline",
  baseId: "markdown-off-outline",
  variant: "default",
  name: "Markdown Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MarkdownOffOutlineLogo;
