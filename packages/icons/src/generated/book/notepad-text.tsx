/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface NotepadTextProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const NotepadText = React.forwardRef<SVGSVGElement, NotepadTextProps>(
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
  <rect width="16" height="18" x="4" y="4" rx="2" />
  <path d="M8 10h6" />
  <path d="M8 14h8" />
  <path d="M8 18h5" />
    </svg>
  )
);
NotepadText.displayName = "NotepadText";
export const NotepadTextMetadata = { 
  id: "notepad-text", 
  baseId: "notepad-text", 
  variant: "default", 
  name: "Notepad Text", 
  category: "book", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default NotepadText;
