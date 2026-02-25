/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SlashProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Slash = React.forwardRef<SVGSVGElement, SlashProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M22 2 2 22" />
    </svg>
  )
);
Slash.displayName = "Slash";
export const SlashMetadata = { id: "slash", baseId: "slash", variant: "default", name: "Slash", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Slash;
