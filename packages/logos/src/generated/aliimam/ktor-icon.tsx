/**
 * Auto-generated logo component: Ktor Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface KtorIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const KtorIcon = React.forwardRef<SVGSVGElement, KtorIconProps>(
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
        <linearGradient x1="23.9648148%" y1="23.9648148%" x2="74.6407407%" y2="74.6407407%" id="ktorLinearGradient-1">
            <stop stopColor="#00AFFF" offset="29.6%"></stop>
            <stop stopColor="#5282FF" offset="69.4%"></stop>
            <stop stopColor="#945DFF" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="26.2055556%" y1="26.2055556%" x2="74.1166667%" y2="74.1166667%" id="ktorLinearGradient-2">
            <stop stopColor="#C757BC" offset="10.8%"></stop>
            <stop stopColor="#CD5CA9" offset="17.3%"></stop>
            <stop stopColor="#E8744F" offset="49.2%"></stop>
            <stop stopColor="#F88316" offset="71.6%"></stop>
            <stop stopColor="#FF8900" offset="82.3%"></stop>
        </linearGradient>
    </defs>
    <g>
        <polygon fill="url(#ktorLinearGradient-1)" points="170.666667 85.3333333 128.176988 42.8436543 85.3333333 0 40.2773333 45.056 0 85.3333333 85.3333333 170.666667"></polygon>
        <polygon fill="url(#ktorLinearGradient-2)" points="85.3333333 170.666667 127.823012 213.156346 170.666667 256 215.722667 210.944 256 170.666667 170.666667 85.3333333"></polygon>
        <polygon fill="#000000" points="170.666667 85.3333333 85.3333333 85.3333333 85.3333333 170.666667 170.666667 170.666667"></polygon>
    </g>
    </svg>
  )
);

KtorIcon.displayName = "KtorIcon";

export const KtorIconMetadata = {
  id: "ktor-icon",
  baseId: "ktor-icon",
  variant: "default",
  name: "Ktor Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default KtorIcon;
