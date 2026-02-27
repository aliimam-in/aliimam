/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Note1RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Note1Rounded = React.forwardRef<SVGSVGElement, Note1RoundedProps>(
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
      <path d="M8 2V5"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 2V5"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 13H15"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 17H12"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 3.5C19.33 3.68 21 4.95 21 9.65V15.83C21 19.95 20 22.01 15 22.01H9C4 22.01 3 19.95 3 15.83V9.65C3 4.95 4.67 3.69 8 3.5H16Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Note1Rounded.displayName = "Note1Rounded";
export const Note1RoundedMetadata = { 
  id: "note-1_rounded", 
  baseId: "note-1", 
  variant: "rounded", 
  name: "Note 1", 
  category: "document", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Note1Rounded;
