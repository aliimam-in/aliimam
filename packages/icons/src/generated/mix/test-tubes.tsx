/**
 * Auto-generated logo component: Test Tubes (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TestTubesLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TestTubesLogo = React.forwardRef<SVGSVGElement, TestTubesLogoProps>(
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
      <path d="M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2" />
  <path d="M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2" />
  <path d="M3 2h7" />
  <path d="M14 2h7" />
  <path d="M9 16H4" />
  <path d="M20 16h-5" />
    </svg>
  )
);

TestTubesLogo.displayName = "TestTubesLogo";

export const TestTubesLogoMetadata = {
  id: "test-tubes",
  baseId: "test-tubes",
  variant: "default",
  name: "Test Tubes",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TestTubesLogo;
