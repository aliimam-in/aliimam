/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ReportMoneyFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ReportMoneyFilled = React.forwardRef<SVGSVGElement, ReportMoneyFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M17.997 4.17a3 3 0 0 1 2.003 2.83v12a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 2.003 -2.83a4 4 0 0 0 3.997 3.83h4a4 4 0 0 0 3.98 -3.597zm-5.997 5.83a1 1 0 0 0 -1 1v.05a2.5 2.5 0 0 0 .5 4.95h1a.5 .5 0 1 1 0 1h-2.5a1 1 0 0 0 0 2h1a1 1 0 0 0 2 0v-.05a2.5 2.5 0 0 0 -.5 -4.95h-1a.5 .5 0 1 1 0 -1h2.5a1 1 0 0 0 0 -2h-1a1 1 0 0 0 -1 -1m2 -8a2 2 0 1 1 0 4h-4a2 2 0 1 1 0 -4z" />
    </svg>
  )
);
ReportMoneyFilled.displayName = "ReportMoneyFilled";
export const ReportMoneyFilledMetadata = { id: "report-money_filled", baseId: "report-money", variant: "filled", name: "Report Money", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default ReportMoneyFilled;
