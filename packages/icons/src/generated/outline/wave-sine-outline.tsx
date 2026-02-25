/**
 * Auto-generated logo component: Wave Sine Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WaveSineOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WaveSineOutlineLogo = React.forwardRef<SVGSVGElement, WaveSineOutlineLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M21 12h-2c-.894 0 -1.662 -.857 -1.761 -2c-.296 -3.45 -.749 -6 -2.749 -6s-2.5 3.582 -2.5 8s-.5 8 -2.5 8s-2.452 -2.547 -2.749 -6c-.1 -1.147 -.867 -2 -1.763 -2h-2" />
    </svg>
  )
);

WaveSineOutlineLogo.displayName = "WaveSineOutlineLogo";

export const WaveSineOutlineLogoMetadata = {
  id: "wave-sine-outline",
  baseId: "wave-sine-outline",
  variant: "default",
  name: "Wave Sine Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WaveSineOutlineLogo;
