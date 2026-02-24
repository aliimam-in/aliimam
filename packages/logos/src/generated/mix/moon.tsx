/**
 * Auto-generated logo component: Moon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoonLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const MoonLogo = React.forwardRef<SVGSVGElement, MoonLogoProps>(
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
      <defs>
        <circle id="path-1" cx="128" cy="128" r="128"></circle>
        <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="49.7893875%" id="moonRadialGradient-1">
            <stop stopColor="#4600D1" offset="0%"></stop>
            <stop stopColor="#4600D1" offset="49.2852329%"></stop>
            <stop stopColor="#35009F" offset="100%"></stop>
        </radialGradient>
        <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="49.6030859%" id="moonRadialGradient-2">
            <stop stopColor="#35019E" offset="0%"></stop>
            <stop stopColor="#320194" offset="18.7296056%"></stop>
            <stop stopColor="#220066" offset="100%"></stop>
        </radialGradient>
    </defs>
    <g>
        <g>
            <circle fill="#5805FF" cx="128" cy="128" r="128"></circle>
            <mask id="mask-2" fill="white">
                <use href="#path-1"></use>
            </mask>
            <circle fill="url(#moonRadialGradient-1)" mask="url(#mask-2)" cx="199.694484" cy="105.369165" r="128"></circle>
            <circle fill="url(#moonRadialGradient-2)" mask="url(#mask-2)" cx="275.371994" cy="82.3762376" r="128"></circle>
        </g>
    </g>
    </svg>
  )
);

MoonLogo.displayName = "MoonLogo";

export const MoonLogoMetadata = {
  id: "moon",
  baseId: "moon",
  variant: "default",
  name: "Moon",
  category: "mix",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default MoonLogo;
