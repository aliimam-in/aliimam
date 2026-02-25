/**
 * Auto-generated logo component: Tor Browser (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TorBrowserProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const TorBrowser = React.forwardRef<SVGSVGElement, TorBrowserProps>(
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
      <defs>
        <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="torBrowserLinearGradient-1">
            <stop stopColor="#420C5D" offset="0%"></stop>
            <stop stopColor="#951AD1" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="torBrowserLinearGradient-2">
            <stop stopColor="#420C5D" offset="0%"></stop>
            <stop stopColor="#951AD1" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g>
        <circle fill="#F2E4FF" cx="128" cy="128" r="123"></circle>
        <path d="M128.262572,232.719853 L128.262572,217.203305 C177.413095,217.061374 217.210401,177.182458 217.210401,127.996452 C217.210401,78.8139935 177.413095,38.9350779 128.262572,38.7931474 L128.262572,23.2765981 C185.982148,23.4220768 232.723402,70.244941 232.723402,127.996452 C232.723402,185.751511 185.982148,232.577923 128.262572,232.719853 Z M128.262572,178.410157 C155.985142,178.264678 178.42435,155.758053 178.42435,127.996451 C178.42435,100.238399 155.985142,77.7317735 128.262572,77.586295 L128.262572,62.073294 C164.557743,62.2152245 193.9409,91.6693465 193.9409,127.996451 C193.9409,164.327105 164.557743,193.781227 128.262572,193.923158 L128.262572,178.410157 Z M128.262572,100.859344 C143.133337,101.001275 155.1513,113.090203 155.1513,127.996451 C155.1513,142.906249 143.133337,154.995177 128.262572,155.137107 L128.262572,100.859344 Z M0,127.996452 C0,198.692022 57.30443,256 128,256 C198.692022,256 256,198.692022 256,127.996452 C256,57.30443 198.692022,0 128,0 C57.30443,0 0,57.30443 0,127.996452 Z" fill="url(#torBrowserLinearGradient-1)"></path>
        <path d="M12.5,14.5 C76.2888885,14.5 128,65.987254 128,129.5 C128,193.012746 76.2888885,244.5 12.5,244.5 L12.5,14.5 Z" fill="url(#torBrowserLinearGradient-2)" transform="translate(70.250000, 129.500000) scale(-1, 1) translate(-70.250000, -129.500000) "></path>
    </g>
    </svg>
  )
);

TorBrowser.displayName = "TorBrowser";

export const TorBrowserMetadata = {
  id: "tor-browser",
  baseId: "tor-browser",
  variant: "default",
  name: "Tor Browser",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default TorBrowser;
