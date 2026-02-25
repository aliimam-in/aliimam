/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TestPipe2FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TestPipe2Filled = React.forwardRef<SVGSVGElement, TestPipe2FilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M16 2a1 1 0 0 1 0 2v14a4 4 0 1 1 -8 0v-14a1 1 0 1 1 0 -2zm-2 2h-4v7h4z" />
    </svg>
  )
);
TestPipe2Filled.displayName = "TestPipe2Filled";
export const TestPipe2FilledMetadata = { 
  id: "test-pipe-2_filled", 
  baseId: "test-pipe-2", 
  variant: "filled", 
  name: "Test Pipe 2", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TestPipe2Filled;
