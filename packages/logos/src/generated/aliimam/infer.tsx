/**
 * Auto-generated logo component: Infer (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface InferProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Infer = React.forwardRef<SVGSVGElement, InferProps>(
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
		<path d="M256,128 C256,198.6925 198.6925,256 128,256 C57.3075,256 0,198.6925 0,128 C0,57.3075 57.3075,0 128,0 C198.6925,0 256,57.3075 256,128" fill="#7D29E4"></path>
		<path d="M169.888,125.664 L119.7965,125.664 L119.7965,63.2395 C119.7965,60.359 118.3835,58.0235 114.5805,58.0235 C110.968,58.0235 109.365,60.359 109.365,63.2395 L109.365,193.847 C109.365,196.7275 110.7775,199.063 114.5805,199.063 C118.1935,199.063 119.7965,196.7275 119.7965,193.847 L119.7965,136.095 L169.888,136.095 C172.7685,136.095 175.1035,134.6825 175.1035,130.8795 C175.1035,127.2665 172.7685,125.664 169.888,125.664" fill="#FFFFFF"></path>
	</g>
    </svg>
  )
);

Infer.displayName = "Infer";

export const InferMetadata = {
  id: "infer",
  baseId: "infer",
  variant: "default",
  name: "Infer",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default Infer;
