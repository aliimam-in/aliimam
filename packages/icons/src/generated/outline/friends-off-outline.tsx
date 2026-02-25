/**
 * Auto-generated logo component: Friends Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FriendsOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FriendsOffOutlineLogo = React.forwardRef<SVGSVGElement, FriendsOffOutlineLogoProps>(
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
      <path d="M5 5a2 2 0 0 0 2 2m2 -2a2 2 0 0 0 -2 -2" />
  <path d="M5 22v-5l-1 -1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5" />
  <path d="M15 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M15 22v-4h-2l1.254 -3.763m1.036 -2.942a1 1 0 0 1 .71 -.295h2a1 1 0 0 1 1 1l1.503 4.508m-1.503 2.492v3" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

FriendsOffOutlineLogo.displayName = "FriendsOffOutlineLogo";

export const FriendsOffOutlineLogoMetadata = {
  id: "friends-off-outline",
  baseId: "friends-off-outline",
  variant: "default",
  name: "Friends Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FriendsOffOutlineLogo;
