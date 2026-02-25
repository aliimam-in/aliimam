/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TestTubesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TestTubes = React.forwardRef<SVGSVGElement, TestTubesProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
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
TestTubes.displayName = "TestTubes";
export const TestTubesMetadata = { 
  id: "test-tubes", 
  baseId: "test-tubes", 
  variant: "default", 
  name: "Test Tubes", 
  category: "medical", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TestTubes;
