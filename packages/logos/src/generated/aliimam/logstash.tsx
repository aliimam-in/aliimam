/**
 * Auto-generated logo component: Logstash (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LogstashProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Logstash = React.forwardRef<SVGSVGElement, LogstashProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 307"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M122.434516,189.21698 L0,189.21698 L0,0 L11.1304106,0 C72.6036683,0 122.434516,49.8308482 122.434516,111.304106 L122.434516,189.21698 Z" fill="#FEC514"></path>
        <path d="M116.869311,306.086291 L122.434516,306.086291 L122.434516,189.21698 L0,189.21698 C0,253.762231 52.3240602,306.086291 116.869311,306.086291" fill="#343741"></path>
        <polygon fill="#00BFB3" points="150.261099 306.086291 256 306.086291 256 189.21698 150.261099 189.21698"></polygon>
    </g>
    </svg>
  )
);

Logstash.displayName = "Logstash";

export const LogstashMetadata = {
  id: "logstash",
  baseId: "logstash",
  variant: "default",
  name: "Logstash",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 307",
} as const;

export default Logstash;
