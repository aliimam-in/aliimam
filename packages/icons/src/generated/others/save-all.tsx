/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SaveAllProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SaveAll = React.forwardRef<SVGSVGElement, SaveAllProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M10 2v3a1 1 0 0 0 1 1h5" />
  <path d="M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6" />
  <path d="M18 22H4a2 2 0 0 1-2-2V6" />
  <path d="M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z" />
    </svg>
  )
);
SaveAll.displayName = "SaveAll";
export const SaveAllMetadata = { id: "save-all", baseId: "save-all", variant: "default", name: "Save All", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default SaveAll;
