/**
 * Auto-generated logo component: Blitzjs (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BlitzjsLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const BlitzjsLogo = React.forwardRef<SVGSVGElement, BlitzjsLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 394"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M65.062 196.687a78.803 78.803 0 0 1 62.965 31.42l64.178 85.287a5.254 5.254 0 0 1 .47 5.569l-36.994 71.675c-1.775 3.44-6.533 3.843-8.863.754L0 196.687h65.062Zm44.12-194.596L256 196.796h-65.062a78.8 78.8 0 0 1-62.965-31.42L63.795 80.089a5.254 5.254 0 0 1-.47-5.568l36.994-71.677c1.774-3.439 6.532-3.843 8.862-.753Z" fill="#6700EB" />
    </svg>
  )
);

BlitzjsLogo.displayName = "BlitzjsLogo";

export const BlitzjsLogoMetadata = {
  id: "blitzjs",
  baseId: "blitzjs",
  variant: "default",
  name: "Blitzjs",
  category: "mix",
  tags: [],
  viewBox: "0 0 256 394",
} as const;

export default BlitzjsLogo;
