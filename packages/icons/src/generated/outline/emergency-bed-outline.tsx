/**
 * Auto-generated logo component: Emergency Bed Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EmergencyBedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EmergencyBedOutlineLogo = React.forwardRef<SVGSVGElement, EmergencyBedOutlineLogoProps>(
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
      <path d="M14 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M6 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M4 8l2.1 2.8a3 3 0 0 0 2.4 1.2h11.5" />
  <path d="M10 6h4" />
  <path d="M12 4v4" />
  <path d="M12 12v2l-2.5 2.5" />
  <path d="M14.5 16.5l-2.5 -2.5" />
    </svg>
  )
);

EmergencyBedOutlineLogo.displayName = "EmergencyBedOutlineLogo";

export const EmergencyBedOutlineLogoMetadata = {
  id: "emergency-bed-outline",
  baseId: "emergency-bed-outline",
  variant: "default",
  name: "Emergency Bed Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EmergencyBedOutlineLogo;
