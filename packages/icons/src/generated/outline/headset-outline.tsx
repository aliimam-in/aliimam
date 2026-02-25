/**
 * Auto-generated logo component: Headset Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HeadsetOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HeadsetOutlineLogo = React.forwardRef<SVGSVGElement, HeadsetOutlineLogoProps>(
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
      <path d="M4 14v-3a8 8 0 1 1 16 0v3" />
  <path d="M18 19c0 1.657 -2.686 3 -6 3" />
  <path d="M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3" />
  <path d="M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3" />
    </svg>
  )
);

HeadsetOutlineLogo.displayName = "HeadsetOutlineLogo";

export const HeadsetOutlineLogoMetadata = {
  id: "headset-outline",
  baseId: "headset-outline",
  variant: "default",
  name: "Headset Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HeadsetOutlineLogo;
