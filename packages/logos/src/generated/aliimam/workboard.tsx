/**
 * Auto-generated logo component: Workboard (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WorkboardProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Workboard = React.forwardRef<SVGSVGElement, WorkboardProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 256"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
		<path d="M256,128 C256,198.692 198.692,256 128,256 C57.308,256 0,198.692 0,128 C0,57.308 57.308,0 128,0 C198.692,0 256,57.308 256,128" fill="#51BBD6"></path>
		<path d="M101.9803,110.0758 L101.9803,75.4138 L157.7963,94.1468 L101.9803,110.0758 Z M157.7963,164.7908 L101.9803,181.7018 L101.9803,146.8228 L157.7963,164.7908 Z M194.7283,81.6958 L101.9803,48.6668 L101.9803,32.5948 L76.3803,32.5948 L76.3803,223.5458 L101.9803,223.5458 L101.9803,208.6848 L194.7283,180.3188 L194.7283,154.7188 L126.3213,129.1188 L194.7283,107.7158 L194.7283,81.6958 Z" fill="#FFFFFF"></path>
	</g>
    </svg>
  )
);

Workboard.displayName = "Workboard";

export const WorkboardMetadata = {
  id: "workboard",
  baseId: "workboard",
  variant: "default",
  name: "Workboard",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default Workboard;
