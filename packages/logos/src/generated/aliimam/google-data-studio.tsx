/**
 * Auto-generated logo component: Google Data Studio (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GoogleDataStudioProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const GoogleDataStudio = React.forwardRef<SVGSVGElement, GoogleDataStudioProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 239"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M224.021661,173.15874 L131.06335,173.15874 C108.582501,173.15874 95.9932253,188.895334 95.9932253,205.643566 C95.9932253,221.09915 106.671629,238.128393 131.06335,238.128393 L224.021661,238.128393 L224.021661,173.15874 Z" fill="#669DF6"></path>
        <ellipse fill="#1A73E8" cx="224.021661" cy="205.587364" rx="31.9790077" ry="32.4848268"></ellipse>
        <path d="M128.028435,86.5512687 L35.0701245,86.5512687 C12.5892755,86.5512687 0,102.287863 0,119.036096 C0,134.491679 10.6784033,151.520922 35.0701245,151.520922 L128.028435,151.520922 L128.028435,86.5512687 Z" fill="#669DF6"></path>
        <ellipse fill="#1A73E8" cx="128.028435" cy="119.036096" rx="31.9790077" ry="32.4848268"></ellipse>
        <path d="M224.021661,7.10542736e-15 L131.06335,7.10542736e-15 C108.582501,7.10542736e-15 95.9932253,15.7365943 95.9932253,32.4848268 C95.9932253,47.9404105 106.671629,64.9696537 131.06335,64.9696537 L224.021661,64.9696537 L224.021661,7.10542736e-15 Z" fill="#669DF6"></path>
        <ellipse fill="#1A73E8" cx="224.021661" cy="32.4848268" rx="31.9790077" ry="32.4848268"></ellipse>
    </g>
    </svg>
  )
);

GoogleDataStudio.displayName = "GoogleDataStudio";

export const GoogleDataStudioMetadata = {
  id: "google-data-studio",
  baseId: "google-data-studio",
  variant: "default",
  name: "Google Data Studio",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 239",
} as const;

export default GoogleDataStudio;
