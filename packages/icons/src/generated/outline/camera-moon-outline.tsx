/**
 * Auto-generated logo component: Camera Moon Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CameraMoonOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CameraMoonOutlineLogo = React.forwardRef<SVGSVGElement, CameraMoonOutlineLogoProps>(
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
      <path d="M11.5 20h-6.5a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v3.5" />
  <path d="M14.815 11.96a3.001 3.001 0 1 0 -3.398 3.983" />
  <path d="M18.62 22c-2 0 -3.62 -1.58 -3.62 -3.53c0 -1.727 1.273 -3.165 2.954 -3.47a3.4 3.4 0 0 0 -.24 1.264c0 1.95 1.621 3.53 3.62 3.53q .342 0 .666 -.06c-.521 1.326 -1.838 2.266 -3.38 2.266" />
    </svg>
  )
);

CameraMoonOutlineLogo.displayName = "CameraMoonOutlineLogo";

export const CameraMoonOutlineLogoMetadata = {
  id: "camera-moon-outline",
  baseId: "camera-moon-outline",
  variant: "default",
  name: "Camera Moon Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CameraMoonOutlineLogo;
