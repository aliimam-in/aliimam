/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface NoteRemoveRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const NoteRemoveRounded = React.forwardRef<SVGSVGElement, NoteRemoveRoundedProps>(
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
      <path d="M7 14H12"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 5.96002L3.25 2.21002"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.96001 2.25L3.21001 6"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 10H15"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 2H16C19.33 2.18 21 3.41 21 7.99V16"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 9.01001V15.98C3 19.99 4 22 9 22H12C12.17 22 14.84 22 15 22"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 16L15 22V19C15 17 16 16 18 16H21Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
NoteRemoveRounded.displayName = "NoteRemoveRounded";
export const NoteRemoveRoundedMetadata = { 
  id: "note-remove_rounded", 
  baseId: "note-remove", 
  variant: "rounded", 
  name: "Note Remove", 
  category: "document", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default NoteRemoveRounded;
