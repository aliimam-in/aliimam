/**
 * Auto-generated logo component: Loom Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LoomIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const LoomIcon = React.forwardRef<SVGSVGElement, LoomIconProps>(
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
        <path d="M256,113.765147 L181.141896,113.765147 L245.972565,76.3351495 L231.735417,51.6684962 L166.904748,89.0983584 L204.326373,24.2728197 L179.659451,10.0271381 L142.237824,74.8525689 L142.237824,0 L113.761906,0 L113.761906,74.8597245 L76.3259685,10.0271381 L51.667011,24.265664 L89.0957931,89.0912028 L24.264989,51.6684962 L10.0268681,76.3279937 L74.8576993,113.757991 L0,113.757991 L0,142.235124 L74.8505437,142.235124 L10.0268681,179.664852 L24.264989,204.331774 L89.0886375,166.908798 L51.6598553,231.734067 L76.3259685,245.972565 L113.754751,181.140546 L113.754751,256 L142.231073,256 L142.231073,181.147296 L179.6527,245.972565 L204.318272,231.734067 L166.889896,166.902047 L231.720565,204.331774 L245.959064,179.664852 L181.135145,142.241874 L255.985148,142.241874 L255.985148,113.765147 L256,113.765147 Z M128,166.72923 C106.528301,166.72923 89.1244159,149.32602 89.1244159,127.853241 C89.1244159,106.380866 106.528301,88.9765765 128,88.9765765 C149.471835,88.9765765 166.875045,106.380866 166.875045,127.853241 C166.875045,149.32602 149.471835,166.72923 128,166.72923 Z" fill="#625DF5"></path>
    </g>
    </svg>
  )
);

LoomIcon.displayName = "LoomIcon";

export const LoomIconMetadata = {
  id: "loom-icon",
  baseId: "loom-icon",
  variant: "default",
  name: "Loom Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default LoomIcon;
