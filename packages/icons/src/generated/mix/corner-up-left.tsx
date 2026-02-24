/**
 * Auto-generated logo component: Corner Up Left (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixCornerUpLeftLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixCornerUpLeftLogo = React.forwardRef<SVGSVGElement, MixCornerUpLeftLogoProps>(
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
      <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
  <path d="M9 14 4 9l5-5" />
    </svg>
  )
);

MixCornerUpLeftLogo.displayName = "MixCornerUpLeftLogo";

export const MixCornerUpLeftLogoMetadata = {
  id: "corner-up-left",
  baseId: "corner-up-left",
  variant: "default",
  name: "Corner Up Left",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixCornerUpLeftLogo;
