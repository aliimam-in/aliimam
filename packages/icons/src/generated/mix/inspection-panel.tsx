/**
 * Auto-generated logo component: Inspection Panel (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface InspectionPanelLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const InspectionPanelLogo = React.forwardRef<SVGSVGElement, InspectionPanelLogoProps>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M7 7h.01" />
  <path d="M17 7h.01" />
  <path d="M7 17h.01" />
  <path d="M17 17h.01" />
    </svg>
  )
);

InspectionPanelLogo.displayName = "InspectionPanelLogo";

export const InspectionPanelLogoMetadata = {
  id: "inspection-panel",
  baseId: "inspection-panel",
  variant: "default",
  name: "Inspection Panel",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default InspectionPanelLogo;
