/**
 * Auto-generated logo component: Dropmark (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DropmarkProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Dropmark = React.forwardRef<SVGSVGElement, DropmarkProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 348"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <path d="M128,0 C128,0 0,91.0671937 0,219.067194 C0,289.770751 57.2964427,347.067194 128,347.067194 C198.703557,347.067194 256,289.770751 256,219.067194 C256,91.0671937 128,0 128,0 Z M128,293.312253 L128,293.312253 L59.3201581,214.26087 L89.9288538,214.26087 L89.9288538,123.952569 L166.071146,123.952569 L166.071146,214.26087 L196.679842,214.26087 L128,293.312253 Z" id="path-1"></path>
    </defs>
    <g>
        <mask id="mask-2" fill="white">
            <use href="#path-1"></use>
        </mask>
        <use fill="#38DEDF" href="#path-1"></use>
    </g>
    </svg>
  )
);

Dropmark.displayName = "Dropmark";

export const DropmarkMetadata = {
  id: "dropmark",
  baseId: "dropmark",
  variant: "default",
  name: "Dropmark",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 348",
} as const;

export default Dropmark;
