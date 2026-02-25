/**
 * Auto-generated logo component: Devices Heart Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DevicesHeartOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DevicesHeartOutlineLogo = React.forwardRef<SVGSVGElement, DevicesHeartOutlineLogoProps>(
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
      <path d="M13 12v-3a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v2" />
  <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h6" />
  <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296" />
  <path d="M16 9h2" />
    </svg>
  )
);

DevicesHeartOutlineLogo.displayName = "DevicesHeartOutlineLogo";

export const DevicesHeartOutlineLogoMetadata = {
  id: "devices-heart-outline",
  baseId: "devices-heart-outline",
  variant: "default",
  name: "Devices Heart Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DevicesHeartOutlineLogo;
