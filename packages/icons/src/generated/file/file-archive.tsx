/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FileArchiveProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FileArchive = React.forwardRef<SVGSVGElement, FileArchiveProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M13.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v11.5" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M8 12v-1" />
  <path d="M8 18v-2" />
  <path d="M8 7V6" />
  <circle cx="8" cy="20" r="2" />
    </svg>
  )
);
FileArchive.displayName = "FileArchive";
export const FileArchiveMetadata = { id: "file-archive", baseId: "file-archive", variant: "default", name: "File Archive", category: "file", tags: [], viewBox: "0 0 24 24" } as const;
export default FileArchive;
