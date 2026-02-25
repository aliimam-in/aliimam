/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface OctagonAlertProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const OctagonAlert = React.forwardRef<SVGSVGElement, OctagonAlertProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M12 16h.01" />
  <path d="M12 8v4" />
  <path d="M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z" />
    </svg>
  )
);
OctagonAlert.displayName = "OctagonAlert";
export const OctagonAlertMetadata = { 
  id: "octagon-alert", 
  baseId: "octagon-alert", 
  variant: "default", 
  name: "Octagon Alert", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default OctagonAlert;
