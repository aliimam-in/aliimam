/**
 * Auto-generated logo component: Blockquote Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BlockquoteOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BlockquoteOutlineLogo = React.forwardRef<SVGSVGElement, BlockquoteOutlineLogoProps>(
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
      <path d="M6 15h15" />
  <path d="M21 19h-15" />
  <path d="M15 11h6" />
  <path d="M21 7h-6" />
  <path d="M9 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2" />
  <path d="M3 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2" />
    </svg>
  )
);

BlockquoteOutlineLogo.displayName = "BlockquoteOutlineLogo";

export const BlockquoteOutlineLogoMetadata = {
  id: "blockquote-outline",
  baseId: "blockquote-outline",
  variant: "default",
  name: "Blockquote Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BlockquoteOutlineLogo;
