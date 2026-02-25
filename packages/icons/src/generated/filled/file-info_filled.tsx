/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FileInfoFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FileInfoFilled = React.forwardRef<SVGSVGElement, FileInfoFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12 2l.117 .007a1 1 0 0 1 .876 .876l.007 .117v4l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h4l.117 .007a1 1 0 0 1 .876 .876l.007 .117v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005zm0 12h-1a1 1 0 0 0 0 2v3a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007v-3a1 1 0 0 0 -1 -1m.01 -3h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 0 0 0 -2" />
  <path d="M19 7h-4l-.001 -4.001z" />
    </svg>
  )
);
FileInfoFilled.displayName = "FileInfoFilled";
export const FileInfoFilledMetadata = { id: "file-info_filled", baseId: "file-info", variant: "filled", name: "File Info", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default FileInfoFilled;
