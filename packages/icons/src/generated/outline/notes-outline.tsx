/**
 * Auto-generated logo component: Notes Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NotesOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NotesOutlineLogo = React.forwardRef<SVGSVGElement, NotesOutlineLogoProps>(
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
      <path d="M5 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -14" />
  <path d="M9 7l6 0" />
  <path d="M9 11l6 0" />
  <path d="M9 15l4 0" />
    </svg>
  )
);

NotesOutlineLogo.displayName = "NotesOutlineLogo";

export const NotesOutlineLogoMetadata = {
  id: "notes-outline",
  baseId: "notes-outline",
  variant: "default",
  name: "Notes Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NotesOutlineLogo;
