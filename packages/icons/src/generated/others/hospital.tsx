/**
 * Auto-generated logo component: Hospital (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HospitalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HospitalLogo = React.forwardRef<SVGSVGElement, HospitalLogoProps>(
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
      <path d="M12 7v4" />
  <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
  <path d="M14 9h-4" />
  <path d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" />
  <path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16" />
    </svg>
  )
);

HospitalLogo.displayName = "HospitalLogo";

export const HospitalLogoMetadata = {
  id: "hospital",
  baseId: "hospital",
  variant: "default",
  name: "Hospital",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HospitalLogo;
