/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ClipboardFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ClipboardFilled = React.forwardRef<SVGSVGElement, ClipboardFilledProps>(
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
      <path d="M17.997 4.17a3 3 0 0 1 2.003 2.83v12a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 2.003 -2.83a4 4 0 0 0 3.997 3.83h4a4 4 0 0 0 3.98 -3.597zm-3.997 -2.17a2 2 0 1 1 0 4h-4a2 2 0 1 1 0 -4z" />
    </svg>
  )
);
ClipboardFilled.displayName = "ClipboardFilled";
export const ClipboardFilledMetadata = { 
  id: "clipboard_filled", 
  baseId: "clipboard", 
  variant: "filled", 
  name: "Clipboard", 
  category: "clipboard", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ClipboardFilled;
