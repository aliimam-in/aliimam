/**
 * Auto-generated logo component: Device Speaker Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceSpeakerFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceSpeakerFilledLogo = React.forwardRef<SVGSVGElement, DeviceSpeakerFilledLogoProps>(
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
      <path d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-5 9a4 4 0 0 0 -3.995 3.8l-.005 .2a4 4 0 1 0 4 -4m0 -5a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1" />
    </svg>
  )
);

DeviceSpeakerFilledLogo.displayName = "DeviceSpeakerFilledLogo";

export const DeviceSpeakerFilledLogoMetadata = {
  id: "device-speaker-filled",
  baseId: "device-speaker-filled",
  variant: "default",
  name: "Device Speaker Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceSpeakerFilledLogo;
