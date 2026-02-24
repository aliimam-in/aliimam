/**
 * Auto-generated logo component: Share (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShareLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShareLogo = React.forwardRef<SVGSVGElement, ShareLogoProps>(
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
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/>
    </svg>
  )
);

ShareLogo.displayName = "ShareLogo";

export const ShareLogoMetadata = {
  id: "share",
  baseId: "share",
  variant: "default",
  name: "Share",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShareLogo;
