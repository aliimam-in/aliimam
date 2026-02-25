/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FileLockProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FileLock = React.forwardRef<SVGSVGElement, FileLockProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M4 9.8V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M9 17v-2a2 2 0 0 0-4 0v2" />
  <rect width="8" height="5" x="3" y="17" rx="1" />
    </svg>
  )
);
FileLock.displayName = "FileLock";
export const FileLockMetadata = { id: "file-lock", baseId: "file-lock", variant: "default", name: "File Lock", category: "file", tags: [], viewBox: "0 0 24 24" } as const;
export default FileLock;
