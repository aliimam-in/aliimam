/**
 * Auto-generated logo component: Metronome (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MetronomeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MetronomeLogo = React.forwardRef<SVGSVGElement, MetronomeLogoProps>(
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
      <path d="M12 11.4V9.1" />
  <path d="m12 17 6.59-6.59" />
  <path d="m15.05 5.7-.218-.691a3 3 0 0 0-5.663 0L4.418 19.695A1 1 0 0 0 5.37 21h13.253a1 1 0 0 0 .951-1.31L18.45 16.2" />
  <circle cx="20" cy="9" r="2" />
    </svg>
  )
);

MetronomeLogo.displayName = "MetronomeLogo";

export const MetronomeLogoMetadata = {
  id: "metronome",
  baseId: "metronome",
  variant: "default",
  name: "Metronome",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MetronomeLogo;
