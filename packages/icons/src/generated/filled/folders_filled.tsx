/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FoldersFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FoldersFilled = React.forwardRef<SVGSVGElement, FoldersFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12 2a1 1 0 0 1 .707 .293l1.708 1.707h4.585a3 3 0 0 1 2.995 2.824l.005 .176v7a3 3 0 0 1 -3 3h-1v1a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3h1v-1a3 3 0 0 1 3 -3zm-6 6h-1a1 1 0 0 0 -1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1 -1v-1h-7a3 3 0 0 1 -3 -3z" />
    </svg>
  )
);
FoldersFilled.displayName = "FoldersFilled";
export const FoldersFilledMetadata = { id: "folders_filled", baseId: "folders", variant: "filled", name: "Folders", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default FoldersFilled;
