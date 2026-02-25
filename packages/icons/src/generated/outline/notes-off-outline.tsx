/**
 * Auto-generated logo component: Notes Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NotesOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NotesOffOutlineLogo = React.forwardRef<SVGSVGElement, NotesOffOutlineLogoProps>(
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
      <path d="M7 3h10a2 2 0 0 1 2 2v10m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14" />
  <path d="M11 7h4" />
  <path d="M9 11h2" />
  <path d="M9 15h4" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

NotesOffOutlineLogo.displayName = "NotesOffOutlineLogo";

export const NotesOffOutlineLogoMetadata = {
  id: "notes-off-outline",
  baseId: "notes-off-outline",
  variant: "default",
  name: "Notes Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NotesOffOutlineLogo;
