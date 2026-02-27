/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SpeakerRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SpeakerRounded = React.forwardRef<SVGSVGElement, SpeakerRoundedProps>(
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
      <path d="M9 22H15C18 22 19 21 19 18V6C19 3 18 2 15 2H9C6 2 5 3 5 6V18C5 21 6 22 9 22Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 18C13.6569 18 15 16.6569 15 15C15 13.3431 13.6569 12 12 12C10.3431 12 9 13.3431 9 15C9 16.6569 10.3431 18 12 18Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 9C12.8284 9 13.5 8.32843 13.5 7.5C13.5 6.67157 12.8284 6 12 6C11.1716 6 10.5 6.67157 10.5 7.5C10.5 8.32843 11.1716 9 12 9Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
SpeakerRounded.displayName = "SpeakerRounded";
export const SpeakerRoundedMetadata = { 
  id: "speaker_rounded", 
  baseId: "speaker", 
  variant: "rounded", 
  name: "Speaker", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SpeakerRounded;
