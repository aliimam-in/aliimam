/**
 * Auto-generated logo component: Kibana (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface KibanaProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Kibana = React.forwardRef<SVGSVGElement, KibanaProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 328"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <polygon fill="#F04E98" points="256 0 -4.7684239e-17 0 2.20275616e-13 294.78912"></polygon>
        <path d="M2.27373675e-13,122.88 L2.27373675e-13,294.78912 L122.19392,154.08128 C85.8624,134.27712 44.288,122.88 2.27373675e-13,122.88" fill="#343741"></path>
        <path d="M148.589568,170.540032 L23.200768,314.944512 L12.131328,327.683072 L250.866688,327.683072 C237.769728,263.130112 200.301568,207.496192 148.589568,170.540032" fill="#00BFB3"></path>
    </g>
    </svg>
  )
);

Kibana.displayName = "Kibana";

export const KibanaMetadata = {
  id: "kibana",
  baseId: "kibana",
  variant: "default",
  name: "Kibana",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 328",
} as const;

export default Kibana;
