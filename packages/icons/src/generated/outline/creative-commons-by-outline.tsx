/**
 * Auto-generated logo component: Creative Commons By Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CreativeCommonsByOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CreativeCommonsByOutlineLogo = React.forwardRef<SVGSVGElement, CreativeCommonsByOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M11 7a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M9 13v-1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-.5l-.5 4h-2l-.5 -4h-.5a1 1 0 0 1 -1 -1" />
    </svg>
  )
);

CreativeCommonsByOutlineLogo.displayName = "CreativeCommonsByOutlineLogo";

export const CreativeCommonsByOutlineLogoMetadata = {
  id: "creative-commons-by-outline",
  baseId: "creative-commons-by-outline",
  variant: "default",
  name: "Creative Commons By Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CreativeCommonsByOutlineLogo;
