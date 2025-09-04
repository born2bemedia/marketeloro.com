'use client';

export const PlayIcon = ({ color = 'white' }: { color?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
  >
    <path
      d="M2.32373 6.99998V4.92331C2.32373 2.34498 4.14956 1.28915 6.38373 2.57831L8.18623 3.61665L9.98873 4.65498C12.2229 5.94415 12.2229 8.05581 9.98873 9.34498L8.18623 10.3833L6.38373 11.4216C4.14956 12.7108 2.32373 11.655 2.32373 9.07665V6.99998Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
