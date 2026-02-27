/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DirectInboxRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DirectInboxRounded = React.forwardRef<SVGSVGElement, DirectInboxRoundedProps>(
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
      <path d="M12 2V9L14 7" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 9L10 7" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.97998 13H6.38998C6.76998 13 7.10998 13.21 7.27998 13.55L8.44998 15.89C8.78998 16.57 9.47998 17 10.24 17H13.77C14.53 17 15.22 16.57 15.56 15.89L16.73 13.55C16.9 13.21 17.25 13 17.62 13H21.98" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 4.13C3.46 4.65 2 6.73 2 11V15C2 20 4 22 9 22H15C20 22 22 20 22 15V11C22 6.73 20.54 4.65 17 4.13" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
DirectInboxRounded.displayName = "DirectInboxRounded";
export const DirectInboxRoundedMetadata = { 
  id: "direct-inbox_rounded", 
  baseId: "direct-inbox", 
  variant: "rounded", 
  name: "Direct Inbox", 
  category: "message", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DirectInboxRounded;
