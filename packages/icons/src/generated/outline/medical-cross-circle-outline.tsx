/**
 * Auto-generated logo component: Medical Cross Circle Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MedicalCrossCircleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MedicalCrossCircleOutlineLogo = React.forwardRef<SVGSVGElement, MedicalCrossCircleOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
  <path d="M12 8v8" />
  <path d="M15.5 10l-7 4" />
  <path d="M15.5 14l-7 -4" />
    </svg>
  )
);

MedicalCrossCircleOutlineLogo.displayName = "MedicalCrossCircleOutlineLogo";

export const MedicalCrossCircleOutlineLogoMetadata = {
  id: "medical-cross-circle-outline",
  baseId: "medical-cross-circle-outline",
  variant: "default",
  name: "Medical Cross Circle Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MedicalCrossCircleOutlineLogo;
