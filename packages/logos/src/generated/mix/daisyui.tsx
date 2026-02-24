/**
 * Auto-generated logo component: Daisyui (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DaisyuiLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const DaisyuiLogo = React.forwardRef<SVGSVGElement, DaisyuiLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="512" height="256" x="256" y="670.72" fill="#1AD1A5" rx="128" /><circle cx="512" cy="353.28" r="256" fill="#fff" /><circle cx="512" cy="353.28" r="261" stroke="#000" strokeOpacity=".2" strokeWidth="10" /><circle cx="512" cy="353.28" r="114.688" fill="#FF9903" />
    </svg>
  )
);

DaisyuiLogo.displayName = "DaisyuiLogo";

export const DaisyuiLogoMetadata = {
  id: "daisyui",
  baseId: "daisyui",
  variant: "default",
  name: "Daisyui",
  category: "mix",
  tags: [],
  viewBox: "0 0 1024 1024",
} as const;

export default DaisyuiLogo;
