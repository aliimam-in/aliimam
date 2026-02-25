/**
 * Auto-generated logo component: Dropbox (default)
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
      viewBox="0 0 256 218"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="#0061FF">
				<polygon points="63.9945638 0 0 40.7712563 63.9945638 81.5425125 128 40.7712563"></polygon>
				<polygon points="192.000442 0 128 40.7750015 192.000442 81.5500031 256.000885 40.7750015"></polygon>
				<polygon points="0 122.321259 63.9945638 163.092516 128 122.321259 63.9945638 81.5500031"></polygon>
				<polygon points="192 81.5500031 128 122.324723 192 163.099442 256 122.324723"></polygon>
				<polygon points="64 176.771256 128.005436 217.542513 192 176.771256 128.005436 136"></polygon>
		</g>
    </svg>
  )
);

Dropbox.displayName = "Dropbox";

export const DropboxMetadata = {
  id: "dropbox",
  baseId: "dropbox",
  variant: "default",
  name: "Dropbox",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 218",
} as const;

export default Dropbox;
