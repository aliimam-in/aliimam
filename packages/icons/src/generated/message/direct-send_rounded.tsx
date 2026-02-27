/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DirectSendRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DirectSendRounded = React.forwardRef<SVGSVGElement, DirectSendRoundedProps>(
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
      <path d="M12 9V2L10 4" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 2L14 4" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.97998 13H6.38998C6.76998 13 7.10998 13.21 7.27998 13.55L8.44998 15.89C8.78998 16.57 9.47998 17 10.24 17H13.77C14.53 17 15.22 16.57 15.56 15.89L16.73 13.55C16.9 13.21 17.25 13 17.62 13H21.98" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 5.13C3.46 5.65 2 7.73 2 12V15C2 20 4 22 9 22H15C20 22 22 20 22 15V12C22 7.73 20.54 5.65 17 5.13" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
DirectSendRounded.displayName = "DirectSendRounded";
export const DirectSendRoundedMetadata = { 
  id: "direct-send_rounded", 
  baseId: "direct-send", 
  variant: "rounded", 
  name: "Direct Send", 
  category: "message", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DirectSendRounded;
