/**
 * Auto-generated logo component: Device Watch Question Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceWatchQuestionOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceWatchQuestionOutlineLogo = React.forwardRef<SVGSVGElement, DeviceWatchQuestionOutlineLogoProps>(
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
      <path d="M14 18h-5a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v2" />
  <path d="M9 18v3h6v-2" />
  <path d="M9 6v-3h6v3" />
  <path d="M19 22v.01" />
  <path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
    </svg>
  )
);

DeviceWatchQuestionOutlineLogo.displayName = "DeviceWatchQuestionOutlineLogo";

export const DeviceWatchQuestionOutlineLogoMetadata = {
  id: "device-watch-question-outline",
  baseId: "device-watch-question-outline",
  variant: "default",
  name: "Device Watch Question Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceWatchQuestionOutlineLogo;
