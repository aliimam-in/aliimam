/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface NoteTextRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const NoteTextRounded = React.forwardRef<SVGSVGElement, NoteTextRoundedProps>(
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
<path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 11H16"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 16H12"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
NoteTextRounded.displayName = "NoteTextRounded";
export const NoteTextRoundedMetadata = { 
  id: "note-text_rounded", 
  baseId: "note-text", 
  variant: "rounded", 
  name: "Note Text", 
  category: "document", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default NoteTextRounded;
