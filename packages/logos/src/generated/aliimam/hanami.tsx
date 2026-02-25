/**
 * Auto-generated logo component: Hanami (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HanamiProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Hanami = React.forwardRef<SVGSVGElement, HanamiProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 262"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
				<polygon fillOpacity="0.65" fill="#DC3011" points="152.228422 2.78770325 255.861141 119.8427 176.588411 254.483117 23.8718053 220.596458 8.96986157 65.0758631"></polygon>
				<polygon fillOpacity="0.65" fill="#DC3011" points="176.152247 10.7228513 253.18324 146.76637 147.649492 261.982843 5.31554324 197.085121 23.0737926 41.8647358"></polygon>
				<polygon fill="#DC3011" points="127.177581 0 252.882778 92.9506108 203.335665 241.130539 46.9108503 239.735952 0 90.7121437"></polygon>
				<path d="M127.939832,79.215521 C156.512958,79.215521 179.676359,102.378922 179.676359,130.952048 C179.676359,159.525174 156.512958,182.688575 127.939832,182.688575 C99.3667066,182.688575 76.2033054,159.525174 76.2033054,130.952048 C76.2033054,102.378922 99.3667066,79.215521 127.939832,79.215521 Z M127.939832,90.3292934 C105.504575,90.3292934 87.3170778,108.51679 87.3170778,130.952048 C87.3170778,153.387305 105.504575,171.574802 127.939832,171.574802 C150.37509,171.574802 168.562587,153.387305 168.562587,130.952048 C168.562587,108.51679 150.37509,90.3292934 127.939832,90.3292934 Z M146.110467,114.641629 L152.79176,123.655665 L127.939832,154.555018 L103.159952,123.655665 L109.795641,114.641629 L146.110467,114.641629 Z" fill="#FFFFFF"></path>
		</g>
    </svg>
  )
);

Hanami.displayName = "Hanami";

export const HanamiMetadata = {
  id: "hanami",
  baseId: "hanami",
  variant: "default",
  name: "Hanami",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 262",
} as const;

export default Hanami;
