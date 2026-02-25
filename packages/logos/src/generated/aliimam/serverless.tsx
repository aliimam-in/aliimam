/**
 * Auto-generated logo component: Serverless (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ServerlessProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Serverless = React.forwardRef<SVGSVGElement, ServerlessProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 204"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M0,161.20187 L45.311538,161.20187 L31.2732757,203.597885 L0,203.597885 L0,161.20187 Z M0,80.6009425 L72.0009468,80.6009425 L57.9640432,122.996956 L0,122.996956 L0,80.6009425 Z M0,1.47413815e-05 L98.6917145,1.47413815e-05 L84.6520934,42.39467 L0,42.39467 L0,1.47413815e-05 Z M143.348822,1.47413815e-05 L256,1.47413815e-05 L256,42.39467 L129.311918,42.39467 L143.348822,1.47413815e-05 Z M116.660364,80.6009425 L255.999593,80.6009425 L255.999593,122.996956 L102.622101,122.996956 L116.660364,80.6009425 Z M89.9706833,161.20187 L255.999321,161.20187 L255.999321,203.597885 L75.9337796,203.597885 L89.9706833,161.20187 Z" fill="#F26D61" fillRule="nonzero"></path>
    </g>
    </svg>
  )
);

Serverless.displayName = "Serverless";

export const ServerlessMetadata = {
  id: "serverless",
  baseId: "serverless",
  variant: "default",
  name: "Serverless",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 204",
} as const;

export default Serverless;
