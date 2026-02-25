/**
 * Auto-generated logo component: Eye Table Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EyeTableFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EyeTableFilledLogo = React.forwardRef<SVGSVGElement, EyeTableFilledLogoProps>(
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
      <path d="M20 2a1 1 0 0 1 0 2v16a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-16a1 1 0 1 1 0 -2zm-12 15l-.128 .007a1 1 0 0 0 .118 1.993l.128 -.007a1 1 0 0 0 -.118 -1.993m4 0l-.128 .007a1 1 0 0 0 .118 1.993l.128 -.007a1 1 0 0 0 -.118 -1.993m4 0l-.128 .007a1 1 0 0 0 .118 1.993l.128 -.007a1 1 0 0 0 -.118 -1.993m-6 -3h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0 -2m5 0h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0 -2m-1 -8h-4a1 1 0 1 0 0 2h1v3a1 1 0 0 0 2 0v-3h1a1 1 0 0 0 0 -2" />
    </svg>
  )
);

EyeTableFilledLogo.displayName = "EyeTableFilledLogo";

export const EyeTableFilledLogoMetadata = {
  id: "eye-table-filled",
  baseId: "eye-table-filled",
  variant: "default",
  name: "Eye Table Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EyeTableFilledLogo;
