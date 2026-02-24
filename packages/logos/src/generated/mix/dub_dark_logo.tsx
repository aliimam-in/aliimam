/**
 * Auto-generated logo component: Dub (dark_logo)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DubDarkLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const DubDarkLogo = React.forwardRef<SVGSVGElement, DubDarkLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M32 64c17.673 0 32-14.327 32-32 0-11.844-6.435-22.186-16-27.719V48h-8v-2.14A15.9 15.9 0 0 1 32 48c-8.837 0-16-7.163-16-16s7.163-16 16-16c2.914 0 5.647.78 8 2.14V1.008A32 32 0 0 0 32 0C14.327 0 0 14.327 0 32s14.327 32 32 32" fill="#fff" />
    </svg>
  )
);

DubDarkLogo.displayName = "DubDarkLogo";

export const DubDarkLogoMetadata = {
  id: "dub_dark_logo",
  baseId: "dub",
  variant: "dark_logo",
  name: "Dub",
  category: "mix",
  tags: [],
  viewBox: "0 0 64 64",
} as const;

export default DubDarkLogo;
