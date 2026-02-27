/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SpotifyRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SpotifyRounded = React.forwardRef<SVGSVGElement, SpotifyRoundedProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.6001 9.29998C10.2001 7.89998 14.3001 8.39998 17.5001 10.6" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.8999 12.4C10.5999 11.4 13.5999 11.7 15.8999 13.4" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.80005 15.4C10.8 14.6 13 14.9 14.8 16.1" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
SpotifyRounded.displayName = "SpotifyRounded";
export const SpotifyRoundedMetadata = { 
  id: "spotify_rounded", 
  baseId: "spotify", 
  variant: "rounded", 
  name: "Spotify", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SpotifyRounded;
