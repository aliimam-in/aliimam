/**
 * Auto-generated logo component: Capture Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CaptureOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CaptureOffOutlineLogo = React.forwardRef<SVGSVGElement, CaptureOffOutlineLogoProps>(
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
      <path d="M4 16v2a2 2 0 0 0 2 2h2" />
  <path d="M16 4h2a2 2 0 0 1 2 2v2" />
  <path d="M16 20h2c.554 0 1.055 -.225 1.417 -.589" />
  <path d="M9.87 9.887a3 3 0 0 0 4.255 4.23m.58 -3.416a3.012 3.012 0 0 0 -1.4 -1.403" />
  <path d="M4 8v-2c0 -.548 .22 -1.044 .577 -1.405" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

CaptureOffOutlineLogo.displayName = "CaptureOffOutlineLogo";

export const CaptureOffOutlineLogoMetadata = {
  id: "capture-off-outline",
  baseId: "capture-off-outline",
  variant: "default",
  name: "Capture Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CaptureOffOutlineLogo;
