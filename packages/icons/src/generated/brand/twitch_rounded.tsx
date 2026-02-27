/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TwitchRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TwitchRounded = React.forwardRef<SVGSVGElement, TwitchRoundedProps>(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M4.5 2H21.5V14L16.5 19H11.5L9.5 22H6.5V19H2.5V5L4.5 2Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 7H9V13H11V7Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 7H14V13H16V7Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
TwitchRounded.displayName = "TwitchRounded";
export const TwitchRoundedMetadata = { 
  id: "twitch_rounded", 
  baseId: "twitch", 
  variant: "rounded", 
  name: "Twitch", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TwitchRounded;
