/**
 * Auto-generated logo component: Briefcase (default)
 * Category: feather
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
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  )
);

BriefcaseLogo.displayName = "BriefcaseLogo";

export const BriefcaseLogoMetadata = {
  id: "briefcase",
  baseId: "briefcase",
  variant: "default",
  name: "Briefcase",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BriefcaseLogo;
