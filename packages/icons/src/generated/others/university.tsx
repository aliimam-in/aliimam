/**
 * Auto-generated logo component: University (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UniversityLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UniversityLogo = React.forwardRef<SVGSVGElement, UniversityLogoProps>(
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
  <path d="M18 12h.01" />
  <path d="M18 16h.01" />
  <path d="M22 7a1 1 0 0 0-1-1h-2a2 2 0 0 1-1.143-.359L13.143 2.36a2 2 0 0 0-2.286-.001L6.143 5.64A2 2 0 0 1 5 6H3a1 1 0 0 0-1 1v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z" />
  <path d="M6 12h.01" />
  <path d="M6 16h.01" />
  <circle cx="12" cy="10" r="2" />
    </svg>
  )
);

UniversityLogo.displayName = "UniversityLogo";

export const UniversityLogoMetadata = {
  id: "university",
  baseId: "university",
  variant: "default",
  name: "University",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UniversityLogo;
