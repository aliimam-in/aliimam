/**
 * Auto-generated logo component: Youtube (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixYoutubeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixYoutubeLogo = React.forwardRef<SVGSVGElement, MixYoutubeLogoProps>(
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
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
  <path d="m10 15 5-3-5-3z" />
    </svg>
  )
);

MixYoutubeLogo.displayName = "MixYoutubeLogo";

export const MixYoutubeLogoMetadata = {
  id: "youtube",
  baseId: "youtube",
  variant: "default",
  name: "Youtube",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixYoutubeLogo;
