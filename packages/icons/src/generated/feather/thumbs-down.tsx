/**
 * Auto-generated logo component: Thumbs Down (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ThumbsDownLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ThumbsDownLogo = React.forwardRef<SVGSVGElement, ThumbsDownLogoProps>(
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
      <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"/>
    </svg>
  )
);

ThumbsDownLogo.displayName = "ThumbsDownLogo";

export const ThumbsDownLogoMetadata = {
  id: "thumbs-down",
  baseId: "thumbs-down",
  variant: "default",
  name: "Thumbs Down",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ThumbsDownLogo;
