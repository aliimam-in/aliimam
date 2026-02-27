/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DropboxRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DropboxRounded = React.forwardRef<SVGSVGElement, DropboxRoundedProps>(
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
      <path d="M12 5L7.6 2L2 6L6.4 9L12 5Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 5L16.4 2L22 6L17.6 9L12 5Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 14L7.6 17L2 13L6.4 10L12 14Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 14L16.4 17L22 13L17.6 10L12 14Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 15.5V18.8L12.4 21.8C12.1 21.9 11.8 21.9 11.6 21.8L5 18.8V15.5"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
DropboxRounded.displayName = "DropboxRounded";
export const DropboxRoundedMetadata = { 
  id: "dropbox_rounded", 
  baseId: "dropbox", 
  variant: "rounded", 
  name: "Dropbox", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DropboxRounded;
