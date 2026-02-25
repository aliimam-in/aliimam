/**
 * Auto-generated logo component: Wave Saw Tool Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WaveSawToolOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WaveSawToolOutlineLogo = React.forwardRef<SVGSVGElement, WaveSawToolOutlineLogoProps>(
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
      <path d="M3 12h5l4 8v-16l4 8h5" />
    </svg>
  )
);

WaveSawToolOutlineLogo.displayName = "WaveSawToolOutlineLogo";

export const WaveSawToolOutlineLogoMetadata = {
  id: "wave-saw-tool-outline",
  baseId: "wave-saw-tool-outline",
  variant: "default",
  name: "Wave Saw Tool Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WaveSawToolOutlineLogo;
