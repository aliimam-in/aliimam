/**
 * Auto-generated logo component: Device Mobile Code Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceMobileCodeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceMobileCodeOutlineLogo = React.forwardRef<SVGSVGElement, DeviceMobileCodeOutlineLogoProps>(
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
      <path d="M11.5 21h-3.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8" />
  <path d="M20 21l2 -2l-2 -2" />
  <path d="M17 17l-2 2l2 2" />
  <path d="M11 4h2" />
  <path d="M12 17v.01" />
    </svg>
  )
);

DeviceMobileCodeOutlineLogo.displayName = "DeviceMobileCodeOutlineLogo";

export const DeviceMobileCodeOutlineLogoMetadata = {
  id: "device-mobile-code-outline",
  baseId: "device-mobile-code-outline",
  variant: "default",
  name: "Device Mobile Code Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceMobileCodeOutlineLogo;
