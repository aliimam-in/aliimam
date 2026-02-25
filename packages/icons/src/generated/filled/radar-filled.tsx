/**
 * Auto-generated logo component: Radar Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RadarFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RadarFilledLogo = React.forwardRef<SVGSVGElement, RadarFilledLogoProps>(
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
      <path d="M12 10a2 2 0 0 1 1.678 .911l.053 .089h7.269l.117 .007a1 1 0 0 1 .883 .993c0 5.523 -4.477 10 -10 10a1 1 0 0 1 -1 -1v-7.269l-.089 -.053a2 2 0 0 1 -.906 -1.529l-.005 -.149a2 2 0 0 1 2 -2m9.428 -1.334a1 1 0 0 1 -1.884 .668a8 8 0 1 0 -10.207 10.218a1 1 0 0 1 -.666 1.886a10 10 0 1 1 12.757 -12.772m-4.628 -.266a1 1 0 0 1 -1.6 1.2a4 4 0 1 0 -5.6 5.6a1 1 0 0 1 -1.2 1.6a6 6 0 1 1 8.4 -8.4" />
    </svg>
  )
);

RadarFilledLogo.displayName = "RadarFilledLogo";

export const RadarFilledLogoMetadata = {
  id: "radar-filled",
  baseId: "radar-filled",
  variant: "default",
  name: "Radar Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RadarFilledLogo;
