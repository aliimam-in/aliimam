/**
 * Auto-generated logo component: Device Landline Phone Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceLandlinePhoneOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceLandlinePhoneOutlineLogo = React.forwardRef<SVGSVGElement, DeviceLandlinePhoneOutlineLogoProps>(
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
      <path d="M20 3h-2a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-14a2 2 0 0 0 -2 -2" />
  <path d="M16 4h-11a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h11" />
  <path d="M12 8h-6v3h6l0 -3" />
  <path d="M12 14v.01" />
  <path d="M9 14v.01" />
  <path d="M6 14v.01" />
  <path d="M12 17v.01" />
  <path d="M9 17v.01" />
  <path d="M6 17v.01" />
    </svg>
  )
);

DeviceLandlinePhoneOutlineLogo.displayName = "DeviceLandlinePhoneOutlineLogo";

export const DeviceLandlinePhoneOutlineLogoMetadata = {
  id: "device-landline-phone-outline",
  baseId: "device-landline-phone-outline",
  variant: "default",
  name: "Device Landline Phone Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceLandlinePhoneOutlineLogo;
