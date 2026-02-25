/**
 * Auto-generated logo component: Note Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NoteOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NoteOffOutlineLogo = React.forwardRef<SVGSVGElement, NoteOffOutlineLogoProps>(
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
      <path d="M13 20l3.505 -3.505m2 -2l1.501 -1.501" />
  <path d="M17 13h3v-7a2 2 0 0 0 -2 -2h-10m-3.427 .6c-.355 .36 -.573 .853 -.573 1.4v12a2 2 0 0 0 2 2h7v-6c0 -.272 .109 -.519 .285 -.699" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

NoteOffOutlineLogo.displayName = "NoteOffOutlineLogo";

export const NoteOffOutlineLogoMetadata = {
  id: "note-off-outline",
  baseId: "note-off-outline",
  variant: "default",
  name: "Note Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NoteOffOutlineLogo;
