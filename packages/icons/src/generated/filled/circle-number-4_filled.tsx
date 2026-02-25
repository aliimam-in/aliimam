/**
 * Auto-generated logo component: Circle Number 4 (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleNumber4FilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleNumber4FilledLogo = React.forwardRef<SVGSVGElement, CircleNumber4FilledLogoProps>(
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10zm2 5a1 1 0 0 0 -.993 .883l-.007 .117v3h-2v-3l-.007 -.117a1 1 0 0 0 -1.986 0l-.007 .117v3l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h2v3l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-8l-.007 -.117a1 1 0 0 0 -.993 -.883z" />
    </svg>
  )
);

CircleNumber4FilledLogo.displayName = "CircleNumber4FilledLogo";

export const CircleNumber4FilledLogoMetadata = {
  id: "circle-number-4_filled",
  baseId: "circle-number-4",
  variant: "filled",
  name: "Circle Number 4",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleNumber4FilledLogo;
