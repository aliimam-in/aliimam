/**
 * Auto-generated logo component: Mic (default)
 * Category: others
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
      <path d="M12 19v3" />
  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
  <rect x="9" y="2" width="6" height="13" rx="3" />
    </svg>
  )
);

MicLogo.displayName = "MicLogo";

export const MicLogoMetadata = {
  id: "mic",
  baseId: "mic",
  variant: "default",
  name: "Mic",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MicLogo;
