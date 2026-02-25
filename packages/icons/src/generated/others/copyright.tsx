/**
 * Auto-generated logo component: Copyright (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CopyrightLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CopyrightLogo = React.forwardRef<SVGSVGElement, CopyrightLogoProps>(
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
      <circle cx="12" cy="12" r="10" />
  <path d="M14.83 14.83a4 4 0 1 1 0-5.66" />
    </svg>
  )
);

CopyrightLogo.displayName = "CopyrightLogo";

export const CopyrightLogoMetadata = {
  id: "copyright",
  baseId: "copyright",
  variant: "default",
  name: "Copyright",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CopyrightLogo;
