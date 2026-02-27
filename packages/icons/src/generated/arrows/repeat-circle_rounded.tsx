/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RepeatCircleRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const RepeatCircleRounded = React.forwardRef<SVGSVGElement, RepeatCircleRoundedProps>(
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
      <path d="M7.5 8.34003H14.9C15.79 8.34003 16.5 9.06 16.5 9.94V11.71"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.19 6.65997L7.5 8.34003L9.19 10.03"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.5 15.66H9.10001C8.21001 15.66 7.5 14.94 7.5 14.06V12.29"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.8101 17.34L16.5001 15.66L14.8101 13.97"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
RepeatCircleRounded.displayName = "RepeatCircleRounded";
export const RepeatCircleRoundedMetadata = { 
  id: "repeat-circle_rounded", 
  baseId: "repeat-circle", 
  variant: "rounded", 
  name: "Repeat Circle", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default RepeatCircleRounded;
