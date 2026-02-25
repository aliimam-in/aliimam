/**
 * Auto-generated logo component: Device Speaker Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceSpeakerOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceSpeakerOutlineLogo = React.forwardRef<SVGSVGElement, DeviceSpeakerOutlineLogoProps>(
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
      <path d="M5 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -14" />
  <path d="M9 14a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M12 7l0 .01" />
    </svg>
  )
);

DeviceSpeakerOutlineLogo.displayName = "DeviceSpeakerOutlineLogo";

export const DeviceSpeakerOutlineLogoMetadata = {
  id: "device-speaker-outline",
  baseId: "device-speaker-outline",
  variant: "default",
  name: "Device Speaker Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceSpeakerOutlineLogo;
