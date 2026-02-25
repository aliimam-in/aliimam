/**
 * Auto-generated logo component: Camper Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CamperOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CamperOutlineLogo = React.forwardRef<SVGSVGElement, CamperOutlineLogoProps>(
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
      <path d="M5 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M15 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M5 18h-1a1 1 0 0 1 -1 -1v-11a2 2 0 0 1 2 -2h12a4 4 0 0 1 4 4h-18" />
  <path d="M9 18h6" />
  <path d="M19 18h1a1 1 0 0 0 1 -1v-4l-3 -5" />
  <path d="M21 13h-7" />
  <path d="M14 8v10" />
    </svg>
  )
);

CamperOutlineLogo.displayName = "CamperOutlineLogo";

export const CamperOutlineLogoMetadata = {
  id: "camper-outline",
  baseId: "camper-outline",
  variant: "default",
  name: "Camper Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CamperOutlineLogo;
