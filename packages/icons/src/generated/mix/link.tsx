/**
 * Auto-generated logo component: Link (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixLinkLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixLinkLogo = React.forwardRef<SVGSVGElement, MixLinkLogoProps>(
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
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
);

MixLinkLogo.displayName = "MixLinkLogo";

export const MixLinkLogoMetadata = {
  id: "link",
  baseId: "link",
  variant: "default",
  name: "Link",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixLinkLogo;
