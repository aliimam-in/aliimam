/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FileMusicProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FileMusic = React.forwardRef<SVGSVGElement, FileMusicProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M11.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v10.35" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M8 20v-7l3 1.474" />
  <circle cx="6" cy="20" r="2" />
    </svg>
  )
);
FileMusic.displayName = "FileMusic";
export const FileMusicMetadata = { id: "file-music", baseId: "file-music", variant: "default", name: "File Music", category: "file", tags: [], viewBox: "0 0 24 24" } as const;
export default FileMusic;
