/**
 * Auto-generated logo component: Presentation Analytics Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PresentationAnalyticsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PresentationAnalyticsOutlineLogo = React.forwardRef<SVGSVGElement, PresentationAnalyticsOutlineLogoProps>(
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
      <path d="M9 12v-4" />
  <path d="M15 12v-2" />
  <path d="M12 12v-1" />
  <path d="M3 4h18" />
  <path d="M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10" />
  <path d="M12 16v4" />
  <path d="M9 20h6" />
    </svg>
  )
);

PresentationAnalyticsOutlineLogo.displayName = "PresentationAnalyticsOutlineLogo";

export const PresentationAnalyticsOutlineLogoMetadata = {
  id: "presentation-analytics-outline",
  baseId: "presentation-analytics-outline",
  variant: "default",
  name: "Presentation Analytics Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PresentationAnalyticsOutlineLogo;
