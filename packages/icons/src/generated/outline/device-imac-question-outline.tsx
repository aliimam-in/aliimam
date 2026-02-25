/**
 * Auto-generated logo component: Device Imac Question Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceImacQuestionOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceImacQuestionOutlineLogo = React.forwardRef<SVGSVGElement, DeviceImacQuestionOutlineLogoProps>(
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
      <path d="M14 17h-10a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v7.5" />
  <path d="M3 13h11.5" />
  <path d="M8 21h7" />
  <path d="M10 17l-.5 4" />
  <path d="M14 17l.5 4" />
  <path d="M19 22v.01" />
  <path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
    </svg>
  )
);

DeviceImacQuestionOutlineLogo.displayName = "DeviceImacQuestionOutlineLogo";

export const DeviceImacQuestionOutlineLogoMetadata = {
  id: "device-imac-question-outline",
  baseId: "device-imac-question-outline",
  variant: "default",
  name: "Device Imac Question Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceImacQuestionOutlineLogo;
