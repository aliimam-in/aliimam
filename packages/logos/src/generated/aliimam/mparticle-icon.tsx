/**
 * Auto-generated logo component: Mparticle Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MparticleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const MparticleIcon = React.forwardRef<SVGSVGElement, MparticleIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 214"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M256,106.654043 L256,159.96213 L170.666667,213.28284 L170.666667,159.96213 L256,106.654043 Z M170.666667,106.654043 L170.666667,159.96213 L85.3333333,213.28284 L85.3333333,159.96213 L170.666667,106.654043 Z M85.3333333,106.654043 L85.3333333,159.96213 L0,213.28284 L0,159.96213 L85.3333333,106.654043 Z M256,0 L256,53.3207101 L170.666667,106.64142 L170.666667,53.3207101 L256,0 Z M170.666667,0 L170.666667,53.3207101 L85.3333333,106.64142 L85.3333333,53.3207101 L170.666667,0 Z M85.3333333,0 L85.3333333,53.3207101 L0,106.64142 L0,53.3207101 L85.3333333,0 Z" fill="#000000"></path>
    </g>
    </svg>
  )
);

MparticleIcon.displayName = "MparticleIcon";

export const MparticleIconMetadata = {
  id: "mparticle-icon",
  baseId: "mparticle-icon",
  variant: "default",
  name: "Mparticle Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 214",
} as const;

export default MparticleIcon;
