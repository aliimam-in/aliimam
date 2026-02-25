/**
 * Auto-generated logo component: Dropbox (default)
 * Category: software
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DropboxProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Dropbox = React.forwardRef<SVGSVGElement, DropboxProps>(
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
      <g clipPath="url(#clip0_2039_487)">
<path d="M0 0H24V24H0V0Z" fill="#0061FE"/>
<path d="M8.19381 6L4.38831 8.39062L8.19399 10.7812L12.0001 8.39062L15.8063 10.7812L19.6122 8.39062L15.8061 6L12.0004 8.39062L8.19381 6ZM8.19381 15.5625L4.38831 13.1719L8.19399 10.7812L12.0001 13.1719L8.19418 15.5625H8.19381ZM12.0004 13.1719L15.8063 10.7812L19.612 13.1719L15.8061 15.5625L12.0004 13.1719ZM12.0004 18.75L8.19381 16.3594L12.0001 13.9688L15.8063 16.3594L12.0004 18.75Z" fill="#F7F5F2"/>
</g>
<defs>
<clipPath id="clip0_2039_487">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  )
);

Dropbox.displayName = "Dropbox";

export const DropboxMetadata = {
  id: "Dropbox",
  baseId: "Dropbox",
  variant: "default",
  name: "Dropbox",
  category: "software",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Dropbox;
