/**
 * Auto-generated logo component: Airplay (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AirplayLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AirplayLogo = React.forwardRef<SVGSVGElement, AirplayLogoProps>(
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
      <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/><polygon points="12 15 17 21 7 21 12 15"/>
    </svg>
  )
);

AirplayLogo.displayName = "AirplayLogo";

export const AirplayLogoMetadata = {
  id: "airplay",
  baseId: "airplay",
  variant: "default",
  name: "Airplay",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AirplayLogo;
