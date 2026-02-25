/**
 * Auto-generated logo component: Markdown Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MarkdownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MarkdownOutlineLogo = React.forwardRef<SVGSVGElement, MarkdownOutlineLogoProps>(
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
      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
  <path d="M7 15v-6l2 2l2 -2v6" />
  <path d="M14 13l2 2l2 -2m-2 2v-6" />
    </svg>
  )
);

MarkdownOutlineLogo.displayName = "MarkdownOutlineLogo";

export const MarkdownOutlineLogoMetadata = {
  id: "markdown-outline",
  baseId: "markdown-outline",
  variant: "default",
  name: "Markdown Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MarkdownOutlineLogo;
