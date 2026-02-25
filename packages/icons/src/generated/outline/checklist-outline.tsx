/**
 * Auto-generated logo component: Checklist Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChecklistOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChecklistOutlineLogo = React.forwardRef<SVGSVGElement, ChecklistOutlineLogoProps>(
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
      <path d="M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8" />
  <path d="M14 19l2 2l4 -4" />
  <path d="M9 8h4" />
  <path d="M9 12h2" />
    </svg>
  )
);

ChecklistOutlineLogo.displayName = "ChecklistOutlineLogo";

export const ChecklistOutlineLogoMetadata = {
  id: "checklist-outline",
  baseId: "checklist-outline",
  variant: "default",
  name: "Checklist Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChecklistOutlineLogo;
