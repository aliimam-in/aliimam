/**
 * Auto-generated logo component: Device Desktop Question Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceDesktopQuestionOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceDesktopQuestionOutlineLogo = React.forwardRef<SVGSVGElement, DeviceDesktopQuestionOutlineLogoProps>(
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
      <path d="M13.5 16h-9.5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v6.5" />
  <path d="M7 20h8" />
  <path d="M9 16v4" />
  <path d="M19 22v.01" />
  <path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
    </svg>
  )
);

DeviceDesktopQuestionOutlineLogo.displayName = "DeviceDesktopQuestionOutlineLogo";

export const DeviceDesktopQuestionOutlineLogoMetadata = {
  id: "device-desktop-question-outline",
  baseId: "device-desktop-question-outline",
  variant: "default",
  name: "Device Desktop Question Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceDesktopQuestionOutlineLogo;
