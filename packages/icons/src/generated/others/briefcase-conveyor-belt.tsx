/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BriefcaseConveyorBeltProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BriefcaseConveyorBelt = React.forwardRef<SVGSVGElement, BriefcaseConveyorBeltProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M10 20v2" />
  <path d="M14 20v2" />
  <path d="M18 20v2" />
  <path d="M21 20H3" />
  <path d="M6 20v2" />
  <path d="M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12" />
  <rect x="4" y="6" width="16" height="10" rx="2" />
    </svg>
  )
);
BriefcaseConveyorBelt.displayName = "BriefcaseConveyorBelt";
export const BriefcaseConveyorBeltMetadata = { id: "briefcase-conveyor-belt", baseId: "briefcase-conveyor-belt", variant: "default", name: "Briefcase Conveyor Belt", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default BriefcaseConveyorBelt;
