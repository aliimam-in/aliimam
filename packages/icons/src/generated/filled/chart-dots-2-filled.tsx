/**
 * Auto-generated logo component: Chart Dots 2 Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartDots2FilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartDots2FilledLogo = React.forwardRef<SVGSVGElement, ChartDots2FilledLogoProps>(
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
      <path d="M3 2a1 1 0 0 1 1 1v17h17a1 1 0 0 1 .993 .883l.007 .117a1 1 0 0 1 -1 1h-18a1 1 0 0 1 -1 -1v-18a1 1 0 0 1 1 -1m18.97 .757a1 1 0 0 1 -.727 1.213l-5.256 1.314a3 3 0 0 1 -.55 1.465l1.768 2.358a3.003 3.003 0 0 1 3.795 2.893a3 3 0 0 1 -5.436 1.751l-3.57 1.428a3 3 0 0 1 -5.994 -.179l.005 -.176a3 3 0 0 1 5.43 -1.576l3.57 -1.428l.015 -.17c.06 -.518 .253 -.996 .542 -1.4l-1.767 -2.357a3.003 3.003 0 0 1 -3.795 -2.893l.005 -.176a3 3 0 0 1 5.497 -1.48l5.255 -1.314a1 1 0 0 1 1.213 .727" />
    </svg>
  )
);

ChartDots2FilledLogo.displayName = "ChartDots2FilledLogo";

export const ChartDots2FilledLogoMetadata = {
  id: "chart-dots-2-filled",
  baseId: "chart-dots-2-filled",
  variant: "default",
  name: "Chart Dots 2 Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartDots2FilledLogo;
