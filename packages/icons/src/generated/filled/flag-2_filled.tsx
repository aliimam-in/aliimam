/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Flag2FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Flag2Filled = React.forwardRef<SVGSVGElement, Flag2FilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M19 4a1 1 0 0 1 .993 .883l.007 .117v9a1 1 0 0 1 -.883 .993l-.117 .007h-13v6a1 1 0 0 1 -.883 .993l-.117 .007a1 1 0 0 1 -.993 -.883l-.007 -.117v-16a1 1 0 0 1 .883 -.993l.117 -.007h14z" />
    </svg>
  )
);
Flag2Filled.displayName = "Flag2Filled";
export const Flag2FilledMetadata = { id: "flag-2_filled", baseId: "flag-2", variant: "filled", name: "Flag 2", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default Flag2Filled;
