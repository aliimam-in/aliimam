/**
 * Auto-generated logo component: Note Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NoteOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NoteOutlineLogo = React.forwardRef<SVGSVGElement, NoteOutlineLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M13 20l7 -7" />
  <path d="M13 20v-6a1 1 0 0 1 1 -1h6v-7a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7" />
    </svg>
  )
);

NoteOutlineLogo.displayName = "NoteOutlineLogo";

export const NoteOutlineLogoMetadata = {
  id: "note-outline",
  baseId: "note-outline",
  variant: "default",
  name: "Note Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NoteOutlineLogo;
