/**
 * Auto-generated logo component: Twitch (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TwitchLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TwitchLogo = React.forwardRef<SVGSVGElement, TwitchLogoProps>(
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
      <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" />
    </svg>
  )
);

TwitchLogo.displayName = "TwitchLogo";

export const TwitchLogoMetadata = {
  id: "twitch",
  baseId: "twitch",
  variant: "default",
  name: "Twitch",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TwitchLogo;
