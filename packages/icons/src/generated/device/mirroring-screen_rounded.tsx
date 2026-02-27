/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MirroringScreenRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MirroringScreenRounded = React.forwardRef<SVGSVGElement, MirroringScreenRoundedProps>(
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
      <path d="M2 9V8C2 5 4 3 7 3H17C20 3 22 5 22 8V16C22 19 20 21 17 21H16"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.68994 11.71C8.30994 12.3 11.6999 15.7 12.2999 20.32"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.62 15.0699C6.01 15.4999 8.5 18 8.94 21.39"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.97998 18.86C3.66998 19.08 4.91998 20.32 5.13998 22.02"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
MirroringScreenRounded.displayName = "MirroringScreenRounded";
export const MirroringScreenRoundedMetadata = { 
  id: "mirroring-screen_rounded", 
  baseId: "mirroring-screen", 
  variant: "rounded", 
  name: "Mirroring Screen", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MirroringScreenRounded;
