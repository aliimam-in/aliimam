/**
 * Auto-generated logo component: Sofa (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SofaLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SofaLogo = React.forwardRef<SVGSVGElement, SofaLogoProps>(
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
      <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
  <path d="M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" />
  <path d="M4 18v2" />
  <path d="M20 18v2" />
  <path d="M12 4v9" />
    </svg>
  )
);

SofaLogo.displayName = "SofaLogo";

export const SofaLogoMetadata = {
  id: "sofa",
  baseId: "sofa",
  variant: "default",
  name: "Sofa",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SofaLogo;
