/**
 * Auto-generated logo component: Device Speaker Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceSpeakerOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceSpeakerOffOutlineLogo = React.forwardRef<SVGSVGElement, DeviceSpeakerOffOutlineLogoProps>(
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
      <path d="M7 3h10a2 2 0 0 1 2 2v10m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14" />
  <path d="M11.114 11.133a3 3 0 1 0 3.754 3.751" />
  <path d="M12 7v.01" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

DeviceSpeakerOffOutlineLogo.displayName = "DeviceSpeakerOffOutlineLogo";

export const DeviceSpeakerOffOutlineLogoMetadata = {
  id: "device-speaker-off-outline",
  baseId: "device-speaker-off-outline",
  variant: "default",
  name: "Device Speaker Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceSpeakerOffOutlineLogo;
