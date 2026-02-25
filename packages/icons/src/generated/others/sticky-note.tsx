/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface StickyNoteProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const StickyNote = React.forwardRef<SVGSVGElement, StickyNoteProps>(
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
      <path d="M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" />
  <path d="M15 3v5a1 1 0 0 0 1 1h5" />
    </svg>
  )
);
StickyNote.displayName = "StickyNote";
export const StickyNoteMetadata = { 
  id: "sticky-note", 
  baseId: "sticky-note", 
  variant: "default", 
  name: "Sticky Note", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default StickyNote;
