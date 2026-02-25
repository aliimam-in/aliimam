/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TowelRackProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TowelRack = React.forwardRef<SVGSVGElement, TowelRackProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M22 7h-2" />
  <path d="M6.5 3h11A2.5 2.5 0 0 1 20 5.5V20a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V5.5a1 1 0 0 0-5 0V17a1 1 0 0 0 1 1h4" />
  <path d="M9 7H2" />
    </svg>
  )
);
TowelRack.displayName = "TowelRack";
export const TowelRackMetadata = { id: "towel-rack", baseId: "towel-rack", variant: "default", name: "Towel Rack", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default TowelRack;
