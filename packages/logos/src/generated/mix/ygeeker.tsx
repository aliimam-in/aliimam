/**
 * Auto-generated logo component: Ygeeker (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface YgeekerLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const YgeekerLogo = React.forwardRef<SVGSVGElement, YgeekerLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <clipPath id="a"><path d="M0 0h1024v1024H0z" /></clipPath><path fill="#63c862" d="M536.359 484.569c-25.15-60.396 142.849-333.837 227.229-362.525 44.196-15.027 93.145 56.185 106.992 114.053 13.909 58.129 7.806 118.903-30.581 165.845-43.264 52.904-280.757 137.58-303.64 82.627Z" /><path fill="#ffca3d" d="M474.634 497.831c-36.492 18.111-128.758-5.131-225.151-42.057C164.575 423.249 61.32 336.983 59.942 310.149c-2.09-40.708 57.502-77.667 126.354-90.298 69.161-12.689 150.336-15.261 196.02 23.096 77.447 65.025 160.404 221.093 92.318 254.884Z" /><path fill="#4ebffe" d="M535.511 552.81c64.871 33.983 142.066 358.05 109.633 394.921-29.259 33.262-109.374 13.305-165.203-22.387-56.08-35.852-81.135-97.144-77.303-152.334 6.495-93.565 68.002-254.183 132.873-220.2Z" />
    </svg>
  )
);

YgeekerLogo.displayName = "YgeekerLogo";

export const YgeekerLogoMetadata = {
  id: "ygeeker",
  baseId: "ygeeker",
  variant: "default",
  name: "Ygeeker",
  category: "mix",
  tags: [],
  viewBox: "0 0 1024 1024",
} as const;

export default YgeekerLogo;
