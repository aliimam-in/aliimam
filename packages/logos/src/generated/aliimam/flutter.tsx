/**
 * Auto-generated logo component: Flutter (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FlutterProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Flutter = React.forwardRef<SVGSVGElement, FlutterProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 317"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient x1="3.9517088%" y1="26.9930287%" x2="75.8970734%" y2="52.9192657%" id="linearGradient-1">
            <stop stopColor="#000000" offset="0%"></stop>
            <stop stopColor="#000000" stopOpacity="0" offset="100%"></stop>
        </linearGradient>
    </defs>
		<g>
				<polygon fill="#47C5FB" points="157.665785 0.000549356223 0.000549356223 157.665785 48.8009614 206.466197 255.267708 0.000549356223"></polygon>
				<polygon fill="#47C5FB" points="156.567183 145.396793 72.1487107 229.815265 121.132608 279.530905 169.842925 230.820587 255.267818 145.396793"></polygon>
				<polygon fill="#00569E" points="121.133047 279.531124 158.214592 316.61267 255.267159 316.61267 169.842266 230.820807"></polygon>
				<polygon fill="#00B5F8" points="71.5995742 230.364072 120.401085 181.562561 169.842046 230.821136 121.132827 279.531454"></polygon>
				<polygon fillOpacity="0.8" fill="url(#linearGradient-1)" points="121.132827 279.531454 161.692896 266.072227 165.721875 234.941308"></polygon>
		</g>
    </svg>
  )
);

Flutter.displayName = "Flutter";

export const FlutterMetadata = {
  id: "flutter",
  baseId: "flutter",
  variant: "default",
  name: "Flutter",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 317",
} as const;

export default Flutter;
