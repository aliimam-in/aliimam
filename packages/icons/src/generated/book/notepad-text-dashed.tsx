/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface NotepadTextDashedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const NotepadTextDashed = React.forwardRef<SVGSVGElement, NotepadTextDashedProps>(
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
      <path d="M8 2v4" />
  <path d="M12 2v4" />
  <path d="M16 2v4" />
  <path d="M16 4h2a2 2 0 0 1 2 2v2" />
  <path d="M20 12v2" />
  <path d="M20 18v2a2 2 0 0 1-2 2h-1" />
  <path d="M13 22h-2" />
  <path d="M7 22H6a2 2 0 0 1-2-2v-2" />
  <path d="M4 14v-2" />
  <path d="M4 8V6a2 2 0 0 1 2-2h2" />
  <path d="M8 10h6" />
  <path d="M8 14h8" />
  <path d="M8 18h5" />
    </svg>
  )
);
NotepadTextDashed.displayName = "NotepadTextDashed";
export const NotepadTextDashedMetadata = { 
  id: "notepad-text-dashed", 
  baseId: "notepad-text-dashed", 
  variant: "default", 
  name: "Notepad Text Dashed", 
  category: "book", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default NotepadTextDashed;
