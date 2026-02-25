/**
 * Auto-generated logo component: Broadcast Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BroadcastOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BroadcastOffOutlineLogo = React.forwardRef<SVGSVGElement, BroadcastOffOutlineLogoProps>(
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
      <path d="M18.364 19.364a9 9 0 0 0 -9.721 -14.717m-2.488 1.509a9 9 0 0 0 -.519 13.208" />
  <path d="M15.536 16.536a5 5 0 0 0 -3.536 -8.536m-3 1a5 5 0 0 0 -.535 7.536" />
  <path d="M12 12a1 1 0 1 0 1 1" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

BroadcastOffOutlineLogo.displayName = "BroadcastOffOutlineLogo";

export const BroadcastOffOutlineLogoMetadata = {
  id: "broadcast-off-outline",
  baseId: "broadcast-off-outline",
  variant: "default",
  name: "Broadcast Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BroadcastOffOutlineLogo;
