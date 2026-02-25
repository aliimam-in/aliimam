/**
 * Auto-generated logo component: Devices Question Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DevicesQuestionOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DevicesQuestionOutlineLogo = React.forwardRef<SVGSVGElement, DevicesQuestionOutlineLogoProps>(
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
      <path d="M15 20h-1a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v2" />
  <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" />
  <path d="M19 22v.01" />
  <path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
  <path d="M16 9h2" />
    </svg>
  )
);

DevicesQuestionOutlineLogo.displayName = "DevicesQuestionOutlineLogo";

export const DevicesQuestionOutlineLogoMetadata = {
  id: "devices-question-outline",
  baseId: "devices-question-outline",
  variant: "default",
  name: "Devices Question Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DevicesQuestionOutlineLogo;
