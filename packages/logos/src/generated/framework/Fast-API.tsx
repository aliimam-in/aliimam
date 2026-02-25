/**
 * Auto-generated logo component: Fast API (default)
 * Category: framework
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FastAPIProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const FastAPI = React.forwardRef<SVGSVGElement, FastAPIProps>(
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
      <g clipPath="url(#clip0_2066_409)">
<path d="M12 0C5.37469 0 0 5.37469 0 12C0 18.6253 5.37469 24 12 24C18.6253 24 24 18.6253 24 12C24 5.37469 18.6253 0 12 0ZM11.3747 21.6192V14.0922H7.19053L13.2025 2.38078V9.90778H17.2306L11.3747 21.6192Z" fill="#009688"/>
</g>
<defs>
<clipPath id="clip0_2066_409">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  )
);

FastAPI.displayName = "FastAPI";

export const FastAPIMetadata = {
  id: "Fast-API",
  baseId: "Fast-API",
  variant: "default",
  name: "Fast API",
  category: "framework",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FastAPI;
