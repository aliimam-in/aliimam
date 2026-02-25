/**
 * Auto-generated logo component: Emmet (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EmmetProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Emmet = React.forwardRef<SVGSVGElement, EmmetProps>(
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
		<circle fill="#1C1C20" cx="127.555396" cy="128.183974" r="127.555396"></circle>
		<path d="M178.49647,124.737291 L164.290713,110.531533 L171.596531,80.4965036 L141.155622,87.3964429 L127.355743,73.5965643 L195.543379,56.5496553 L178.49647,124.737291 L178.49647,124.737291 Z" fill="#BAFFA9"></path>
		<path d="M154.955501,218.901169 L33.1918654,97.1375338 L101.379501,80.0906248 L115.17938,93.8905035 L66.4739257,106.066867 L94.073683,133.666624 L126.138107,125.954927 L118.020531,157.613473 L145.620288,185.21323 L157.796652,136.507776 L172.00241,150.713533 L154.955501,218.901169 L154.955501,218.901169 Z" fill="#7ACB16"></path>
	</g>
    </svg>
  )
);

Emmet.displayName = "Emmet";

export const EmmetMetadata = {
  id: "emmet",
  baseId: "emmet",
  variant: "default",
  name: "Emmet",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default Emmet;
