/**
 * Auto-generated logo component: Clipboard Copy (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClipboardCopyLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClipboardCopyLogo = React.forwardRef<SVGSVGElement, ClipboardCopyLogoProps>(
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
  <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
  <path d="M16 4h2a2 2 0 0 1 2 2v4" />
  <path d="M21 14H11" />
  <path d="m15 10-4 4 4 4" />
    </svg>
  )
);

ClipboardCopyLogo.displayName = "ClipboardCopyLogo";

export const ClipboardCopyLogoMetadata = {
  id: "clipboard-copy",
  baseId: "clipboard-copy",
  variant: "default",
  name: "Clipboard Copy",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClipboardCopyLogo;
