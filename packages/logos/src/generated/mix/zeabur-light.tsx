/**
 * Auto-generated logo component: Zeabur Light (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZeaburLightLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ZeaburLightLogo = React.forwardRef<SVGSVGElement, ZeaburLightLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 294 229"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#000" d="M114 145h179v84H0v-84h82l114-61H0V0h293v84l-179 61Z" />
  <path fill="#6300FF" d="M195 0H0v84h195V0Z" />
  <path fill="#F40" d="M293 145H115v84h178v-84Z" />
    </svg>
  )
);

ZeaburLightLogo.displayName = "ZeaburLightLogo";

export const ZeaburLightLogoMetadata = {
  id: "zeabur-light",
  baseId: "zeabur-light",
  variant: "default",
  name: "Zeabur Light",
  category: "mix",
  tags: [],
  viewBox: "0 0 294 229",
} as const;

export default ZeaburLightLogo;
