/**
 * Auto-generated logo component: Circle Number 8 Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleNumber8FilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleNumber8FilledLogo = React.forwardRef<SVGSVGElement, CircleNumber8FilledLogoProps>(
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10zm1 5h-2l-.15 .005a2 2 0 0 0 -1.844 1.838l-.006 .157v2l.005 .15c.018 .236 .077 .46 .17 .667l.075 .152l.018 .03l-.018 .032c-.133 .24 -.218 .509 -.243 .795l-.007 .174v2l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h2l.15 -.005a2 2 0 0 0 1.844 -1.838l.006 -.157v-2l-.005 -.15a1.988 1.988 0 0 0 -.17 -.667l-.075 -.152l-.019 -.032l.02 -.03a2.01 2.01 0 0 0 .242 -.795l.007 -.174v-2l-.005 -.15a2 2 0 0 0 -1.838 -1.844l-.157 -.006zm0 6v2h-2v-2h2zm0 -4v2h-2v-2h2z" />
    </svg>
  )
);

CircleNumber8FilledLogo.displayName = "CircleNumber8FilledLogo";

export const CircleNumber8FilledLogoMetadata = {
  id: "circle-number-8-filled",
  baseId: "circle-number-8-filled",
  variant: "default",
  name: "Circle Number 8 Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleNumber8FilledLogo;
