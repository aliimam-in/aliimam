/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface VolumeLow1RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const VolumeLow1Rounded = React.forwardRef<SVGSVGElement, VolumeLow1RoundedProps>(
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
      <path d="M3.33008 10V14C3.33008 16 4.33008 17 6.33008 17H7.76008C8.13008 17 8.50008 17.11 8.82008 17.3L11.7401 19.13C14.2601 20.71 16.3301 19.56 16.3301 16.59V7.41003C16.3301 4.43003 14.2601 3.29003 11.7401 4.87003L8.82008 6.70003C8.50008 6.89003 8.13008 7.00003 7.76008 7.00003H6.33008C4.33008 7.00003 3.33008 8.00003 3.33008 10Z" stroke="#292D32" strokeWidth="1.5"/>
<path d="M19.3301 8C21.1101 10.37 21.1101 13.63 19.3301 16" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
VolumeLow1Rounded.displayName = "VolumeLow1Rounded";
export const VolumeLow1RoundedMetadata = { 
  id: "volume-low-1_rounded", 
  baseId: "volume-low-1", 
  variant: "rounded", 
  name: "Volume Low 1", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default VolumeLow1Rounded;
