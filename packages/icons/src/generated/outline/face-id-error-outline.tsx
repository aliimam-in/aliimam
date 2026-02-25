/**
 * Auto-generated logo component: Face Id Error Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FaceIdErrorOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FaceIdErrorOutlineLogo = React.forwardRef<SVGSVGElement, FaceIdErrorOutlineLogoProps>(
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
      <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
  <path d="M4 16v2a2 2 0 0 0 2 2h2" />
  <path d="M16 4h2a2 2 0 0 1 2 2v2" />
  <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
  <path d="M9 10h.01" />
  <path d="M15 10h.01" />
  <path d="M9.5 15.05a3.5 3.5 0 0 1 5 0" />
    </svg>
  )
);

FaceIdErrorOutlineLogo.displayName = "FaceIdErrorOutlineLogo";

export const FaceIdErrorOutlineLogoMetadata = {
  id: "face-id-error-outline",
  baseId: "face-id-error-outline",
  variant: "default",
  name: "Face Id Error Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FaceIdErrorOutlineLogo;
