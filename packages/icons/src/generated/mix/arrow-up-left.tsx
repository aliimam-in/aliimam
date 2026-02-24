/**
 * Auto-generated logo component: Arrow Up Left (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixArrowUpLeftLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixArrowUpLeftLogo = React.forwardRef<SVGSVGElement, MixArrowUpLeftLogoProps>(
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
      <path d="M7 17V7h10" />
  <path d="M17 17 7 7" />
    </svg>
  )
);

MixArrowUpLeftLogo.displayName = "MixArrowUpLeftLogo";

export const MixArrowUpLeftLogoMetadata = {
  id: "arrow-up-left",
  baseId: "arrow-up-left",
  variant: "default",
  name: "Arrow Up Left",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixArrowUpLeftLogo;
