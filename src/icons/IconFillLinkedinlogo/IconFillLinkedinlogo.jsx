/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconFillLinkedinlogo = ({ color = "white", className }) => {
  return (
    <svg
      className={`icon-fill-linkedinlogo ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path-3"
        d="M26.5 3.5H5.5C4.96957 3.5 4.46086 3.71071 4.08579 4.08579C3.71071 4.46086 3.5 4.96957 3.5 5.5V26.5C3.5 27.0304 3.71071 27.5391 4.08579 27.9142C4.46086 28.2893 4.96957 28.5 5.5 28.5H26.5C27.0304 28.5 27.5391 28.2893 27.9142 27.9142C28.2893 27.5391 28.5 27.0304 28.5 26.5V5.5C28.5 4.96957 28.2893 4.46086 27.9142 4.08579C27.5391 3.71071 27.0304 3.5 26.5 3.5ZM12 22C12 22.2652 11.8946 22.5196 11.7071 22.7071C11.5196 22.8946 11.2652 23 11 23C10.7348 23 10.4804 22.8946 10.2929 22.7071C10.1054 22.5196 10 22.2652 10 22V14C10 13.7348 10.1054 13.4804 10.2929 13.2929C10.4804 13.1054 10.7348 13 11 13C11.2652 13 11.5196 13.1054 11.7071 13.2929C11.8946 13.4804 12 13.7348 12 14V22ZM11 11.5C10.7033 11.5 10.4133 11.412 10.1666 11.2472C9.91997 11.0824 9.72771 10.8481 9.61418 10.574C9.50065 10.2999 9.47094 9.99834 9.52882 9.70736C9.5867 9.41639 9.72956 9.14912 9.93934 8.93934C10.1491 8.72956 10.4164 8.5867 10.7074 8.52882C10.9983 8.47094 11.2999 8.50065 11.574 8.61418C11.8481 8.72771 12.0824 8.91997 12.2472 9.16665C12.412 9.41332 12.5 9.70333 12.5 10C12.5 10.3978 12.342 10.7794 12.0607 11.0607C11.7794 11.342 11.3978 11.5 11 11.5ZM23 22C23 22.2652 22.8946 22.5196 22.7071 22.7071C22.5196 22.8946 22.2652 23 22 23C21.7348 23 21.4804 22.8946 21.2929 22.7071C21.1054 22.5196 21 22.2652 21 22V17.5C21 16.837 20.7366 16.2011 20.2678 15.7322C19.7989 15.2634 19.163 15 18.5 15C17.837 15 17.2011 15.2634 16.7322 15.7322C16.2634 16.2011 16 16.837 16 17.5V22C16 22.2652 15.8946 22.5196 15.7071 22.7071C15.5196 22.8946 15.2652 23 15 23C14.7348 23 14.4804 22.8946 14.2929 22.7071C14.1054 22.5196 14 22.2652 14 22V14C13.9993 13.7539 14.0894 13.5162 14.253 13.3324C14.4166 13.1485 14.6423 13.0315 14.8868 13.0036C15.1313 12.9758 15.3775 13.039 15.5783 13.1814C15.7791 13.3237 15.9203 13.535 15.975 13.775C16.6516 13.3163 17.4405 13.0506 18.2567 13.0064C19.073 12.9622 19.8859 13.1412 20.6081 13.5242C21.3303 13.9071 21.9346 14.4796 22.356 15.18C22.7774 15.8805 23 16.6825 23 17.5V22Z"
        fill={color}
      />
    </svg>
  );
};

IconFillLinkedinlogo.propTypes = {
  color: PropTypes.string,
};