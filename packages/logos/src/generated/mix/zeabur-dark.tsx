/**
 * Auto-generated logo component: Zeabur Dark (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZeaburDarkLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ZeaburDarkLogo = React.forwardRef<SVGSVGElement, ZeaburDarkLogoProps>(
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
      <path fill="#fff" d="M114 145h179v84H0v-84h82l114-61H0V0h293v84l-179 61Z" />
  <path fill="#6300FF" d="M195 0H0v84h195V0Z" />
  <path fill="#F40" d="M293 145H115v84h178v-84Z" />
    </svg>
  )
);

ZeaburDarkLogo.displayName = "ZeaburDarkLogo";

export const ZeaburDarkLogoMetadata = {
  id: "zeabur-dark",
  baseId: "zeabur-dark",
  variant: "default",
  name: "Zeabur Dark",
  category: "mix",
  tags: [],
  viewBox: "0 0 294 229",
} as const;

export default ZeaburDarkLogo;
