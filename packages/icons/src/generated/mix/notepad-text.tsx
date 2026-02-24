/**
 * Auto-generated logo component: Notepad Text (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NotepadTextLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NotepadTextLogo = React.forwardRef<SVGSVGElement, NotepadTextLogoProps>(
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

NotepadTextLogo.displayName = "NotepadTextLogo";

export const NotepadTextLogoMetadata = {
  id: "notepad-text",
  baseId: "notepad-text",
  variant: "default",
  name: "Notepad Text",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NotepadTextLogo;
