/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CodeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Code = React.forwardRef<SVGSVGElement, CodeProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="m16 18 6-6-6-6" />
  <path d="m8 6-6 6 6 6" />
    </svg>
  )
);
Code.displayName = "Code";
export const CodeMetadata = { id: "code", baseId: "code", variant: "default", name: "Code", category: "code", tags: [], viewBox: "0 0 24 24" } as const;
export default Code;
