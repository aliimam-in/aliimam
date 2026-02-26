/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FileChartLineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FileChartLine = React.forwardRef<SVGSVGElement, FileChartLineProps>(
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
  <path d="m16 13-3.5 3.5-2-2L8 17" />
    </svg>
  )
);
FileChartLine.displayName = "FileChartLine";
export const FileChartLineMetadata = { 
  id: "file-chart-line", 
  baseId: "file-chart-line", 
  variant: "default", 
  name: "File Chart Line", 
  category: "file", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FileChartLine;
