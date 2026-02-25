/**
 * Auto-generated logo component: Headset (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HeadsetLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HeadsetLogo = React.forwardRef<SVGSVGElement, HeadsetLogoProps>(
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
      <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
  <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
    </svg>
  )
);

HeadsetLogo.displayName = "HeadsetLogo";

export const HeadsetLogoMetadata = {
  id: "headset",
  baseId: "headset",
  variant: "default",
  name: "Headset",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HeadsetLogo;
