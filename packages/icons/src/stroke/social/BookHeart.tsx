import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface BookHeartProps extends IconProps {
  type?: "stroke";
}

export const BookHeart: IconComponent<BookHeartProps> = React.forwardRef<
  SVGSVGElement,
  BookHeartProps
>(function BookHeart(
  {
    color = "currentColor",
    fill,
    size = 24,
    strokeWidth,
    strokeLinecap,
    strokeLinejoin,
    strokeDasharray,
    opacity,
    className,
    type = "stroke",
    ...props
  },
  forwardedRef,
) {
  if (type === "stroke") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        strokeDasharray={strokeDasharray}
        opacity={opacity}
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5ZM4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.62008 9.80003C8.4097 9.58068 8.24594 9.32099 8.13868 9.03662C8.03142 8.75225 7.98288 8.4491 7.99599 8.14546C8.00911 7.84182 8.0836 7.54398 8.21499 7.26992C8.34637 6.99586 8.53191 6.75125 8.76042 6.55087C8.98893 6.35048 9.25567 6.19847 9.54454 6.104C9.83341 6.00954 10.1384 5.97457 10.4412 6.00122C10.7439 6.02787 11.0382 6.11558 11.3061 6.25905C11.574 6.40253 11.8101 6.5988 12.0001 6.83603C12.191 6.60128 12.4273 6.40745 12.6948 6.26613C12.9624 6.12481 13.2557 6.03891 13.5572 6.01355C13.8587 5.9882 14.1622 6.02392 14.4496 6.11858C14.737 6.21324 15.0023 6.36488 15.2297 6.56445C15.4572 6.76402 15.642 7.00741 15.7732 7.28006C15.9044 7.55272 15.9792 7.84903 15.9933 8.15127C16.0073 8.45352 15.9602 8.7555 15.8549 9.03913C15.7495 9.32277 15.588 9.58224 15.3801 9.80203L12.7541 12.658C12.6604 12.7659 12.5446 12.8524 12.4147 12.9117C12.2847 12.9709 12.1435 13.0016 12.0006 13.0016C11.8577 13.0016 11.7165 12.9709 11.5865 12.9117C11.4565 12.8524 11.3408 12.7659 11.2471 12.658L8.62008 9.80003Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "stroke") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        strokeDasharray={strokeDasharray}
        opacity={opacity}
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5ZM4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.62008 9.80003C8.4097 9.58068 8.24594 9.32099 8.13868 9.03662C8.03142 8.75225 7.98288 8.4491 7.99599 8.14546C8.00911 7.84182 8.0836 7.54398 8.21499 7.26992C8.34637 6.99586 8.53191 6.75125 8.76042 6.55087C8.98893 6.35048 9.25567 6.19847 9.54454 6.104C9.83341 6.00954 10.1384 5.97457 10.4412 6.00122C10.7439 6.02787 11.0382 6.11558 11.3061 6.25905C11.574 6.40253 11.8101 6.5988 12.0001 6.83603C12.191 6.60128 12.4273 6.40745 12.6948 6.26613C12.9624 6.12481 13.2557 6.03891 13.5572 6.01355C13.8587 5.9882 14.1622 6.02392 14.4496 6.11858C14.737 6.21324 15.0023 6.36488 15.2297 6.56445C15.4572 6.76402 15.642 7.00741 15.7732 7.28006C15.9044 7.55272 15.9792 7.84903 15.9933 8.15127C16.0073 8.45352 15.9602 8.7555 15.8549 9.03913C15.7495 9.32277 15.588 9.58224 15.3801 9.80203L12.7541 12.658C12.6604 12.7659 12.5446 12.8524 12.4147 12.9117C12.2847 12.9709 12.1435 13.0016 12.0006 13.0016C11.8577 13.0016 11.7165 12.9709 11.5865 12.9117C11.4565 12.8524 11.3408 12.7659 11.2471 12.658L8.62008 9.80003Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "stroke") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        strokeDasharray={strokeDasharray}
        opacity={opacity}
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5ZM4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.61996 9.80003C8.40958 9.58068 8.24582 9.32099 8.13855 9.03662C8.03129 8.75225 7.98276 8.4491 7.99587 8.14546C8.00899 7.84182 8.08348 7.54398 8.21486 7.26992C8.34625 6.99586 8.53179 6.75125 8.7603 6.55087C8.98881 6.35048 9.25554 6.19847 9.54442 6.104C9.83329 6.00954 10.1383 5.97457 10.4411 6.00122C10.7438 6.02787 11.038 6.11558 11.306 6.25905C11.5739 6.40253 11.81 6.5988 12 6.83603C12.1909 6.60128 12.4272 6.40745 12.6947 6.26613C12.9622 6.12481 13.2555 6.03891 13.557 6.01355C13.8586 5.9882 14.1621 6.02392 14.4495 6.11858C14.7369 6.21324 15.0022 6.36488 15.2296 6.56445C15.457 6.76402 15.6419 7.00741 15.7731 7.28006C15.9043 7.55272 15.9791 7.84903 15.9932 8.15127C16.0072 8.45352 15.9601 8.7555 15.8548 9.03913C15.7494 9.32277 15.5879 9.58224 15.38 9.80203L12.754 12.658C12.6603 12.7659 12.5445 12.8524 12.4145 12.9117C12.2845 12.9709 12.1433 13.0016 12.0005 13.0016C11.8576 13.0016 11.7164 12.9709 11.5864 12.9117C11.4564 12.8524 11.3406 12.7659 11.247 12.658L8.61996 9.80003Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`BookHeart doesn't support ${type}`);
  return null;
});

BookHeart.displayName = "BookHeart";

BookHeart.metadata = {
  name: "BookHeart",
  category: "stroke/social",
  tags: ["book", "heart", "icon"],
  description: "BookHeart icon from stroke/social category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BookHeart;
