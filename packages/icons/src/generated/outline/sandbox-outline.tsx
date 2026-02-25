/**
 * Auto-generated logo component: Sandbox Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SandboxOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SandboxOutlineLogo = React.forwardRef<SVGSVGElement, SandboxOutlineLogoProps>(
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
      <path d="M19.953 8.017l1.047 6.983v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-2l1.245 -8.297a2 2 0 0 1 1.977 -1.703h3.778" />
  <path d="M3 15h18" />
  <path d="M13 3l5.5 1.5" />
  <path d="M15.75 3.75l-2 7" />
  <path d="M7 10.5c1.667 -.667 3.333 -.667 5 0c1.667 .667 3.333 .667 5 0" />
    </svg>
  )
);

SandboxOutlineLogo.displayName = "SandboxOutlineLogo";

export const SandboxOutlineLogoMetadata = {
  id: "sandbox-outline",
  baseId: "sandbox-outline",
  variant: "default",
  name: "Sandbox Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SandboxOutlineLogo;
