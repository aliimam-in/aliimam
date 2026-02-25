/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArchiveXProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArchiveX = React.forwardRef<SVGSVGElement, ArchiveXProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <rect width="20" height="5" x="2" y="3" rx="1" />
  <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
  <path d="m9.5 17 5-5" />
  <path d="m9.5 12 5 5" />
    </svg>
  )
);
ArchiveX.displayName = "ArchiveX";
export const ArchiveXMetadata = { id: "archive-x", baseId: "archive-x", variant: "default", name: "Archive X", category: "design", tags: [], viewBox: "0 0 24 24" } as const;
export default ArchiveX;
