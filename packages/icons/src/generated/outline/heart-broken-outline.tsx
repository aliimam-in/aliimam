/**
 * Auto-generated logo component: Heart Broken Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HeartBrokenOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HeartBrokenOutlineLogo = React.forwardRef<SVGSVGElement, HeartBrokenOutlineLogoProps>(
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
      <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
  <path d="M12 6l-2 4l4 3l-2 4v3" />
    </svg>
  )
);

HeartBrokenOutlineLogo.displayName = "HeartBrokenOutlineLogo";

export const HeartBrokenOutlineLogoMetadata = {
  id: "heart-broken-outline",
  baseId: "heart-broken-outline",
  variant: "default",
  name: "Heart Broken Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HeartBrokenOutlineLogo;
