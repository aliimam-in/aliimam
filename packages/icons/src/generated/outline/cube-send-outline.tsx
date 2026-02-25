/**
 * Auto-generated logo component: Cube Send Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CubeSendOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CubeSendOutlineLogo = React.forwardRef<SVGSVGElement, CubeSendOutlineLogoProps>(
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
      <path d="M16 12.5l-5 -3l5 -3l5 3v5.5l-5 3l0 -5.5" />
  <path d="M11 9.5v5.5l5 3" />
  <path d="M16 12.545l5 -3.03" />
  <path d="M7 9h-5" />
  <path d="M7 12h-3" />
  <path d="M7 15h-1" />
    </svg>
  )
);

CubeSendOutlineLogo.displayName = "CubeSendOutlineLogo";

export const CubeSendOutlineLogoMetadata = {
  id: "cube-send-outline",
  baseId: "cube-send-outline",
  variant: "default",
  name: "Cube Send Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CubeSendOutlineLogo;
