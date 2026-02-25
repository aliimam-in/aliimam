/**
 * Auto-generated logo component: Vacuum Cleaner Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VacuumCleanerOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const VacuumCleanerOutlineLogo = React.forwardRef<SVGSVGElement, VacuumCleanerOutlineLogoProps>(
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
      <path d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0" />
  <path d="M14 9a2 2 0 1 1 -4 0a2 2 0 0 1 4 0" />
  <path d="M12 16h.01" />
    </svg>
  )
);

VacuumCleanerOutlineLogo.displayName = "VacuumCleanerOutlineLogo";

export const VacuumCleanerOutlineLogoMetadata = {
  id: "vacuum-cleaner-outline",
  baseId: "vacuum-cleaner-outline",
  variant: "default",
  name: "Vacuum Cleaner Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default VacuumCleanerOutlineLogo;
