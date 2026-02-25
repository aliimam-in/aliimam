/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FolderInputProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FolderInput = React.forwardRef<SVGSVGElement, FolderInputProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1" />
  <path d="M2 13h10" />
  <path d="m9 16 3-3-3-3" />
    </svg>
  )
);
FolderInput.displayName = "FolderInput";
export const FolderInputMetadata = { id: "folder-input", baseId: "folder-input", variant: "default", name: "Folder Input", category: "folder", tags: [], viewBox: "0 0 24 24" } as const;
export default FolderInput;
