/**
 * Auto-generated logo component: Device Audio Tape Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceAudioTapeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceAudioTapeOutlineLogo = React.forwardRef<SVGSVGElement, DeviceAudioTapeOutlineLogoProps>(
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
      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
  <path d="M3 17l4 -3h10l4 3" />
  <path d="M7 9.5a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0" fill="currentColor" />
  <path d="M16 9.5a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0" fill="currentColor" />
    </svg>
  )
);

DeviceAudioTapeOutlineLogo.displayName = "DeviceAudioTapeOutlineLogo";

export const DeviceAudioTapeOutlineLogoMetadata = {
  id: "device-audio-tape-outline",
  baseId: "device-audio-tape-outline",
  variant: "default",
  name: "Device Audio Tape Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceAudioTapeOutlineLogo;
