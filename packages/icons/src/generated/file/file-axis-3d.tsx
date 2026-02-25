/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FileAxis3dProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FileAxis3d = React.forwardRef<SVGSVGElement, FileAxis3dProps>(
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
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="m8 18 4-4" />
  <path d="M8 10v8h8" />
    </svg>
  )
);
FileAxis3d.displayName = "FileAxis3d";
export const FileAxis3dMetadata = { 
  id: "file-axis-3d", 
  baseId: "file-axis-3d", 
  variant: "default", 
  name: "File Axis 3d", 
  category: "file", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FileAxis3d;
