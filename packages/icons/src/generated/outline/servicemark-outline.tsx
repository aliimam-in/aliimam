/**
 * Auto-generated logo component: Servicemark Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ServicemarkOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ServicemarkOutlineLogo = React.forwardRef<SVGSVGElement, ServicemarkOutlineLogoProps>(
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
      <path d="M9 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
  <path d="M13 15v-6l3 4l3 -4v6" />
    </svg>
  )
);

ServicemarkOutlineLogo.displayName = "ServicemarkOutlineLogo";

export const ServicemarkOutlineLogoMetadata = {
  id: "servicemark-outline",
  baseId: "servicemark-outline",
  variant: "default",
  name: "Servicemark Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ServicemarkOutlineLogo;
