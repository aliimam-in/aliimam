/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Briefcase2FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Briefcase2Filled = React.forwardRef<SVGSVGElement, Briefcase2FilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M14 2a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3zm0 2h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1" />
    </svg>
  )
);
Briefcase2Filled.displayName = "Briefcase2Filled";
export const Briefcase2FilledMetadata = { id: "briefcase-2_filled", baseId: "briefcase-2", variant: "filled", name: "Briefcase 2", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default Briefcase2Filled;
