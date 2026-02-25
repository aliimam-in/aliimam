/**
 * Auto-generated logo component: Heart Bolt Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HeartBoltOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HeartBoltOutlineLogo = React.forwardRef<SVGSVGElement, HeartBoltOutlineLogoProps>(
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
      <path d="M13 19l-1 1l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 0 1 8.003 5.997" />
  <path d="M19 16l-2 3h4l-2 3" />
    </svg>
  )
);

HeartBoltOutlineLogo.displayName = "HeartBoltOutlineLogo";

export const HeartBoltOutlineLogoMetadata = {
  id: "heart-bolt-outline",
  baseId: "heart-bolt-outline",
  variant: "default",
  name: "Heart Bolt Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HeartBoltOutlineLogo;
