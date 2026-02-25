/**
 * Auto-generated logo component: Report Money Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ReportMoneyOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ReportMoneyOutlineLogo = React.forwardRef<SVGSVGElement, ReportMoneyOutlineLogoProps>(
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
      <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
  <path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2" />
  <path d="M14 11h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
  <path d="M12 17v1m0 -8v1" />
    </svg>
  )
);

ReportMoneyOutlineLogo.displayName = "ReportMoneyOutlineLogo";

export const ReportMoneyOutlineLogoMetadata = {
  id: "report-money-outline",
  baseId: "report-money-outline",
  variant: "default",
  name: "Report Money Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ReportMoneyOutlineLogo;
