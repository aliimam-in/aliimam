/**
 * Auto-generated logo component: Circle Number 9 Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleNumber9FilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleNumber9FilledLogo = React.forwardRef<SVGSVGElement, CircleNumber9FilledLogoProps>(
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10zm1 5h-2l-.15 .005a2 2 0 0 0 -1.844 1.838l-.006 .157v2l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h2v2h-2l-.007 -.117a1 1 0 0 0 -1.993 .117a2 2 0 0 0 1.85 1.995l.15 .005h2l.15 -.005a2 2 0 0 0 1.844 -1.838l.006 -.157v-6l-.005 -.15a2 2 0 0 0 -1.838 -1.844l-.157 -.006zm0 2v2h-2v-2h2z" />
    </svg>
  )
);

CircleNumber9FilledLogo.displayName = "CircleNumber9FilledLogo";

export const CircleNumber9FilledLogoMetadata = {
  id: "circle-number-9-filled",
  baseId: "circle-number-9-filled",
  variant: "default",
  name: "Circle Number 9 Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleNumber9FilledLogo;
