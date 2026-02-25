/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PresentationAnalyticsFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PresentationAnalyticsFilled = React.forwardRef<SVGSVGElement, PresentationAnalyticsFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M21 3a1 1 0 0 1 0 2v9a3 3 0 0 1 -3 3h-5v2h2a1 1 0 0 1 0 2h-6a1 1 0 0 1 0 -2h2v-2h-5a3 3 0 0 1 -3 -3v-9a1 1 0 1 1 0 -2zm-12 4a1 1 0 0 0 -1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1m6 2a1 1 0 0 0 -1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0 -1 -1m-3 1a1 1 0 0 0 -1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0 -1 -1" />
    </svg>
  )
);
PresentationAnalyticsFilled.displayName = "PresentationAnalyticsFilled";
export const PresentationAnalyticsFilledMetadata = { id: "presentation-analytics_filled", baseId: "presentation-analytics", variant: "filled", name: "Presentation Analytics", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default PresentationAnalyticsFilled;
