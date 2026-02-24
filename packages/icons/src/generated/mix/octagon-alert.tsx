/**
 * Auto-generated logo component: Octagon Alert (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface OctagonAlertLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const OctagonAlertLogo = React.forwardRef<SVGSVGElement, OctagonAlertLogoProps>(
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
      <path d="M12 16h.01" />
  <path d="M12 8v4" />
  <path d="M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z" />
    </svg>
  )
);

OctagonAlertLogo.displayName = "OctagonAlertLogo";

export const OctagonAlertLogoMetadata = {
  id: "octagon-alert",
  baseId: "octagon-alert",
  variant: "default",
  name: "Octagon Alert",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default OctagonAlertLogo;
