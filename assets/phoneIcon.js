const PhoneSvg = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    className="inline-block"
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.988 2.988A1.667 1.667 0 0 0 2.5 4.167V5c0 6.903 5.597 12.5 12.5 12.5h.833a1.666 1.666 0 0 0 1.667-1.667v-2.732a.834.834 0 0 0-.57-.791l-3.744-1.248a.833.833 0 0 0-1.008.418l-.942 1.88a9.202 9.202 0 0 1-4.597-4.596l1.881-.941a.833.833 0 0 0 .418-1.009L7.69 3.07a.833.833 0 0 0-.79-.57H4.167c-.442 0-.866.176-1.179.488Z"
    />
  </svg>
);
export default PhoneSvg;
