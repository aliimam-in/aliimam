/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TestTubeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TestTube = React.forwardRef<SVGSVGElement, TestTubeProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2" />
  <path d="M8.5 2h7" />
  <path d="M14.5 16h-5" />
    </svg>
  )
);
TestTube.displayName = "TestTube";
export const TestTubeMetadata = { id: "test-tube", baseId: "test-tube", variant: "default", name: "Test Tube", category: "medical", tags: [], viewBox: "0 0 24 24" } as const;
export default TestTube;
