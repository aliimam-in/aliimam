/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Link21RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Link21Rounded = React.forwardRef<SVGSVGElement, Link21RoundedProps>(
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
      <path d="M13.0601 10.94C15.3101 13.19 15.3101 16.83 13.0601 19.07C10.8101 21.31 7.17009 21.32 4.93009 19.07C2.69009 16.82 2.68009 13.18 4.93009 10.94" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.59 13.41C8.24996 11.07 8.24996 7.27001 10.59 4.92001C12.93 2.57001 16.73 2.58001 19.08 4.92001C21.43 7.26001 21.42 11.06 19.08 13.41" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Link21Rounded.displayName = "Link21Rounded";
export const Link21RoundedMetadata = { 
  id: "link-21_rounded", 
  baseId: "link-21", 
  variant: "rounded", 
  name: "Link 21", 
  category: "text", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Link21Rounded;
