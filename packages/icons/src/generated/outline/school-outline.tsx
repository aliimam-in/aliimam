/**
 * Auto-generated logo component: School Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SchoolOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SchoolOutlineLogo = React.forwardRef<SVGSVGElement, SchoolOutlineLogoProps>(
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
      <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
  <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
    </svg>
  )
);

SchoolOutlineLogo.displayName = "SchoolOutlineLogo";

export const SchoolOutlineLogoMetadata = {
  id: "school-outline",
  baseId: "school-outline",
  variant: "default",
  name: "School Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SchoolOutlineLogo;
