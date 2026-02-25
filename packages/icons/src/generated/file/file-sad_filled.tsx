/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FileSadFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FileSadFilled = React.forwardRef<SVGSVGElement, FileSadFilledProps>(
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
      <path d="M12 2l.117 .007a1 1 0 0 1 .876 .876l.007 .117v4l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h4l.117 .007a1 1 0 0 1 .876 .876l.007 .117v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005zm2.571 15.18a4.5 4.5 0 0 0 -5.142 0a1 1 0 1 0 1.142 1.64a2.5 2.5 0 0 1 2.858 0a1 1 0 0 0 1.142 -1.64m-4.565 -5.18h-.011a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2m4 0h-.011a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2" />
  <path d="M19 7h-4l-.001 -4.001z" />
    </svg>
  )
);
FileSadFilled.displayName = "FileSadFilled";
export const FileSadFilledMetadata = { 
  id: "file-sad_filled", 
  baseId: "file-sad", 
  variant: "filled", 
  name: "File Sad", 
  category: "file", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FileSadFilled;
