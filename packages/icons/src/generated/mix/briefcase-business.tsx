/**
 * Auto-generated logo component: Briefcase Business (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BriefcaseBusinessLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BriefcaseBusinessLogo = React.forwardRef<SVGSVGElement, BriefcaseBusinessLogoProps>(
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
      <path d="M12 12h.01" />
  <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
  <path d="M22 13a18.15 18.15 0 0 1-20 0" />
  <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
);

BriefcaseBusinessLogo.displayName = "BriefcaseBusinessLogo";

export const BriefcaseBusinessLogoMetadata = {
  id: "briefcase-business",
  baseId: "briefcase-business",
  variant: "default",
  name: "Briefcase Business",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BriefcaseBusinessLogo;
