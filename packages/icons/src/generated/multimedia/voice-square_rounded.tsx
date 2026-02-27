/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface VoiceSquareRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const VoiceSquareRounded = React.forwardRef<SVGSVGElement, VoiceSquareRoundedProps>(
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
      <path d="M6 9.85999V14.15"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 8.42999V15.57"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7V17"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 8.42999V15.57"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 9.85999V14.15"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
VoiceSquareRounded.displayName = "VoiceSquareRounded";
export const VoiceSquareRoundedMetadata = { 
  id: "voice-square_rounded", 
  baseId: "voice-square", 
  variant: "rounded", 
  name: "Voice Square", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default VoiceSquareRounded;
