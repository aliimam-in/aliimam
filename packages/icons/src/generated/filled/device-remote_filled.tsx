/**
 * Auto-generated logo component: Device Remote (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceRemoteFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceRemoteFilledLogo = React.forwardRef<SVGSVGElement, DeviceRemoteFilledLogoProps>(
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
      <path d="M15 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3h2v1a1 1 0 0 0 .883 .993l.117 .007a1 1 0 0 0 1 -1v-1zm-5 15a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883m4 0a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883m-4 -3a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883m4 0a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883m-2 -7a3 3 0 0 0 -2.995 2.824l-.005 .176a3 3 0 1 0 3 -3" />
    </svg>
  )
);

DeviceRemoteFilledLogo.displayName = "DeviceRemoteFilledLogo";

export const DeviceRemoteFilledLogoMetadata = {
  id: "device-remote_filled",
  baseId: "device-remote",
  variant: "filled",
  name: "Device Remote",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceRemoteFilledLogo;
