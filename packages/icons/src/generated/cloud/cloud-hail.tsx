/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CloudHailProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CloudHail = React.forwardRef<SVGSVGElement, CloudHailProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
  <path d="M16 14v2" />
  <path d="M8 14v2" />
  <path d="M16 20h.01" />
  <path d="M8 20h.01" />
  <path d="M12 16v2" />
  <path d="M12 22h.01" />
    </svg>
  )
);
CloudHail.displayName = "CloudHail";
export const CloudHailMetadata = { id: "cloud-hail", baseId: "cloud-hail", variant: "default", name: "Cloud Hail", category: "cloud", tags: [], viewBox: "0 0 24 24" } as const;
export default CloudHail;
