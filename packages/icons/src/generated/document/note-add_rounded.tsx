/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface NoteAddRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const NoteAddRounded = React.forwardRef<SVGSVGElement, NoteAddRoundedProps>(
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
      <path d="M9.56 18V13" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 15.5H7" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 2V5" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 2V5" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.81 3.41998C19.15 3.53998 20.84 4.76998 20.94 9.46998L21.07 15.64C21.15 19.76 20.2 21.83 15.2 21.94L9.19999 22.06C4.19999 22.16 3.15999 20.12 3.07999 16.01L2.93999 9.82998C2.83999 5.12998 4.48999 3.82998 7.80999 3.57998L15.81 3.41998Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
NoteAddRounded.displayName = "NoteAddRounded";
export const NoteAddRoundedMetadata = { 
  id: "note-add_rounded", 
  baseId: "note-add", 
  variant: "rounded", 
  name: "Note Add", 
  category: "document", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default NoteAddRounded;
