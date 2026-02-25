/**
 * Auto-generated logo component: Briefcase Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BriefcaseOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BriefcaseOffOutlineLogo = React.forwardRef<SVGSVGElement, BriefcaseOffOutlineLogoProps>(
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
      <path d="M11 7h8a2 2 0 0 1 2 2v8m-1.166 2.818a1.993 1.993 0 0 1 -.834 .182h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h2" />
  <path d="M8.185 4.158a2 2 0 0 1 1.815 -1.158h4a2 2 0 0 1 2 2v2" />
  <path d="M12 12v.01" />
  <path d="M3 13a20 20 0 0 0 11.905 1.928m3.263 -.763a20 20 0 0 0 2.832 -1.165" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

BriefcaseOffOutlineLogo.displayName = "BriefcaseOffOutlineLogo";

export const BriefcaseOffOutlineLogoMetadata = {
  id: "briefcase-off-outline",
  baseId: "briefcase-off-outline",
  variant: "default",
  name: "Briefcase Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BriefcaseOffOutlineLogo;
