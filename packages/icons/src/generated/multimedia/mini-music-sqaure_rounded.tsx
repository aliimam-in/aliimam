/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MiniMusicSqaureRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MiniMusicSqaureRounded = React.forwardRef<SVGSVGElement, MiniMusicSqaureRoundedProps>(
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
      <path d="M22 10V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H11" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.2701 22C16.0654 22 16.7101 21.3553 16.7101 20.56C16.7101 19.7647 16.0654 19.12 15.2701 19.12C14.4748 19.12 13.8301 19.7647 13.8301 20.56C13.8301 21.3553 14.4748 22 15.2701 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22.0002 19.6V13.96C22.0002 12.76 21.2502 12.59 20.4802 12.8L17.5902 13.59C17.0702 13.73 16.7002 14.15 16.7002 14.75V15.76V16.44V20.57" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.5601 21.04C21.3554 21.04 22.0001 20.3953 22.0001 19.6C22.0001 18.8047 21.3554 18.16 20.5601 18.16C19.7648 18.16 19.1201 18.8047 19.1201 19.6C19.1201 20.3953 19.7648 21.04 20.5601 21.04Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.71 16.43L22 14.99" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
MiniMusicSqaureRounded.displayName = "MiniMusicSqaureRounded";
export const MiniMusicSqaureRoundedMetadata = { 
  id: "mini-music-sqaure_rounded", 
  baseId: "mini-music-sqaure", 
  variant: "rounded", 
  name: "Mini Music Sqaure", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MiniMusicSqaureRounded;
