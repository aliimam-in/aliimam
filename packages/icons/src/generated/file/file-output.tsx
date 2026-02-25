/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FileOutputProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FileOutput = React.forwardRef<SVGSVGElement, FileOutputProps>(
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
      <path d="M4.226 20.925A2 2 0 0 0 6 22h12a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.127" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="m5 11-3 3" />
  <path d="m5 17-3-3h10" />
    </svg>
  )
);
FileOutput.displayName = "FileOutput";
export const FileOutputMetadata = { 
  id: "file-output", 
  baseId: "file-output", 
  variant: "default", 
  name: "File Output", 
  category: "file", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FileOutput;
