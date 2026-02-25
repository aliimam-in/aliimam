/**
 * Auto-generated logo component: Metronome Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MetronomeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MetronomeOutlineLogo = React.forwardRef<SVGSVGElement, MetronomeOutlineLogoProps>(
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
      <path d="M14.153 8.188l-.72 -3.236a2.493 2.493 0 0 0 -4.867 0l-3.025 13.614a2 2 0 0 0 1.952 2.434h7.014a2 2 0 0 0 1.952 -2.434l-.524 -2.357m-4.935 1.791l9 -13" />
  <path d="M19 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  )
);

MetronomeOutlineLogo.displayName = "MetronomeOutlineLogo";

export const MetronomeOutlineLogoMetadata = {
  id: "metronome-outline",
  baseId: "metronome-outline",
  variant: "default",
  name: "Metronome Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MetronomeOutlineLogo;
