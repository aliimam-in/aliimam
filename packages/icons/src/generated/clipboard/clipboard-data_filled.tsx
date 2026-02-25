/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ClipboardDataFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ClipboardDataFilled = React.forwardRef<SVGSVGElement, ClipboardDataFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M17.997 4.17a3 3 0 0 1 2.003 2.83v12a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 2.003 -2.83a4 4 0 0 0 3.997 3.83h4a4 4 0 0 0 3.98 -3.597zm-8.997 7.83a1 1 0 0 0 -1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1m3 3a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1l.117 -.007a1 1 0 0 0 .883 -.993v-1a1 1 0 0 0 -1 -1m3 -1a1 1 0 0 0 -1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0 -1 -1m-1 -12a2 2 0 1 1 0 4h-4a2 2 0 1 1 0 -4z" />
    </svg>
  )
);
ClipboardDataFilled.displayName = "ClipboardDataFilled";
export const ClipboardDataFilledMetadata = { 
  id: "clipboard-data_filled", 
  baseId: "clipboard-data", 
  variant: "filled", 
  name: "Clipboard Data", 
  category: "clipboard", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ClipboardDataFilled;
