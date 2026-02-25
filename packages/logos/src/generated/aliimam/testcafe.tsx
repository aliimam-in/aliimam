/**
 * Auto-generated logo component: Testcafe (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TestcafeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Testcafe = React.forwardRef<SVGSVGElement, TestcafeProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 164"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <polygon fill="#404142" points="158.898436 109.30245 150.072263 118.40871 185.383786 118.40871 220.695309 150.290868 35.3115227 150.290868 70.6230453 118.40871 97.1083952 118.40871 88.2685595 109.30245 61.7968725 109.30245 0 163.953675 256 163.953675 194.209959 109.30245"></polygon>
        <polygon fill="#37B5E5" points="237.425415 22.0790948 215.462454 0 123.238512 92.7567914 88.1114373 57.4179431 66.1553077 79.5038693 123.245343 136.921812 237.425415 22.0859262"></polygon>
    </g>
    </svg>
  )
);

Testcafe.displayName = "Testcafe";

export const TestcafeMetadata = {
  id: "testcafe",
  baseId: "testcafe",
  variant: "default",
  name: "Testcafe",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 164",
} as const;

export default Testcafe;
