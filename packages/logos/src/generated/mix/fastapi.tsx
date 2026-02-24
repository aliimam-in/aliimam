/**
 * Auto-generated logo component: Fastapi (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FastapiLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const FastapiLogo = React.forwardRef<SVGSVGElement, FastapiLogoProps>(
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
      <path d="M128 0C57.33 0 0 57.33 0 128s57.33 128 128 128 128-57.33 128-128S198.67 0 128 0Zm-6.67 230.605v-80.288H76.699l64.128-124.922v80.288h42.966L121.33 230.605Z" fill="#009688" />
    </svg>
  )
);

FastapiLogo.displayName = "FastapiLogo";

export const FastapiLogoMetadata = {
  id: "fastapi",
  baseId: "fastapi",
  variant: "default",
  name: "Fastapi",
  category: "mix",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default FastapiLogo;
