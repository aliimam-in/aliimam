/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BriefcaseMedicalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BriefcaseMedical = React.forwardRef<SVGSVGElement, BriefcaseMedicalProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12 11v4" />
  <path d="M14 13h-4" />
  <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
  <path d="M18 6v14" />
  <path d="M6 6v14" />
  <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
);
BriefcaseMedical.displayName = "BriefcaseMedical";
export const BriefcaseMedicalMetadata = { id: "briefcase-medical", baseId: "briefcase-medical", variant: "default", name: "Briefcase Medical", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default BriefcaseMedical;
