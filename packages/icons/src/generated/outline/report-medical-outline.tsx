/**
 * Auto-generated logo component: Report Medical Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ReportMedicalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ReportMedicalOutlineLogo = React.forwardRef<SVGSVGElement, ReportMedicalOutlineLogoProps>(
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
      <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
  <path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2" />
  <path d="M10 14l4 0" />
  <path d="M12 12l0 4" />
    </svg>
  )
);

ReportMedicalOutlineLogo.displayName = "ReportMedicalOutlineLogo";

export const ReportMedicalOutlineLogoMetadata = {
  id: "report-medical-outline",
  baseId: "report-medical-outline",
  variant: "default",
  name: "Report Medical Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ReportMedicalOutlineLogo;
