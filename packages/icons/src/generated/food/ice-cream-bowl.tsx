/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface IceCreamBowlProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const IceCreamBowl = React.forwardRef<SVGSVGElement, IceCreamBowlProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0" />
  <path d="M12.14 11a3.5 3.5 0 1 1 6.71 0" />
  <path d="M15.5 6.5a3.5 3.5 0 1 0-7 0" />
    </svg>
  )
);
IceCreamBowl.displayName = "IceCreamBowl";
export const IceCreamBowlMetadata = { id: "ice-cream-bowl", baseId: "ice-cream-bowl", variant: "default", name: "Ice Cream Bowl", category: "food", tags: [], viewBox: "0 0 24 24" } as const;
export default IceCreamBowl;
