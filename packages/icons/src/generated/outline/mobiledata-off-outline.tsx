/**
 * Auto-generated logo component: Mobiledata Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MobiledataOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MobiledataOffOutlineLogo = React.forwardRef<SVGSVGElement, MobiledataOffOutlineLogoProps>(
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
      <path d="M16 12v-8" />
  <path d="M8 20v-8" />
  <path d="M13 7l3 -3l3 3" />
  <path d="M5 17l3 3l3 -3" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

MobiledataOffOutlineLogo.displayName = "MobiledataOffOutlineLogo";

export const MobiledataOffOutlineLogoMetadata = {
  id: "mobiledata-off-outline",
  baseId: "mobiledata-off-outline",
  variant: "default",
  name: "Mobiledata Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MobiledataOffOutlineLogo;
