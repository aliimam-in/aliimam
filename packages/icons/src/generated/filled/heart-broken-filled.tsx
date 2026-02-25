/**
 * Auto-generated logo component: Heart Broken Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HeartBrokenFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HeartBrokenFilledLogo = React.forwardRef<SVGSVGElement, HeartBrokenFilledLogoProps>(
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
      <path d="M11.001 3.8l-.001 1.963l-1.894 3.79l-.047 .11a1 1 0 0 0 .341 1.137l3.332 2.499l-1.626 3.254a1 1 0 0 0 -.106 .447v3.417l-7.197 -7.127a6 6 0 0 1 6.956 -9.621zm5.77 -.739l.246 .037a6 6 0 0 1 3.184 10.193l-.044 .037l-7.157 7.088v-3.181l1.894 -3.788l.047 -.11a1 1 0 0 0 -.341 -1.137l-3.333 -2.5l1.627 -3.253a1 1 0 0 0 .106 -.447v-2.187a6 6 0 0 1 3.77 -.752" />
    </svg>
  )
);

HeartBrokenFilledLogo.displayName = "HeartBrokenFilledLogo";

export const HeartBrokenFilledLogoMetadata = {
  id: "heart-broken-filled",
  baseId: "heart-broken-filled",
  variant: "default",
  name: "Heart Broken Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HeartBrokenFilledLogo;
