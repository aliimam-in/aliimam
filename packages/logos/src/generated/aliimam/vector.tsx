/**
 * Auto-generated logo component: Vector (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VectorProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Vector = React.forwardRef<SVGSVGElement, VectorProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 301"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient x1="13.5234674%" y1="74.6786913%" x2="86.4136075%" y2="25.3053691%" id="vectorLinearGradient-1">
            <stop stopColor="#10E7FF" offset="0%"></stop>
            <stop stopColor="#33D5FF" offset="10.3%"></stop>
            <stop stopColor="#60BDFF" offset="25.5%"></stop>
            <stop stopColor="#86AAFF" offset="40.8%"></stop>
            <stop stopColor="#A39AFF" offset="56%"></stop>
            <stop stopColor="#B790FF" offset="71%"></stop>
            <stop stopColor="#C489FF" offset="85.8%"></stop>
            <stop stopColor="#C887FF" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="21.0059701%" y1="54.0325908%" x2="96.4656716%" y2="27.0469592%" id="vectorLinearGradient-2">
            <stop stopColor="#10E7FF" offset="0%"></stop>
            <stop stopColor="#33D5FF" offset="10.3%"></stop>
            <stop stopColor="#60BDFF" offset="25.5%"></stop>
            <stop stopColor="#86AAFF" offset="40.8%"></stop>
            <stop stopColor="#A39AFF" offset="56%"></stop>
            <stop stopColor="#B790FF" offset="71%"></stop>
            <stop stopColor="#C489FF" offset="85.8%"></stop>
            <stop stopColor="#C887FF" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g>
        <path d="M128,300.346456 L0,225.259843 L0,75.086614 L128,0 L256,75.086614 L256,225.259843 L128,300.346456 Z M17.8897638,214.677166 L127.748031,279.181103 L237.606299,214.677166 L237.606299,85.6692915 L128,21.1653544 L17.8897638,85.6692915 L17.8897638,214.677166 Z" fill="url(#vectorLinearGradient-1)"></path>
        <path d="M183.181103,109.354331 L138.330709,188.220473 L152.944882,213.92126 L212.409449,109.354331 L183.181103,109.354331 L183.181103,109.354331 Z M133.03937,109.354331 L88.1889765,188.220473 L102.803149,213.92126 L162.267717,109.354331 L133.03937,109.354331 L133.03937,109.354331 Z M43.5905512,109.354331 L103.055118,213.92126 L117.669291,188.220473 L72.8188975,109.354331 L43.5905512,109.354331 L43.5905512,109.354331 Z M43.5905512,109.354331 L103.055118,213.92126 L117.669291,188.220473 L72.8188975,109.354331 L43.5905512,109.354331 L43.5905512,109.354331 Z M133.03937,109.354331 L88.1889765,188.220473 L102.803149,213.92126 L162.267717,109.354331 L133.03937,109.354331 L133.03937,109.354331 Z" fill="url(#vectorLinearGradient-2)"></path>
    </g>
    </svg>
  )
);

Vector.displayName = "Vector";

export const VectorMetadata = {
  id: "vector",
  baseId: "vector",
  variant: "default",
  name: "Vector",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 301",
} as const;

export default Vector;
