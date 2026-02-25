/**
 * Auto-generated logo component: Report Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ReportOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ReportOutlineLogo = React.forwardRef<SVGSVGElement, ReportOutlineLogoProps>(
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
  <path d="M18 14v4h4" />
  <path d="M18 11v-4a2 2 0 0 0 -2 -2h-2" />
  <path d="M8 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2" />
  <path d="M14 18a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  <path d="M8 11h4" />
  <path d="M8 15h3" />
    </svg>
  )
);

ReportOutlineLogo.displayName = "ReportOutlineLogo";

export const ReportOutlineLogoMetadata = {
  id: "report-outline",
  baseId: "report-outline",
  variant: "default",
  name: "Report Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ReportOutlineLogo;
