/**
 * Auto-generated logo component: Captions Off (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CaptionsOffLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CaptionsOffLogo = React.forwardRef<SVGSVGElement, CaptionsOffLogoProps>(
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
      <path d="M10.5 5H19a2 2 0 0 1 2 2v8.5" />
  <path d="M17 11h-.5" />
  <path d="M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2" />
  <path d="m2 2 20 20" />
  <path d="M7 11h4" />
  <path d="M7 15h2.5" />
    </svg>
  )
);

CaptionsOffLogo.displayName = "CaptionsOffLogo";

export const CaptionsOffLogoMetadata = {
  id: "captions-off",
  baseId: "captions-off",
  variant: "default",
  name: "Captions Off",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CaptionsOffLogo;
