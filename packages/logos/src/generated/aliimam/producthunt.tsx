/**
 * Auto-generated logo component: Producthunt (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ProducthuntProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Producthunt = React.forwardRef<SVGSVGElement, ProducthuntProps>(
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
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
            <stop stopColor="#DA552F" offset="0%"></stop>
            <stop stopColor="#D04B25" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g>
            <path d="M128,256 C198.6944,256 256,198.6944 256,128 C256,57.3056 198.6944,0 128,0 C57.3056,0 0,57.3056 0,128 C0,198.6944 57.3056,256 128,256 L128,256 Z" fill="url(#linearGradient-1)"></path>
            <path d="M96,76.8 L96,179.2 L115.2,179.2 L115.2,147.2 L144.256,147.2 C163.552,146.688 179.2,131.04 179.2,112 C179.2,92.448 163.552,76.8 144.256,76.8 L96,76.8 L96,76.8 Z M144.4928,128 L115.2,128 L115.2,96 L144.4928,96 C153.056,96 160,103.168 160,112 C160,120.832 153.056,128 144.4928,128 L144.4928,128 Z" fill="#FFFFFF"></path>
        </g>
    </g>
    </svg>
  )
);

Producthunt.displayName = "Producthunt";

export const ProducthuntMetadata = {
  id: "producthunt",
  baseId: "producthunt",
  variant: "default",
  name: "Producthunt",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default Producthunt;
