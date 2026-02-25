/**
 * Auto-generated logo component: Blend Mode Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BlendModeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BlendModeOutlineLogo = React.forwardRef<SVGSVGElement, BlendModeOutlineLogoProps>(
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
      <path d="M8 9.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0 -13 0" />
  <path d="M3 14.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0 -13 0" />
    </svg>
  )
);

BlendModeOutlineLogo.displayName = "BlendModeOutlineLogo";

export const BlendModeOutlineLogoMetadata = {
  id: "blend-mode-outline",
  baseId: "blend-mode-outline",
  variant: "default",
  name: "Blend Mode Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BlendModeOutlineLogo;
