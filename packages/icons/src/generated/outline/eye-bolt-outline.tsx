/**
 * Auto-generated logo component: Eye Bolt Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EyeBoltOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EyeBoltOutlineLogo = React.forwardRef<SVGSVGElement, EyeBoltOutlineLogoProps>(
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
      <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M13.1 17.936a9.28 9.28 0 0 1 -1.1 .064c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
  <path d="M19 16l-2 3h4l-2 3" />
    </svg>
  )
);

EyeBoltOutlineLogo.displayName = "EyeBoltOutlineLogo";

export const EyeBoltOutlineLogoMetadata = {
  id: "eye-bolt-outline",
  baseId: "eye-bolt-outline",
  variant: "default",
  name: "Eye Bolt Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EyeBoltOutlineLogo;
