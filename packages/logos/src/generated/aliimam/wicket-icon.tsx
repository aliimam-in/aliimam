/**
 * Auto-generated logo component: Wicket Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WicketIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const WicketIcon = React.forwardRef<SVGSVGElement, WicketIconProps>(
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
				<path d="M127.99828,0 C198.693805,0 256,57.3061948 256,127.99828 C256,198.693805 198.693805,256.003439 127.99828,256.003439 C57.3061948,256.003439 0,198.693805 0,127.99828 C0,57.3061948 57.3061948,0 127.99828,0" fill="#FF9925"></path>
				<polygon fill="#FFFFFF" points="79.9881805 79.9899002 79.9881805 176.013539 111.998354 176.013539 144.001646 176.013539 176.01182 176.013539 176.01182 79.9899002 144.001646 144.003366 127.99828 111.996633 111.998354 144.003366"></polygon>
		</g>
    </svg>
  )
);

WicketIcon.displayName = "WicketIcon";

export const WicketIconMetadata = {
  id: "wicket-icon",
  baseId: "wicket-icon",
  variant: "default",
  name: "Wicket Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default WicketIcon;
