/**
 * Auto-generated logo component: Platzi (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlatziLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const PlatziLogo = React.forwardRef<SVGSVGElement, PlatziLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M10.64 1.13 2.49 9.28a3.84 3.84 0 0 0 0 5.44l8.15 8.15a3.84 3.84 0 0 0 5.44 0l2.72-2.71-2.72-2.72-2.72 2.72L5.2 12l8.16-8.16 5.44 5.44-5.44 5.44 2.72 2.72L21.5 12a3.84 3.84 0 0 0 0-5.44l-5.44-5.43a3.83 3.83 0 0 0-5.43 0z" fill="#98ca3f" />
    </svg>
  )
);

PlatziLogo.displayName = "PlatziLogo";

export const PlatziLogoMetadata = {
  id: "platzi",
  baseId: "platzi",
  variant: "default",
  name: "Platzi",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlatziLogo;
