/**
 * Auto-generated logo component: Toml (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TomlProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Toml = React.forwardRef<SVGSVGElement, TomlProps>(
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
        <polygon fill="#9C4221" points="198.47191 0 198.47191 28.764045 224.35955 28.764045 224.35955 227.235956 198.47191 227.235956 198.47191 256 256 256 256 1.41709366e-14"></polygon>
        <polygon fill="#000000" points="64.7191012 83.4157304 64.7191012 51.7752808 191.280899 51.7752808 191.280899 83.4157304 143.820225 83.4157304 143.820225 221.483146 112.179775 221.483146 112.179775 83.4157304"></polygon>
        <polygon fill="#9C4221" points="57.5280898 0 57.5280898 28.764045 31.6404494 28.764045 31.6404494 227.235956 57.5280898 227.235956 57.5280898 256 0 256 0 0"></polygon>
    </g>
    </svg>
  )
);

Toml.displayName = "Toml";

export const TomlMetadata = {
  id: "toml",
  baseId: "toml",
  variant: "default",
  name: "Toml",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default Toml;
