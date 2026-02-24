/**
 * Auto-generated logo component: Dropbox (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DropboxLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const DropboxLogo = React.forwardRef<SVGSVGElement, DropboxLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 128 128"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#0061FE" d="M0 0h128v128H0z" /><path fill="#F7F5F2" d="M43.7 32 23.404 44.75 43.701 57.5 64 44.75 84.3 57.5l20.298-12.75L84.299 32 64.002 44.75 43.7 32Zm0 51L23.404 70.25 43.701 57.5 64 70.25 43.702 83Zm20.302-12.75L84.299 57.5l20.298 12.75L84.299 83 64.002 70.25Zm0 29.75L43.7 87.25 64 74.5l20.3 12.75L64.002 100Z" />
    </svg>
  )
);

DropboxLogo.displayName = "DropboxLogo";

export const DropboxLogoMetadata = {
  id: "dropbox",
  baseId: "dropbox",
  variant: "default",
  name: "Dropbox",
  category: "mix",
  tags: [],
  viewBox: "0 0 128 128",
} as const;

export default DropboxLogo;
