/**
 * Auto-generated logo component: Test Pipe 2 (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TestPipe2FilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TestPipe2FilledLogo = React.forwardRef<SVGSVGElement, TestPipe2FilledLogoProps>(
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
      <path d="M16 2a1 1 0 0 1 0 2v14a4 4 0 1 1 -8 0v-14a1 1 0 1 1 0 -2zm-2 2h-4v7h4z" />
    </svg>
  )
);

TestPipe2FilledLogo.displayName = "TestPipe2FilledLogo";

export const TestPipe2FilledLogoMetadata = {
  id: "test-pipe-2_filled",
  baseId: "test-pipe-2",
  variant: "filled",
  name: "Test Pipe 2",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TestPipe2FilledLogo;
