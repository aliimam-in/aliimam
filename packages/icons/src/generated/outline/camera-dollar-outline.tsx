/**
 * Auto-generated logo component: Camera Dollar Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CameraDollarOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CameraDollarOutlineLogo = React.forwardRef<SVGSVGElement, CameraDollarOutlineLogoProps>(
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
      <path d="M13 20h-8a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1.5" />
  <path d="M14.935 12.375a3.001 3.001 0 1 0 -1.902 3.442" />
  <path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
  <path d="M19 21v1m0 -8v1" />
    </svg>
  )
);

CameraDollarOutlineLogo.displayName = "CameraDollarOutlineLogo";

export const CameraDollarOutlineLogoMetadata = {
  id: "camera-dollar-outline",
  baseId: "camera-dollar-outline",
  variant: "default",
  name: "Camera Dollar Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CameraDollarOutlineLogo;
