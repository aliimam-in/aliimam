/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DirectboxReceiveRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DirectboxReceiveRounded = React.forwardRef<SVGSVGElement, DirectboxReceiveRoundedProps>(
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
      <path d="M12 2V8L14 6" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 8L10 6" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 12C3 12 3 13.79 3 16V17C3 19.76 3 22 8 22H16C20 22 21 19.76 21 17V16C21 13.79 21 12 17 12C16 12 15.72 12.21 15.2 12.6L14.18 13.68C13 14.94 11 14.94 9.81 13.68L8.8 12.6C8.28 12.21 8 12 7 12Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 12V8.00004C5 5.99004 5 4.33004 8 4.04004" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 12V8.00004C19 5.99004 19 4.33004 16 4.04004" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
DirectboxReceiveRounded.displayName = "DirectboxReceiveRounded";
export const DirectboxReceiveRoundedMetadata = { 
  id: "directbox-receive_rounded", 
  baseId: "directbox-receive", 
  variant: "rounded", 
  name: "Directbox Receive", 
  category: "message", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DirectboxReceiveRounded;
