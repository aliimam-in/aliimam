/**
 * Auto-generated logo component: Test Pipe Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TestPipeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TestPipeOutlineLogo = React.forwardRef<SVGSVGElement, TestPipeOutlineLogoProps>(
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
      <path d="M20 8.04l-12.122 12.124a2.857 2.857 0 1 1 -4.041 -4.04l12.122 -12.124" />
  <path d="M7 13h8" />
  <path d="M19 15l1.5 1.6a2 2 0 1 1 -3 0l1.5 -1.6" />
  <path d="M15 3l6 6" />
    </svg>
  )
);

TestPipeOutlineLogo.displayName = "TestPipeOutlineLogo";

export const TestPipeOutlineLogoMetadata = {
  id: "test-pipe-outline",
  baseId: "test-pipe-outline",
  variant: "default",
  name: "Test Pipe Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TestPipeOutlineLogo;
