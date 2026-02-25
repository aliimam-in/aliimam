/**
 * Auto-generated logo component: Prescription Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PrescriptionOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PrescriptionOutlineLogo = React.forwardRef<SVGSVGElement, PrescriptionOutlineLogoProps>(
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
      <path d="M6 19v-16h4.5a4.5 4.5 0 1 1 0 9h-4.5" />
  <path d="M19 21l-9 -9" />
  <path d="M13 21l6 -6" />
    </svg>
  )
);

PrescriptionOutlineLogo.displayName = "PrescriptionOutlineLogo";

export const PrescriptionOutlineLogoMetadata = {
  id: "prescription-outline",
  baseId: "prescription-outline",
  variant: "default",
  name: "Prescription Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PrescriptionOutlineLogo;
