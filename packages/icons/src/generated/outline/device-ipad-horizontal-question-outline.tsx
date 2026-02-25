/**
 * Auto-generated logo component: Device Ipad Horizontal Question Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceIpadHorizontalQuestionOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceIpadHorizontalQuestionOutlineLogo = React.forwardRef<SVGSVGElement, DeviceIpadHorizontalQuestionOutlineLogoProps>(
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
      <path d="M15 20h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5" />
  <path d="M9 17h4.5" />
  <path d="M19 22v.01" />
  <path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
    </svg>
  )
);

DeviceIpadHorizontalQuestionOutlineLogo.displayName = "DeviceIpadHorizontalQuestionOutlineLogo";

export const DeviceIpadHorizontalQuestionOutlineLogoMetadata = {
  id: "device-ipad-horizontal-question-outline",
  baseId: "device-ipad-horizontal-question-outline",
  variant: "default",
  name: "Device Ipad Horizontal Question Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceIpadHorizontalQuestionOutlineLogo;
