import { Fragment } from "react";

const ReviewsList = ({ items }) => {
  return (
    <Fragment>
      <h2>Reviews</h2>
      {items && (
        <ul>
          {items.map((item) => {
            return (
              <li key={item.id}>
                <p>
                  <b>Author: {item.author}</b>
                </p>
                <p>{item.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </Fragment>
  );
};

export default ReviewsList;
