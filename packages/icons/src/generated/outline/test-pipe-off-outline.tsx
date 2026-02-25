/**
 * Auto-generated logo component: Test Pipe Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TestPipeOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TestPipeOffOutlineLogo = React.forwardRef<SVGSVGElement, TestPipeOffOutlineLogoProps>(
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
      <path d="M20 8.04a803.533 803.533 0 0 0 -4 3.96m-2 2c-1.085 1.085 -3.125 3.14 -6.122 6.164a2.857 2.857 0 0 1 -4.041 -4.04c3.018 -3 5.073 -5.037 6.163 -6.124m2 -2c.872 -.872 2.191 -2.205 3.959 -4" />
  <path d="M7 13h6" />
  <path d="M19 15l1.5 1.6m-.74 3.173a2 2 0 0 1 -2.612 -2.608" />
  <path d="M15 3l6 6" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

TestPipeOffOutlineLogo.displayName = "TestPipeOffOutlineLogo";

export const TestPipeOffOutlineLogoMetadata = {
  id: "test-pipe-off-outline",
  baseId: "test-pipe-off-outline",
  variant: "default",
  name: "Test Pipe Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TestPipeOffOutlineLogo;
