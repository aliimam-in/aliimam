/**
 * Auto-generated logo component: Statuspage (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface StatuspageProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Statuspage = React.forwardRef<SVGSVGElement, StatuspageProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 189"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient x1="50%" y1="82.7990841%" x2="50%" y2="-5.78133944%" id="linearGradient-1">
            <stop stopColor="#2684FF" offset="0%"></stop>
            <stop stopColor="#0052CC" offset="82%"></stop>
        </linearGradient>
    </defs>
    <g>
				<circle fill="url(#linearGradient-1)" cx="128" cy="128.433426" r="59.8647801"></circle>
				<path d="M1.61622537,59.2547248 L33.7997412,97.3740064 C34.9893298,98.7728467 36.6899306,99.6365583 38.5211977,99.7719689 C40.3524648,99.9073795 42.1616074,99.3031911 43.544004,98.0945328 C95.6620856,51.3632444 160.200671,51.3632444 212.455996,98.0945328 C213.838393,99.3031911 215.647535,99.9073795 217.478802,99.7719689 C219.310069,99.6365583 221.01067,98.7728467 222.200259,97.3740064 L254.383775,59.2547248 C256.815838,56.3704526 256.463336,52.0637955 253.594627,49.6133944 C178.110901,-16.5377981 78.0263424,-16.5377981 2.40537342,49.6133944 C-0.463335731,52.0637955 -0.815837919,56.3704526 1.61622537,59.2547248 Z" fill="#2684FF"></path>
		</g>
    </svg>
  )
);

Statuspage.displayName = "Statuspage";

export const StatuspageMetadata = {
  id: "statuspage",
  baseId: "statuspage",
  variant: "default",
  name: "Statuspage",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 189",
} as const;

export default Statuspage;
