/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FilePowerFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FilePowerFilled = React.forwardRef<SVGSVGElement, FilePowerFilledProps>(
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
      <path d="M12 2l.117 .007a1 1 0 0 1 .876 .876l.007 .117v4l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h4l.117 .007a1 1 0 0 1 .876 .876l.007 .117v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005zm.555 9.168a1 1 0 0 0 -1.387 .277l-2 3l-.057 .097a1 1 0 0 0 .889 1.458h2.13l-.962 1.445a1 1 0 1 0 1.664 1.11l2 -3l.057 -.097a1 1 0 0 0 -.889 -1.458h-2.132l.964 -1.445a1 1 0 0 0 -.277 -1.387" />
  <path d="M19 7h-4l-.001 -4.001z" />
    </svg>
  )
);
FilePowerFilled.displayName = "FilePowerFilled";
export const FilePowerFilledMetadata = { 
  id: "file-power_filled", 
  baseId: "file-power", 
  variant: "filled", 
  name: "File Power", 
  category: "file", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FilePowerFilled;
