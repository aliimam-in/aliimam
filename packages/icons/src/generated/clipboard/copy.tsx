/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CopyProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Copy = React.forwardRef<SVGSVGElement, CopyProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  )
);
Copy.displayName = "Copy";
export const CopyMetadata = { id: "copy", baseId: "copy", variant: "default", name: "Copy", category: "clipboard", tags: [], viewBox: "0 0 24 24" } as const;
export default Copy;
