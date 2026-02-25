/**
 * Auto-generated logo component: Lemon Squeezy (default)
 * Category: software
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LemonSqueezyProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const LemonSqueezy = React.forwardRef<SVGSVGElement, LemonSqueezyProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M8.93899 14.7305L15.3772 17.7071C16.1752 18.0762 16.7385 18.6957 17.0427 19.4062C17.812 21.2056 16.7605 23.0459 15.1098 23.7078C13.4588 24.3693 11.6992 23.9436 10.8992 22.0724L8.09723 15.5028C7.88011 14.9936 8.42554 14.4932 8.93899 14.7305ZM9.32491 12.8037L15.9709 10.2914C18.1797 9.45643 20.5924 11.0362 20.5599 13.3317C20.5593 13.3617 20.5588 13.3916 20.5581 13.4218C20.5103 15.6571 18.1647 17.1595 16.0044 16.3687L9.3312 13.9263C8.79888 13.7315 8.79495 13.004 9.32491 12.8037ZM8.95285 11.9335L15.4861 9.15746C17.6571 8.23488 18.208 5.46596 16.5077 3.86608C16.4855 3.84505 16.4631 3.82415 16.4406 3.80338C14.7735 2.25606 12.0178 2.80086 11.0688 4.83891L8.13705 11.1356C7.90314 11.6377 8.4318 12.1548 8.95285 11.9335ZM7.27156 10.8365L9.64684 4.32356C9.94133 3.516 9.88678 2.69246 9.58233 1.98189C8.81138 0.18324 6.72351 -0.397353 5.07303 0.265492C3.42282 0.928594 2.49033 2.43453 3.29196 4.30503L6.11224 10.8675C6.33094 11.376 7.08224 11.3559 7.27156 10.8365Z" fill="#FFC233"/>
    </svg>
  )
);

LemonSqueezy.displayName = "LemonSqueezy";

export const LemonSqueezyMetadata = {
  id: "Lemon-Squeezy",
  baseId: "Lemon-Squeezy",
  variant: "default",
  name: "Lemon Squeezy",
  category: "software",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LemonSqueezy;
