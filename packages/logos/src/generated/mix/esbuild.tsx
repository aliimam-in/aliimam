/**
 * Auto-generated logo component: Esbuild (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EsbuildLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const EsbuildLogo = React.forwardRef<SVGSVGElement, EsbuildLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 256"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle fill="#FFCF00" cx="128" cy="128" r="128" /><path d="M69.285 58.715 138.571 128l-69.286 69.285-16.97-16.97L104.629 128 52.315 75.685l16.97-16.97Zm76.8 0L215.371 128l-69.286 69.285-16.97-16.97L181.429 128l-52.314-52.315 16.97-16.97Z" fill="#191919" />
    </svg>
  )
);

EsbuildLogo.displayName = "EsbuildLogo";

export const EsbuildLogoMetadata = {
  id: "esbuild",
  baseId: "esbuild",
  variant: "default",
  name: "Esbuild",
  category: "mix",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default EsbuildLogo;
