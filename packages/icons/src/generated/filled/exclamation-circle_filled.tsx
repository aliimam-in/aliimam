/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ExclamationCircleFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ExclamationCircleFilled = React.forwardRef<SVGSVGElement, ExclamationCircleFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 11.66a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -7a1 1 0 0 0 -1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1" />
    </svg>
  )
);
ExclamationCircleFilled.displayName = "ExclamationCircleFilled";
export const ExclamationCircleFilledMetadata = { id: "exclamation-circle_filled", baseId: "exclamation-circle", variant: "filled", name: "Exclamation Circle", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default ExclamationCircleFilled;
