/**
 * Auto-generated logo component: Npm Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NpmIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const NpmIcon = React.forwardRef<SVGSVGElement, NpmIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 256"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
				<polygon fill="#C12127" points="0 256 0 0 256 0 256 256"></polygon>
				<polygon fill="#FFFFFF" points="48 48 208 48 208 208 176 208 176 80 128 80 128 208 48 208"></polygon>
		</g>
    </svg>
  )
);

NpmIcon.displayName = "NpmIcon";

export const NpmIconMetadata = {
  id: "npm-icon",
  baseId: "npm-icon",
  variant: "default",
  name: "Npm Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default NpmIcon;
