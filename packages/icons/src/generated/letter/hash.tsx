/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HashProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Hash = React.forwardRef<SVGSVGElement, HashProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <line x1="4" x2="20" y1="9" y2="9" />
  <line x1="4" x2="20" y1="15" y2="15" />
  <line x1="10" x2="8" y1="3" y2="21" />
  <line x1="16" x2="14" y1="3" y2="21" />
    </svg>
  )
);
Hash.displayName = "Hash";
export const HashMetadata = { id: "hash", baseId: "hash", variant: "default", name: "Hash", category: "letter", tags: [], viewBox: "0 0 24 24" } as const;
export default Hash;
