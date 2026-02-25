/**
 * Auto-generated logo component: Aerospike Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AerospikeIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const AerospikeIcon = React.forwardRef<SVGSVGElement, AerospikeIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 230"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M256,0 L256,27.4306908 L195.961336,53.8976565 L195.961336,176.97453 L256,203.727904 L256,229.907171 L27.0165602,126.865978 L0,115.372232 L27.0165602,102.983137 L256,0 Z M172.861604,63.9322684 L56.9191354,115.292244 L172.861604,166.938628 L172.861604,63.9322684 Z" fill="#C4373A"></path>
    </g>
    </svg>
  )
);

AerospikeIcon.displayName = "AerospikeIcon";

export const AerospikeIconMetadata = {
  id: "aerospike-icon",
  baseId: "aerospike-icon",
  variant: "default",
  name: "Aerospike Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 230",
} as const;

export default AerospikeIcon;
