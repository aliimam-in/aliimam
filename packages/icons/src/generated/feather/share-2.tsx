/**
 * Auto-generated logo component: Share 2 (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Share2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Share2Logo = React.forwardRef<SVGSVGElement, Share2LogoProps>(
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
      <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  )
);

Share2Logo.displayName = "Share2Logo";

export const Share2LogoMetadata = {
  id: "share-2",
  baseId: "share-2",
  variant: "default",
  name: "Share 2",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Share2Logo;
