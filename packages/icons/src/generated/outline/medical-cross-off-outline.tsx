/**
 * Auto-generated logo component: Medical Cross Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MedicalCrossOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MedicalCrossOffOutlineLogo = React.forwardRef<SVGSVGElement, MedicalCrossOffOutlineLogoProps>(
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
      <path d="M17.928 17.733l-.574 -.331l-3.354 -1.938v4.536a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-4.536l-3.928 2.268a1 1 0 0 1 -1.366 -.366l-1 -1.732a1 1 0 0 1 .366 -1.366l3.927 -2.268l-3.927 -2.268a1 1 0 0 1 -.366 -1.366l1 -1.732a1 1 0 0 1 1.366 -.366l.333 .192m3.595 -.46v-2a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4.535l3.928 -2.267a1 1 0 0 1 1.366 .366l1 1.732a1 1 0 0 1 -.366 1.366l-3.927 2.268l3.927 2.269a1 1 0 0 1 .366 1.366l-.24 .416" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

MedicalCrossOffOutlineLogo.displayName = "MedicalCrossOffOutlineLogo";

export const MedicalCrossOffOutlineLogoMetadata = {
  id: "medical-cross-off-outline",
  baseId: "medical-cross-off-outline",
  variant: "default",
  name: "Medical Cross Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MedicalCrossOffOutlineLogo;
