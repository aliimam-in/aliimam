/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MusicRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MusicRounded = React.forwardRef<SVGSVGElement, MusicRoundedProps>(
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
      <path d="M6.27991 22C8.00304 22 9.39991 20.6031 9.39991 18.88C9.39991 17.1569 8.00304 15.76 6.27991 15.76C4.55678 15.76 3.15991 17.1569 3.15991 18.88C3.15991 20.6031 4.55678 22 6.27991 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.8399 16.8V4.59997C20.8399 1.99997 19.2099 1.63997 17.5599 2.08997L11.3199 3.78997C10.1799 4.09997 9.3999 4.99997 9.3999 6.29997V8.46997V9.92997V18.87"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.7201 19.92C19.4432 19.92 20.8401 18.5231 20.8401 16.8C20.8401 15.0769 19.4432 13.68 17.7201 13.68C15.997 13.68 14.6001 15.0769 14.6001 16.8C14.6001 18.5231 15.997 19.92 17.7201 19.92Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.3999 9.52002L20.8399 6.40002"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
MusicRounded.displayName = "MusicRounded";
export const MusicRoundedMetadata = { 
  id: "music_rounded", 
  baseId: "music", 
  variant: "rounded", 
  name: "Music", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MusicRounded;
