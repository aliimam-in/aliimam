/**
 * Auto-generated logo component: Clipboard Clock (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClipboardClockLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClipboardClockLogo = React.forwardRef<SVGSVGElement, ClipboardClockLogoProps>(
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
      <path d="M16 14v2.2l1.6 1" />
  <path d="M16 4h2a2 2 0 0 1 2 2v.832" />
  <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" />
  <circle cx="16" cy="16" r="6" />
  <rect x="8" y="2" width="8" height="4" rx="1" />
    </svg>
  )
);

ClipboardClockLogo.displayName = "ClipboardClockLogo";

export const ClipboardClockLogoMetadata = {
  id: "clipboard-clock",
  baseId: "clipboard-clock",
  variant: "default",
  name: "Clipboard Clock",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClipboardClockLogo;
