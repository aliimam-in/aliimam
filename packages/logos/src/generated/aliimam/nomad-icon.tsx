/**
 * Auto-generated logo component: Nomad Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NomadIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const NomadIcon = React.forwardRef<SVGSVGElement, NomadIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 296"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M128.043941,2.84217094e-14 L0,73.8647442 L0,221.638174 L127.956059,295.502918 L256,221.638174 L256,73.8647442 L128.043941,2.84217094e-14 Z M185.167182,162.581531 L151.069001,182.267079 L109.852386,159.725369 L109.852386,206.830072 L71.1404051,231.393066 L71.1404051,132.965328 L101.899073,114.158599 L144.521799,136.612427 L144.521799,88.541023 L185.167182,64.1098524 L185.167182,162.581531 Z" fill="#00CA8E"></path>
    </g>
    </svg>
  )
);

NomadIcon.displayName = "NomadIcon";

export const NomadIconMetadata = {
  id: "nomad-icon",
  baseId: "nomad-icon",
  variant: "default",
  name: "Nomad Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 296",
} as const;

export default NomadIcon;
