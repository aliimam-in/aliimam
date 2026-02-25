/**
 * Auto-generated logo component: Circle Letter W (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleLetterWFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleLetterWFilledLogo = React.forwardRef<SVGSVGElement, CircleLetterWFilledLogoProps>(
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m2.008 5.876l-.52 4.153l-.56 -1.4c-.319 -.799 -1.41 -.837 -1.803 -.114l-.053 .114l-.561 1.4l-.519 -4.153a1 1 0 0 0 -1 -.876l-.116 .008a1 1 0 0 0 -.868 1.116l1 8c.128 1.025 1.537 1.207 1.92 .247l1.072 -2.678l1.072 2.678c.383 .96 1.792 .778 1.92 -.247l1 -8a1 1 0 0 0 -1.984 -.248" />
    </svg>
  )
);

CircleLetterWFilledLogo.displayName = "CircleLetterWFilledLogo";

export const CircleLetterWFilledLogoMetadata = {
  id: "circle-letter-w_filled",
  baseId: "circle-letter-w",
  variant: "filled",
  name: "Circle Letter W",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleLetterWFilledLogo;
