/**
 * Auto-generated logo component: Broadcast Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BroadcastOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BroadcastOutlineLogo = React.forwardRef<SVGSVGElement, BroadcastOutlineLogoProps>(
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
      <path d="M18.364 19.364a9 9 0 1 0 -12.728 0" />
  <path d="M15.536 16.536a5 5 0 1 0 -7.072 0" />
  <path d="M11 13a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  )
);

BroadcastOutlineLogo.displayName = "BroadcastOutlineLogo";

export const BroadcastOutlineLogoMetadata = {
  id: "broadcast-outline",
  baseId: "broadcast-outline",
  variant: "default",
  name: "Broadcast Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BroadcastOutlineLogo;
