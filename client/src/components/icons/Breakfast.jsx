import React from 'react';
import styles from '../../styles/modal.css';

const Breakfast = () => {
  return (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      stroke="black"
      className={styles.breakfastSVG}
    >
      <title>Food</title>
      <g fill="none" fill-rule="evenodd">
        <g
          stroke="#000"
          stroke-width="1.7"
          stroke-linecap="square"
          stroke-linejoin="round"
        >
          <path d="M32.722 82.16l.006-40.967c-2.812-.533-3.878-4.095-3.878-5.603 0-.51 0 0 0 0V13.21M33.082 33.246V13.21M37.54 33.234V13.21M38.17 82.16l-.007-40.967c2.812-.533 3.878-4.095 3.878-5.603 0-.51 0 0 0 0V13.21M56.79 16.89v65.27M57.238 12.852c9.705-.333 10.876 33.5 10.68 38.5 0 0-6.19-.38-6.14 3.182V82.16" />
        </g>
      </g>
    </svg>
  );
};

export default Breakfast;
