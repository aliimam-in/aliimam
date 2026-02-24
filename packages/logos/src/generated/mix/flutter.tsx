/**
 * Auto-generated logo component: Flutter (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FlutterLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const FlutterLogo = React.forwardRef<SVGSVGElement, FlutterLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 317"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
    <linearGradient x1="4%" y1="27%" x2="75.9%" y2="52.9%" id="a">
      <stop offset="0%" />
      <stop stopOpacity="0" offset="100%" />
    </linearGradient>
  </defs>
  <path fill="#47C5FB" d="M158 0 0 158l49 48L255 0zM157 145l-85 85 49 50 49-49 85-86z" />
  <path fill="#00569E" d="m121 280 37 37h97l-85-86z" />
  <path fill="#00B5F8" d="m72 230 48-48 50 49-49 49z" />
  <path fillOpacity=".8" fill="url(#a)" d="m121 280 41-14 4-31z" />
    </svg>
  )
);

FlutterLogo.displayName = "FlutterLogo";

export const FlutterLogoMetadata = {
  id: "flutter",
  baseId: "flutter",
  variant: "default",
  name: "Flutter",
  category: "mix",
  tags: [],
  viewBox: "0 0 256 317",
} as const;

export default FlutterLogo;
