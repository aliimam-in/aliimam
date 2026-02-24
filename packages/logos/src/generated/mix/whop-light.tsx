/**
 * Auto-generated logo component: Whop Light (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WhopLightLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const WhopLightLogo = React.forwardRef<SVGSVGElement, WhopLightLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 383.2 196.4"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
	<path fill="#FFFFFF" d="M60.9,0C35.7,0,18.4,11.1,5.2,23.5c0,0-5.3,5-5.2,5.2l55.2,55.2l55.2-55.2C99.9,14.3,80.2,0,60.9,0z" />
	<path fill="#FFFFFF" d="M197.2,0c-25.2,0-42.5,11.1-55.7,23.5c0,0-4.8,4.9-5.1,5.2L68.2,96.9l55.1,55.1L246.6,28.7
		C236.1,14.3,216.5,0,197.2,0z" />
	<path fill="#FFFFFF" d="M333.8,0c-25.2,0-42.5,11.1-55.7,23.5c0,0-5,4.9-5.2,5.2L136.4,165.2l14.4,14.4c22.3,22.3,58.9,22.3,81.3,0
		L383,28.7h0.2C372.8,14.3,353.1,0,333.8,0z" />
</g>
    </svg>
  )
);

WhopLightLogo.displayName = "WhopLightLogo";

export const WhopLightLogoMetadata = {
  id: "whop-light",
  baseId: "whop-light",
  variant: "default",
  name: "Whop Light",
  category: "mix",
  tags: [],
  viewBox: "0 0 383.2 196.4",
} as const;

export default WhopLightLogo;
