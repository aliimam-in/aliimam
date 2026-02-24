/**
 * Auto-generated logo component: Stethoscope (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface StethoscopeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const StethoscopeLogo = React.forwardRef<SVGSVGElement, StethoscopeLogoProps>(
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
      <path d="M11 2v2" />
  <path d="M5 2v2" />
  <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
  <path d="M8 15a6 6 0 0 0 12 0v-3" />
  <circle cx="20" cy="10" r="2" />
    </svg>
  )
);

StethoscopeLogo.displayName = "StethoscopeLogo";

export const StethoscopeLogoMetadata = {
  id: "stethoscope",
  baseId: "stethoscope",
  variant: "default",
  name: "Stethoscope",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default StethoscopeLogo;
