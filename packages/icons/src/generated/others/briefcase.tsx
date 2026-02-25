/**
 * Auto-generated logo component: Briefcase (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BriefcaseLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BriefcaseLogo = React.forwardRef<SVGSVGElement, BriefcaseLogoProps>(
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
);

BriefcaseLogo.displayName = "BriefcaseLogo";

export const BriefcaseLogoMetadata = {
  id: "briefcase",
  baseId: "briefcase",
  variant: "default",
  name: "Briefcase",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BriefcaseLogo;
