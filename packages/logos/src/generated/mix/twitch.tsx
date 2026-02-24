/**
 * Auto-generated logo component: Twitch (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TwitchLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const TwitchLogo = React.forwardRef<SVGSVGElement, TwitchLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 2400 2800"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#fff" d="m2200 1300-400 400h-400l-350 350v-350H600V200h1600z" /><g fill="#9146ff"><path d="M500 0 0 500v1800h600v500l500-500h400l900-900V0H500zm1700 1300-400 400h-400l-350 350v-350H600V200h1600v1100z" /><path d="M1700 550h200v600h-200zm-550 0h200v600h-200z" /></g>
    </svg>
  )
);

TwitchLogo.displayName = "TwitchLogo";

export const TwitchLogoMetadata = {
  id: "twitch",
  baseId: "twitch",
  variant: "default",
  name: "Twitch",
  category: "mix",
  tags: [],
  viewBox: "0 0 2400 2800",
} as const;

export default TwitchLogo;
