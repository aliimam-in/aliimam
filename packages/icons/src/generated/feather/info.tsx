/**
 * Auto-generated logo component: Info (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface InfoLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const InfoLogo = React.forwardRef<SVGSVGElement, InfoLogoProps>(
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
      <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
    </svg>
  )
);

InfoLogo.displayName = "InfoLogo";

export const InfoLogoMetadata = {
  id: "info",
  baseId: "info",
  variant: "default",
  name: "Info",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default InfoLogo;
