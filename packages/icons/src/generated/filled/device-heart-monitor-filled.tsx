/**
 * Auto-generated logo component: Device Heart Monitor Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceHeartMonitorFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceHeartMonitorFilledLogo = React.forwardRef<SVGSVGElement, DeviceHeartMonitorFilledLogoProps>(
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
      <path d="M18 3a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h12zm-4 13a1 1 0 0 0 -.993 .883l-.007 .117l.007 .127a1 1 0 0 0 1.986 0l.007 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm3 0a1 1 0 0 0 -.993 .883l-.007 .117l.007 .127a1 1 0 0 0 1.986 0l.007 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm-6 -6.764l-.106 .211a1 1 0 0 1 -.77 .545l-.124 .008l-5 -.001v3.001h14v-3.001l-4.382 .001l-.724 1.447a1 1 0 0 1 -1.725 .11l-.063 -.11l-1.106 -2.211zm7 -4.236h-12a1 1 0 0 0 -.993 .883l-.007 .117v1.999l4.381 .001l.725 -1.447a1 1 0 0 1 1.725 -.11l.063 .11l1.106 2.21l.106 -.21a1 1 0 0 1 .77 -.545l.124 -.008l5 -.001v-1.999a1 1 0 0 0 -.883 -.993l-.117 -.007z" />
    </svg>
  )
);

DeviceHeartMonitorFilledLogo.displayName = "DeviceHeartMonitorFilledLogo";

export const DeviceHeartMonitorFilledLogoMetadata = {
  id: "device-heart-monitor-filled",
  baseId: "device-heart-monitor-filled",
  variant: "default",
  name: "Device Heart Monitor Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceHeartMonitorFilledLogo;
