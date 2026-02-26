/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ClipboardClockProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ClipboardClock = React.forwardRef<SVGSVGElement, ClipboardClockProps>(
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
      <path d="M16 14v2.2l1.6 1" />
  <path d="M16 4h2a2 2 0 0 1 2 2v.832" />
  <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" />
  <circle cx="16" cy="16" r="6" />
  <rect x="8" y="2" width="8" height="4" rx="1" />
    </svg>
  )
);
ClipboardClock.displayName = "ClipboardClock";
export const ClipboardClockMetadata = { 
  id: "clipboard-clock", 
  baseId: "clipboard-clock", 
  variant: "default", 
  name: "Clipboard Clock", 
  category: "clipboard", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ClipboardClock;
