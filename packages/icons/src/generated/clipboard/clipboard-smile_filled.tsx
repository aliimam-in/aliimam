/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ClipboardSmileFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ClipboardSmileFilled = React.forwardRef<SVGSVGElement, ClipboardSmileFilledProps>(
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
      <path d="M17.997 4.17a3 3 0 0 1 2.003 2.83v12a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 2.003 -2.83a4 4 0 0 0 3.997 3.83h4a4 4 0 0 0 3.98 -3.597zm-3.176 11.259a1 1 0 0 0 -1.392 -.25a2.5 2.5 0 0 1 -2.858 0a1 1 0 0 0 -1.142 1.642a4.5 4.5 0 0 0 5.142 0a1 1 0 0 0 .25 -1.392m-4.811 -3.429h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 0 0 0 -2m4 0h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 0 0 0 -2m-.01 -10a2 2 0 1 1 0 4h-4a2 2 0 1 1 0 -4z" />
    </svg>
  )
);
ClipboardSmileFilled.displayName = "ClipboardSmileFilled";
export const ClipboardSmileFilledMetadata = { 
  id: "clipboard-smile_filled", 
  baseId: "clipboard-smile", 
  variant: "filled", 
  name: "Clipboard Smile", 
  category: "clipboard", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ClipboardSmileFilled;
