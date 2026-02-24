/**
 * Auto-generated logo component: Unlink (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UnlinkLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UnlinkLogo = React.forwardRef<SVGSVGElement, UnlinkLogoProps>(
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
      <path d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" />
  <path d="m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" />
  <line x1="8" x2="8" y1="2" y2="5" />
  <line x1="2" x2="5" y1="8" y2="8" />
  <line x1="16" x2="16" y1="19" y2="22" />
  <line x1="19" x2="22" y1="16" y2="16" />
    </svg>
  )
);

UnlinkLogo.displayName = "UnlinkLogo";

export const UnlinkLogoMetadata = {
  id: "unlink",
  baseId: "unlink",
  variant: "default",
  name: "Unlink",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UnlinkLogo;
