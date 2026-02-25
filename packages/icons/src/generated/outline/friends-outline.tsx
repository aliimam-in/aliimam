/**
 * Auto-generated logo component: Friends Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FriendsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FriendsOutlineLogo = React.forwardRef<SVGSVGElement, FriendsOutlineLogoProps>(
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
      <path d="M5 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M5 22v-5l-1 -1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5" />
  <path d="M15 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M15 22v-4h-2l2 -6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1l2 6h-2v4" />
    </svg>
  )
);

FriendsOutlineLogo.displayName = "FriendsOutlineLogo";

export const FriendsOutlineLogoMetadata = {
  id: "friends-outline",
  baseId: "friends-outline",
  variant: "default",
  name: "Friends Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FriendsOutlineLogo;
