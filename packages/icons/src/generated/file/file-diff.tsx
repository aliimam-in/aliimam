/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FileDiffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FileDiff = React.forwardRef<SVGSVGElement, FileDiffProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M9 10h6" />
  <path d="M12 13V7" />
  <path d="M9 17h6" />
    </svg>
  )
);
FileDiff.displayName = "FileDiff";
export const FileDiffMetadata = { id: "file-diff", baseId: "file-diff", variant: "default", name: "File Diff", category: "file", tags: [], viewBox: "0 0 24 24" } as const;
export default FileDiff;
