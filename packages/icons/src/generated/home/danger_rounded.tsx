/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DangerRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DangerRounded = React.forwardRef<SVGSVGElement, DangerRoundedProps>(
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
      <path d="M12 9V14"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 21.41H5.93999C2.46999 21.41 1.01999 18.93 2.69999 15.9L5.81999 10.28L8.75999 5C10.54 1.79 13.46 1.79 15.24 5L18.18 10.29L21.3 15.91C22.98 18.94 21.52 21.42 18.06 21.42H12V21.41Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9945 17H12.0035"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
DangerRounded.displayName = "DangerRounded";
export const DangerRoundedMetadata = { 
  id: "danger_rounded", 
  baseId: "danger", 
  variant: "rounded", 
  name: "Danger", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DangerRounded;
