/**
 * Auto-generated logo component: Circle Key (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleKeyFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleKeyFilledLogo = React.forwardRef<SVGSVGElement, CircleKeyFilledLogoProps>(
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
      <path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -20 0c0 -5.523 4.477 -10 10 -10zm2 5a3 3 0 0 0 -2.98 2.65l-.015 .174l-.005 .176l.005 .176c.019 .319 .087 .624 .197 .908l.09 .209l-3.5 3.5l-.082 .094a1 1 0 0 0 0 1.226l.083 .094l1.5 1.5l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l.083 -.094a1 1 0 0 0 0 -1.226l-.083 -.094l-.792 -.793l.585 -.585l.793 .792l.094 .083a1 1 0 0 0 1.403 -1.403l-.083 -.094l-.792 -.793l.792 -.792a3 3 0 1 0 1.293 -5.708zm0 2a1 1 0 1 1 0 2a1 1 0 0 1 0 -2" />
    </svg>
  )
);

CircleKeyFilledLogo.displayName = "CircleKeyFilledLogo";

export const CircleKeyFilledLogoMetadata = {
  id: "circle-key_filled",
  baseId: "circle-key",
  variant: "filled",
  name: "Circle Key",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleKeyFilledLogo;
