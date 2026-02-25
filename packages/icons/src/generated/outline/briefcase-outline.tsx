/**
 * Auto-generated logo component: Briefcase Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BriefcaseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BriefcaseOutlineLogo = React.forwardRef<SVGSVGElement, BriefcaseOutlineLogoProps>(
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
      <path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -9" />
  <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
  <path d="M12 12l0 .01" />
  <path d="M3 13a20 20 0 0 0 18 0" />
    </svg>
  )
);

BriefcaseOutlineLogo.displayName = "BriefcaseOutlineLogo";

export const BriefcaseOutlineLogoMetadata = {
  id: "briefcase-outline",
  baseId: "briefcase-outline",
  variant: "default",
  name: "Briefcase Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BriefcaseOutlineLogo;
