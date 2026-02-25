/**
 * Auto-generated logo component: Report Search Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ReportSearchOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ReportSearchOutlineLogo = React.forwardRef<SVGSVGElement, ReportSearchOutlineLogoProps>(
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
      <path d="M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697" />
  <path d="M18 12v-5a2 2 0 0 0 -2 -2h-2" />
  <path d="M8 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2" />
  <path d="M8 11h4" />
  <path d="M8 15h3" />
  <path d="M14 17.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" />
  <path d="M18.5 19.5l2.5 2.5" />
    </svg>
  )
);

ReportSearchOutlineLogo.displayName = "ReportSearchOutlineLogo";

export const ReportSearchOutlineLogoMetadata = {
  id: "report-search-outline",
  baseId: "report-search-outline",
  variant: "default",
  name: "Report Search Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ReportSearchOutlineLogo;
