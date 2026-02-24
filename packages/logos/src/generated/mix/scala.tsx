/**
 * Auto-generated logo component: Scala (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ScalaLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ScalaLogo = React.forwardRef<SVGSVGElement, ScalaLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 416"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
    <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a">
      <stop stopColor="#4F4F4F" offset="0%" />
      <stop offset="100%" />
    </linearGradient>
    <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="b">
      <stop stopColor="#C40000" offset="0%" />
      <stop stopColor="red" offset="100%" />
    </linearGradient>
  </defs>
  <path d="M0 288v-32c0-5 116-14 192-32 37 8 64 19 64 32v32c0 13-27 24-64 32-76-18-192-27-192-32" fill="url(#a)" transform="matrix(1 0 0 -1 0 544)" />
  <path d="M0 160v-32c0-5 116-14 192-32 37 8 64 19 64 32v32c0 13-27 24-64 32-76-18-192-27-192-32" fill="url(#a)" transform="matrix(1 0 0 -1 0 288)" />
  <path d="M0 224v-96c0 8 256 24 256 64v96c0-40-256-56-256-64" fill="url(#b)" transform="matrix(1 0 0 -1 0 416)" />
  <path d="M0 96V0c0 8 256 24 256 64v96c0-40-256-56-256-64" fill="url(#b)" transform="matrix(1 0 0 -1 0 160)" />
  <path d="M0 352v-96c0 8 256 24 256 64v96c0-40-256-56-256-64" fill="url(#b)" transform="matrix(1 0 0 -1 0 672)" />
    </svg>
  )
);

ScalaLogo.displayName = "ScalaLogo";

export const ScalaLogoMetadata = {
  id: "scala",
  baseId: "scala",
  variant: "default",
  name: "Scala",
  category: "mix",
  tags: [],
  viewBox: "0 0 256 416",
} as const;

export default ScalaLogo;
