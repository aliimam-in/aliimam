/**
 * Auto-generated logo component: School (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SchoolLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SchoolLogo = React.forwardRef<SVGSVGElement, SchoolLogoProps>(
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
      <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
  <path d="M18 5v16" />
  <path d="m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6" />
  <path d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11" />
  <path d="M6 5v16" />
  <circle cx="12" cy="9" r="2" />
    </svg>
  )
);

SchoolLogo.displayName = "SchoolLogo";

export const SchoolLogoMetadata = {
  id: "school",
  baseId: "school",
  variant: "default",
  name: "School",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SchoolLogo;
