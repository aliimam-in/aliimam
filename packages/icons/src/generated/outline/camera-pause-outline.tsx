/**
 * Auto-generated logo component: Camera Pause Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CameraPauseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CameraPauseOutlineLogo = React.forwardRef<SVGSVGElement, CameraPauseOutlineLogoProps>(
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
      <path d="M13 20h-8a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v4" />
  <path d="M14.958 13.506a3 3 0 1 0 -1.735 2.235" />
  <path d="M17 17v5" />
  <path d="M21 17v5" />
    </svg>
  )
);

CameraPauseOutlineLogo.displayName = "CameraPauseOutlineLogo";

export const CameraPauseOutlineLogoMetadata = {
  id: "camera-pause-outline",
  baseId: "camera-pause-outline",
  variant: "default",
  name: "Camera Pause Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CameraPauseOutlineLogo;
