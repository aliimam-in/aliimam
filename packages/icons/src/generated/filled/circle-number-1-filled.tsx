/**
 * Auto-generated logo component: Circle Number 1 Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleNumber1FilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleNumber1FilledLogo = React.forwardRef<SVGSVGElement, CircleNumber1FilledLogoProps>(
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10zm.994 5.886c-.083 -.777 -1.008 -1.16 -1.617 -.67l-.084 .077l-2 2l-.083 .094a1 1 0 0 0 0 1.226l.083 .094l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l.293 -.293v5.586l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-8l-.006 -.114z" />
    </svg>
  )
);

CircleNumber1FilledLogo.displayName = "CircleNumber1FilledLogo";

export const CircleNumber1FilledLogoMetadata = {
  id: "circle-number-1-filled",
  baseId: "circle-number-1-filled",
  variant: "default",
  name: "Circle Number 1 Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleNumber1FilledLogo;
