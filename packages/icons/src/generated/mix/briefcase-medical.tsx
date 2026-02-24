/**
 * Auto-generated logo component: Briefcase Medical (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BriefcaseMedicalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BriefcaseMedicalLogo = React.forwardRef<SVGSVGElement, BriefcaseMedicalLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M12 11v4" />
  <path d="M14 13h-4" />
  <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
  <path d="M18 6v14" />
  <path d="M6 6v14" />
  <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
);

BriefcaseMedicalLogo.displayName = "BriefcaseMedicalLogo";

export const BriefcaseMedicalLogoMetadata = {
  id: "briefcase-medical",
  baseId: "briefcase-medical",
  variant: "default",
  name: "Briefcase Medical",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BriefcaseMedicalLogo;
