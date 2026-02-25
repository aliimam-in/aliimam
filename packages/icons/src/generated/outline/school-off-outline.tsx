/**
 * Auto-generated logo component: School Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SchoolOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SchoolOffOutlineLogo = React.forwardRef<SVGSVGElement, SchoolOffOutlineLogoProps>(
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
      <path d="M22 9l-10 -4l-2.136 .854m-2.864 1.146l-5 2l10 4l.697 -.279m2.878 -1.151l6.425 -2.57v6" />
  <path d="M6 10.6v5.4c0 1.657 2.686 3 6 3c2.334 0 4.357 -.666 5.35 -1.64m.65 -3.36v-3.4" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

SchoolOffOutlineLogo.displayName = "SchoolOffOutlineLogo";

export const SchoolOffOutlineLogoMetadata = {
  id: "school-off-outline",
  baseId: "school-off-outline",
  variant: "default",
  name: "School Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SchoolOffOutlineLogo;
