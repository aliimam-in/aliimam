/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SpeakerFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SpeakerFilled = React.forwardRef<SVGSVGElement, SpeakerFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M15 1.62012H9C5.81 1.62012 4.62 2.81012 4.62 6.00012V18.0001C4.62 21.1901 5.81 22.3801 9 22.3801H15C18.19 22.3801 19.38 21.1901 19.38 18.0001V6.00012C19.38 2.81012 18.19 1.62012 15 1.62012ZM12 6.00012C12.83 6.00012 13.5 6.67012 13.5 7.50012C13.5 8.33012 12.83 9.00012 12 9.00012C11.17 9.00012 10.5 8.33012 10.5 7.50012C10.5 6.67012 11.17 6.00012 12 6.00012ZM12 18.0001C10.34 18.0001 9 16.6601 9 15.0001C9 13.3401 10.34 12.0001 12 12.0001C13.66 12.0001 15 13.3401 15 15.0001C15 16.6601 13.66 18.0001 12 18.0001Z" fill="currentColor"/>
    </svg>
  )
);
SpeakerFilled.displayName = "SpeakerFilled";
export const SpeakerFilledMetadata = { 
  id: "speaker_filled", 
  baseId: "speaker", 
  variant: "filled", 
  name: "Speaker", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SpeakerFilled;
