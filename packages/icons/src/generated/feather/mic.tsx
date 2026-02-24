/**
 * Auto-generated logo component: Mic (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MicLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MicLogo = React.forwardRef<SVGSVGElement, MicLogoProps>(
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
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>
    </svg>
  )
);

MicLogo.displayName = "MicLogo";

export const MicLogoMetadata = {
  id: "mic",
  baseId: "mic",
  variant: "default",
  name: "Mic",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MicLogo;
