/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PersonStandingProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PersonStanding = React.forwardRef<SVGSVGElement, PersonStandingProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <circle cx="12" cy="5" r="1" />
  <path d="m9 20 3-6 3 6" />
  <path d="m6 8 6 2 6-2" />
  <path d="M12 10v4" />
    </svg>
  )
);
PersonStanding.displayName = "PersonStanding";
export const PersonStandingMetadata = { id: "person-standing", baseId: "person-standing", variant: "default", name: "Person Standing", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default PersonStanding;
