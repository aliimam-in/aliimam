/**
 * Auto-generated logo component: Youtube (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface YoutubeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const YoutubeLogo = React.forwardRef<SVGSVGElement, YoutubeLogoProps>(
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
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
    </svg>
  )
);

YoutubeLogo.displayName = "YoutubeLogo";

export const YoutubeLogoMetadata = {
  id: "youtube",
  baseId: "youtube",
  variant: "default",
  name: "Youtube",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default YoutubeLogo;
