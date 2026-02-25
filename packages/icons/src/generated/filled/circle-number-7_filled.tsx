/**
 * Auto-generated logo component: Circle Number 7 (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleNumber7FilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleNumber7FilledLogo = React.forwardRef<SVGSVGElement, CircleNumber7FilledLogoProps>(
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10zm2 5h-4l-.117 .007a1 1 0 0 0 -.876 .876l-.007 .117l.007 .117a1 1 0 0 0 .876 .876l.117 .007h2.718l-1.688 6.757l-.022 .115a1 1 0 0 0 1.927 .482l.035 -.111l2 -8l.021 -.112a1 1 0 0 0 -.878 -1.125l-.113 -.006z" />
    </svg>
  )
);

CircleNumber7FilledLogo.displayName = "CircleNumber7FilledLogo";

export const CircleNumber7FilledLogoMetadata = {
  id: "circle-number-7_filled",
  baseId: "circle-number-7",
  variant: "filled",
  name: "Circle Number 7",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleNumber7FilledLogo;
