/**
 * Auto-generated logo component: Wakatime Light (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WakatimeLightLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const WakatimeLightLogo = React.forwardRef<SVGSVGElement, WakatimeLightLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 340 340"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path stroke="#fff" strokeWidth="40" d="M170 20C87.16 20 20 87.16 20 170s67.16 150 150 150 150-67.16 150-150S252.84 20 170 20Z" clipRule="evenodd" /><path fill="#fff" stroke="#fff" strokeWidth="10" d="M190.18 213.54a7.6 7.6 0 0 1-6.74 3.09 8 8 0 0 1-1.5-.32 8 8 0 0 1-1.93-.97 8 8 0 0 1-1.67-1.56 9 9 0 0 1-.9-1.37l-8.84-14.2-8.83 14.2a7.8 7.8 0 0 1-6.78 4.26 7.7 7.7 0 0 1-6.75-4.32l-38.63-56.29a9 9 0 0 1-2.05-5.8c0-4.75 3.48-8.6 7.78-8.6a7.7 7.7 0 0 1 6.6 4.05l32.62 48.19 9.18-14.95a7.7 7.7 0 0 1 6.83-4.47c2.7 0 5.08 1.52 6.48 3.82l9.47 15.54 51.16-73.26a7.6 7.6 0 0 1 6.53-3.91c4.3 0 7.79 3.84 7.79 8.59a9 9 0 0 1-1.77 5.45l-58.05 82.83Z" />
    </svg>
  )
);

WakatimeLightLogo.displayName = "WakatimeLightLogo";

export const WakatimeLightLogoMetadata = {
  id: "wakatime-light",
  baseId: "wakatime-light",
  variant: "default",
  name: "Wakatime Light",
  category: "mix",
  tags: [],
  viewBox: "0 0 340 340",
} as const;

export default WakatimeLightLogo;
