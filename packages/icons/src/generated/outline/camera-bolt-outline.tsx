/**
 * Auto-generated logo component: Camera Bolt Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CameraBoltOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CameraBoltOutlineLogo = React.forwardRef<SVGSVGElement, CameraBoltOutlineLogoProps>(
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
      <path d="M13 20h-8a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v3.5" />
  <path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
  <path d="M19 16l-2 3h4l-2 3" />
    </svg>
  )
);

CameraBoltOutlineLogo.displayName = "CameraBoltOutlineLogo";

export const CameraBoltOutlineLogoMetadata = {
  id: "camera-bolt-outline",
  baseId: "camera-bolt-outline",
  variant: "default",
  name: "Camera Bolt Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CameraBoltOutlineLogo;
