/**
 * Auto-generated logo component: Facebook (default)
 * Category: social
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FacebookProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Facebook = React.forwardRef<SVGSVGElement, FacebookProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <g clipPath="url(#clip0_2041_37)">
<path d="M10 23.8667C4.33333 22.8667 0 17.9333 0 12C0 5.4 5.4 0 12 0C18.6 0 24 5.4 24 12C24 17.9333 19.6667 22.8667 14 23.8667L13.3333 23.3333H10.6667L10 23.8667Z" fill="url(#paint0_linear_2041_37)"/>
<path d="M16.6667 15.3333L17.2 12H14V9.66663C14 8.73329 14.3333 7.99996 15.8 7.99996H17.3333V4.93329C16.4667 4.79996 15.5333 4.66663 14.6667 4.66663C11.9333 4.66663 10 6.33329 10 9.33329V12H7V15.3333H10V23.8C10.6667 23.9333 11.3333 24 12 24C12.6667 24 13.3333 23.9333 14 23.8V15.3333H16.6667Z" fill="white"/>
</g>
<defs>
<linearGradient id="paint0_linear_2041_37" x1="1200" y1="2316.93" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
<stop stopColor="#0062E0"/>
<stop offset="1" stopColor="#19AFFF"/>
</linearGradient>
<clipPath id="clip0_2041_37">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  )
);

Facebook.displayName = "Facebook";

export const FacebookMetadata = {
  id: "Facebook",
  baseId: "Facebook",
  variant: "default",
  name: "Facebook",
  category: "social",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Facebook;
