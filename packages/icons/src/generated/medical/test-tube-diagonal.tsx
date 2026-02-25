/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TestTubeDiagonalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TestTubeDiagonal = React.forwardRef<SVGSVGElement, TestTubeDiagonalProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3" />
  <path d="m16 2 6 6" />
  <path d="M12 16H4" />
    </svg>
  )
);
TestTubeDiagonal.displayName = "TestTubeDiagonal";
export const TestTubeDiagonalMetadata = { id: "test-tube-diagonal", baseId: "test-tube-diagonal", variant: "default", name: "Test Tube Diagonal", category: "medical", tags: [], viewBox: "0 0 24 24" } as const;
export default TestTubeDiagonal;
