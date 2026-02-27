/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SimcardRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SimcardRounded = React.forwardRef<SVGSVGElement, SimcardRoundedProps>(
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
      <path d="M19.54 6.53998L16.47 3.46997C15.53 2.52997 14.26 2.01001 12.93 2.01001H8C5 2.01001 3 4.01001 3 7.01001V17.01C3 20.01 5 22.01 8 22.01H16C19 22.01 21 20.01 21 17.01V10.08C21 8.74002 20.47 7.46998 19.54 6.53998Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.5 14L7.5 16L9.5 18" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 14L16.5 16L14.5 18" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
SimcardRounded.displayName = "SimcardRounded";
export const SimcardRoundedMetadata = { 
  id: "simcard_rounded", 
  baseId: "simcard", 
  variant: "rounded", 
  name: "Simcard", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SimcardRounded;
