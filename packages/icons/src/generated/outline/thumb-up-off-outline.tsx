/**
 * Auto-generated logo component: Thumb Up Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ThumbUpOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ThumbUpOffOutlineLogo = React.forwardRef<SVGSVGElement, ThumbUpOffOutlineLogoProps>(
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
      <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a3.987 3.987 0 0 0 2.828 -1.172m1.172 -2.828v-1a2 2 0 1 1 4 0v5h3a2 2 0 0 1 2 2c-.222 1.112 -.39 1.947 -.5 2.503m-.758 3.244c-.392 .823 -1.044 1.312 -1.742 1.253h-7a3 3 0 0 1 -3 -3" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ThumbUpOffOutlineLogo.displayName = "ThumbUpOffOutlineLogo";

export const ThumbUpOffOutlineLogoMetadata = {
  id: "thumb-up-off-outline",
  baseId: "thumb-up-off-outline",
  variant: "default",
  name: "Thumb Up Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ThumbUpOffOutlineLogo;
