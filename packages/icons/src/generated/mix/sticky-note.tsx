/**
 * Auto-generated logo component: Sticky Note (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface StickyNoteLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const StickyNoteLogo = React.forwardRef<SVGSVGElement, StickyNoteLogoProps>(
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
      <path d="M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" />
  <path d="M15 3v5a1 1 0 0 0 1 1h5" />
    </svg>
  )
);

StickyNoteLogo.displayName = "StickyNoteLogo";

export const StickyNoteLogoMetadata = {
  id: "sticky-note",
  baseId: "sticky-note",
  variant: "default",
  name: "Sticky Note",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default StickyNoteLogo;
