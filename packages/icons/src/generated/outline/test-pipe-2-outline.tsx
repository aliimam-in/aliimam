/**
 * Auto-generated logo component: Test Pipe 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TestPipe2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TestPipe2OutlineLogo = React.forwardRef<SVGSVGElement, TestPipe2OutlineLogoProps>(
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
      <path d="M15 3v15a3 3 0 0 1 -6 0v-15" />
  <path d="M9 12h6" />
  <path d="M8 3h8" />
    </svg>
  )
);

TestPipe2OutlineLogo.displayName = "TestPipe2OutlineLogo";

export const TestPipe2OutlineLogoMetadata = {
  id: "test-pipe-2-outline",
  baseId: "test-pipe-2-outline",
  variant: "default",
  name: "Test Pipe 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TestPipe2OutlineLogo;
