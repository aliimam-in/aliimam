/**
 * Auto-generated logo component: Twitter (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TwitterLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TwitterLogo = React.forwardRef<SVGSVGElement, TwitterLogoProps>(
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
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
    </svg>
  )
);

TwitterLogo.displayName = "TwitterLogo";

export const TwitterLogoMetadata = {
  id: "twitter",
  baseId: "twitter",
  variant: "default",
  name: "Twitter",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TwitterLogo;
