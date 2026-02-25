/**
 * Auto-generated logo component: Chart Js (default)
 * Category: library
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartJsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const ChartJs = React.forwardRef<SVGSVGElement, ChartJsProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <g clipPath="url(#clip0_2066_917)">
<path d="M21.3907 12.0655C18.0012 12.1312 18.7072 14.2521 16.3185 14.7885C13.8918 15.3334 13.5087 8.93054 11.0827 8.93054C8.65634 8.93054 8.11896 15.1502 5.08085 19.42L4.99414 19.5409L11.5077 23.2573L21.3907 17.6181V12.0655Z" fill="#36A2EB"/>
<path d="M21.3907 11.8724C20.2561 10.433 19.4865 8.77832 17.8306 8.77832C14.9004 8.77832 15.6715 13.503 12.4331 13.503C9.19433 13.503 8.85381 8.42092 5.18497 13.1982C4.01586 14.7204 3.07488 16.4177 2.33569 18.0238L11.5078 23.2575L21.3907 17.6182V11.8724Z" fill="#FFCE56"/>
<path opacity="0.8" d="M1.62451 13.8296C2.73645 10.7859 3.21633 8.32092 5.33913 8.32092C8.57756 8.32092 9.34841 17.3135 12.1246 16.3986C14.9004 15.4842 14.5918 10.6068 18.9101 10.6068C19.7321 10.6068 20.5713 11.1045 21.3908 11.9096V17.6181L11.5079 23.2573L1.62451 17.6182V13.8297V13.8296Z" fill="#FE6184"/>
<path d="M11.5 23.9643L1 17.9735V5.99108L11.5 0L22 5.99108V17.9732L11.5 23.9643ZM2.23367 17.2695L11.5 22.5568L20.7663 17.2695V6.69503L11.5 1.40773L2.23367 6.69503V17.2695Z" fill="#E7E9ED"/>
</g>
<defs>
<clipPath id="clip0_2066_917">
<rect width="21" height="24" fill="white" transform="translate(1)"/>
</clipPath>
</defs>
    </svg>
  )
);

ChartJs.displayName = "ChartJs";

export const ChartJsMetadata = {
  id: "Chart-js",
  baseId: "Chart-js",
  variant: "default",
  name: "Chart Js",
  category: "library",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartJs;
