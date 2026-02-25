/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MartiniProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Martini = React.forwardRef<SVGSVGElement, MartiniProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M8 22h8" />
  <path d="M12 11v11" />
  <path d="m19 3-7 8-7-8Z" />
    </svg>
  )
);
Martini.displayName = "Martini";
export const MartiniMetadata = { id: "martini", baseId: "martini", variant: "default", name: "Martini", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Martini;
