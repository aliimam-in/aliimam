/**
 * Auto-generated logo component: Chroma (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChromaProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Chroma = React.forwardRef<SVGSVGElement, ChromaProps>(
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
        <ellipse fill="#FFDE2D" cx="170.666795" cy="81.9198362" rx="85.3332053" ry="81.9198362"></ellipse>
        <ellipse fill="#327EFF" cx="85.3332053" cy="81.9198362" rx="85.3332053" ry="81.9198362"></ellipse>
        <path d="M170.666795,81.9199642 C170.666795,127.163394 132.461431,163.83916 85.3330773,163.83916 L85.3330773,81.9199642 L170.666795,81.9199642 Z M85.3332053,81.9198362 C85.3332053,36.6767906 123.538185,8.95998209e-05 170.666795,8.95998209e-05 L170.666795,81.9198362 L85.3332053,81.9198362 Z" fill="#FF6446"></path>
    </g>
    </svg>
  )
);

Chroma.displayName = "Chroma";

export const ChromaMetadata = {
  id: "chroma",
  baseId: "chroma",
  variant: "default",
  name: "Chroma",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 164",
} as const;

export default Chroma;
