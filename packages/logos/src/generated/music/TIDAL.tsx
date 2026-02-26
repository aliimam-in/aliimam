/**
 * Auto-generated logo component: TIDAL (default)
 * Category: music
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TIDALProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const TIDAL = React.forwardRef<SVGSVGElement, TIDALProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 28"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <g filter="url(#filter0_d_2066_1182)">
<g clipPath="url(#clip0_2066_1182)">
<path d="M6.01396 6.003L4.01196 8.006L6.00197 9.997C7.09528 11.0909 8.00157 11.988 8.01596 11.988C8.02795 11.988 8.93424 11.0909 10.0299 9.997L12.02 8.006L14.01 9.997L16 11.988L13.998 13.991L11.996 15.994L13.998 17.997L16 20L18.002 17.997L20.004 15.994L18.0068 13.9958L16.012 12L18.0092 10.0018L20.004 8.006L22.0012 10.0018L23.996 12L25.998 9.997L28 7.994L25.998 5.991L23.996 3.98801L21.994 5.991L19.992 7.994L17.9948 5.9958L16 4L14.0028 5.9958L12.008 7.994L10.0108 5.9958L8.01596 4L6.01396 6.003Z" fill="currentColor"/>
</g>
</g>
<defs>
<filter id="filter0_d_2066_1182" x="0" y="0" width="32" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2066_1182"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2066_1182" result="shape"/>
</filter>
<clipPath id="clip0_2066_1182">
<rect width="24" height="16" fill="white" transform="translate(4 4)"/>
</clipPath>
</defs>
    </svg>
  )
);

TIDAL.displayName = "TIDAL";

export const TIDALMetadata = {
  id: "TIDAL",
  baseId: "TIDAL",
  variant: "default",
  name: "TIDAL",
  category: "music",
  tags: [],
  viewBox: "0 0 32 28",
} as const;

export default TIDAL;
