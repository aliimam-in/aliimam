/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FileVectorFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FileVectorFilled = React.forwardRef<SVGSVGElement, FileVectorFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12 2l.117 .007a1 1 0 0 1 .876 .876l.007 .117v4l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h4l.117 .007a1 1 0 0 1 .876 .876l.007 .117v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005zm2.5 9a2.5 2.5 0 0 0 -2.292 1.5h-.208a3.5 3.5 0 0 0 -3.399 2.666a2.5 2.5 0 0 0 -1.596 2.17l-.005 .164a2.5 2.5 0 1 0 3.676 -2.206a1.5 1.5 0 0 1 1.324 -.794h.208a2.5 2.5 0 1 0 2.292 -3.5m-5 6a.5 .5 0 1 1 0 1a.5 .5 0 0 1 0 -1m5 -4a.5 .5 0 1 1 0 1a.5 .5 0 0 1 0 -1" />
  <path d="M19 7h-4l-.001 -4.001z" />
    </svg>
  )
);
FileVectorFilled.displayName = "FileVectorFilled";
export const FileVectorFilledMetadata = { id: "file-vector_filled", baseId: "file-vector", variant: "filled", name: "File Vector", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default FileVectorFilled;
