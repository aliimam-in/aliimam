/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MicroscopeRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MicroscopeRounded = React.forwardRef<SVGSVGElement, MicroscopeRoundedProps>(
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
      <path d="M15.0301 10.77L20.6901 6.97998C21.2601 6.59998 21.4101 5.81998 21.0301 5.25998L19.2101 2.54996C18.8301 1.97996 18.0501 1.82996 17.4901 2.20996L11.8301 5.99997L15.0301 10.77Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.1739 6.4792L7.39624 9.67908L9.95614 13.5012L14.7338 10.3013L12.1739 6.4792Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.83004 15.9L9.78004 13.26L7.54004 9.91998L3.59004 12.56C3.13004 12.87 3.01004 13.49 3.32004 13.95L4.45004 15.63C4.75004 16.08 5.37004 16.2 5.83004 15.9Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.0501 12.2L7.56006 22" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12.2L16.44 22" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
MicroscopeRounded.displayName = "MicroscopeRounded";
export const MicroscopeRoundedMetadata = { 
  id: "microscope_rounded", 
  baseId: "microscope", 
  variant: "rounded", 
  name: "Microscope", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MicroscopeRounded;
