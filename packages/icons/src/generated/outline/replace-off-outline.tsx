/**
 * Auto-generated logo component: Replace Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ReplaceOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ReplaceOffOutlineLogo = React.forwardRef<SVGSVGElement, ReplaceOffOutlineLogoProps>(
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
      <path d="M7 3h1a1 1 0 0 1 1 1v1m-.303 3.717a1 1 0 0 1 -.697 .283h-4a1 1 0 0 1 -1 -1v-4c0 -.28 .115 -.532 .3 -.714" />
  <path d="M19 15h1a1 1 0 0 1 1 1v1m-.303 3.717a1 1 0 0 1 -.697 .283h-4a1 1 0 0 1 -1 -1v-4c0 -.28 .115 -.532 .3 -.714" />
  <path d="M21 11v-3a2 2 0 0 0 -2 -2h-6l3 3m0 -6l-3 3" />
  <path d="M3 13v3a2 2 0 0 0 2 2h6l-3 -3m0 6l3 -3" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ReplaceOffOutlineLogo.displayName = "ReplaceOffOutlineLogo";

export const ReplaceOffOutlineLogoMetadata = {
  id: "replace-off-outline",
  baseId: "replace-off-outline",
  variant: "default",
  name: "Replace Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ReplaceOffOutlineLogo;
