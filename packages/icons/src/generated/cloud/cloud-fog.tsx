/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CloudFogProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CloudFog = React.forwardRef<SVGSVGElement, CloudFogProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
  <path d="M16 17H7" />
  <path d="M17 21H9" />
    </svg>
  )
);
CloudFog.displayName = "CloudFog";
export const CloudFogMetadata = { 
  id: "cloud-fog", 
  baseId: "cloud-fog", 
  variant: "default", 
  name: "Cloud Fog", 
  category: "cloud", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CloudFog;
