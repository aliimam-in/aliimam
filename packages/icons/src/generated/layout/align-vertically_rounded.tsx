/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AlignVerticallyRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AlignVerticallyRounded = React.forwardRef<SVGSVGElement, AlignVerticallyRoundedProps>(
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
      <path d="M17.4 19.25H6.6C5.1 19.25 4.5 18.61 4.5 17.02V15.98C4.5 14.39 5.1 13.75 6.6 13.75H17.4C18.9 13.75 19.5 14.39 19.5 15.98V17.02C19.5 18.61 18.9 19.25 17.4 19.25Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.4 10.75H8.6C7.1 10.75 6.5 10.11 6.5 8.52V7.48C6.5 5.89 7.1 5.25 8.6 5.25H15.4C16.9 5.25 17.5 5.89 17.5 7.48V8.52C17.5 10.11 16.9 10.75 15.4 10.75Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22V19.6"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 13V11"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 2V4.69"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
AlignVerticallyRounded.displayName = "AlignVerticallyRounded";
export const AlignVerticallyRoundedMetadata = { 
  id: "align-vertically_rounded", 
  baseId: "align-vertically", 
  variant: "rounded", 
  name: "Align Vertically", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AlignVerticallyRounded;
