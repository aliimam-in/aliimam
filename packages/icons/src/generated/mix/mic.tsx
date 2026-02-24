/**
 * Auto-generated logo component: Mic (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixMicLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixMicLogo = React.forwardRef<SVGSVGElement, MixMicLogoProps>(
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
      <path d="M12 19v3" />
  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
  <rect x="9" y="2" width="6" height="13" rx="3" />
    </svg>
  )
);

MixMicLogo.displayName = "MixMicLogo";

export const MixMicLogoMetadata = {
  id: "mic",
  baseId: "mic",
  variant: "default",
  name: "Mic",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixMicLogo;
