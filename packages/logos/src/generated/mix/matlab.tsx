/**
 * Auto-generated logo component: Matlab (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MatlabLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const MatlabLogo = React.forwardRef<SVGSVGElement, MatlabLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <linearGradient id="a" x1="22.645" x2="26.757" y1="10.881" y2="23.854" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#4adddf" /><stop offset=".699" stopColor="#3f5352" /><stop offset=".863" stopColor="#442729" /></linearGradient><path fill="url(#a)" d="m21 27-7-6s1-1.5 2.5-3 2.736-1.852 4.5-3c3.511-2.284 6.5-12 11-12L21 27z" /><linearGradient id="b" x1="1" x2="37.775" y1="27.033" y2="27.033" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#4adddf" /><stop offset=".792" stopColor="#3f5352" /><stop offset="1" stopColor="#442729" /></linearGradient><path fill="url(#b)" d="M11 33.066 1 26l13-5 7.277 5.465L14 32.066z" /><linearGradient id="c" x1="11" x2="47" y1="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset=".206" stopColor="#53140f" /><stop offset=".3" stopColor="#84360f" /><stop offset=".413" stopColor="#b85b10" /><stop offset=".511" stopColor="#df7610" /><stop offset=".59" stopColor="#f68710" /><stop offset=".639" stopColor="#ff8d10" /><stop offset=".729" stopColor="#fd8a10" /><stop offset=".8" stopColor="#f58010" /><stop offset=".865" stopColor="#e86f10" /><stop offset=".925" stopColor="#d65811" /><stop offset=".982" stopColor="#c03a11" /><stop offset="1" stopColor="#b72f11" /></linearGradient><path fill="url(#c)" d="M32 3c5 0 13 27 15 34 0 0-7.017-6.63-11-6s-5.47 6.548-9.725 10.756C23.5 44.5 21 45 21 45s-.206-8.124-5-11c-2.5-1.5-5-1-5-1s6.049-2.901 9.474-8.174S28.5 3 32 3z" />
    </svg>
  )
);

MatlabLogo.displayName = "MatlabLogo";

export const MatlabLogoMetadata = {
  id: "matlab",
  baseId: "matlab",
  variant: "default",
  name: "Matlab",
  category: "mix",
  tags: [],
  viewBox: "0 0 48 48",
} as const;

export default MatlabLogo;
