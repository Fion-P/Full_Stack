import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

class ReviewItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchUser(this.props.review.user_id);
  // }

  handleDelete(id) {
    event.preventDefault();
    this.props.deleteReview(id);
  }

  handleUpdate(reviewId) {
    event.preventDefault();
    this.props.openModal("edit", reviewId);
  }

  render() {
    let review = this.props.review;
    let currentUserId = this.props.currentUserId;
    if (!review) return null;
    let date = new Date(review.created_at).toDateString();

    const reviewButtons = (review && currentUserId && currentUserId === review.user_id) ? (
      <div className="review-buttons">
        <button onClick={() => this.handleUpdate(review.id)}>Edit</button>
        <button onClick={() => this.handleDelete(review.id)}>Delete</button>
      </div>
    ) : (
        <div></div>
      )
    
    // if (!author) return null;
    return (
      <div className="review-item">
        <div className="review-head">
          <h1 className="review-author">
            <FontAwesomeIcon icon={faThumbsUp} className="thumbs-icon" /> <span>{review.author_first} {review.author_last[0]}</span> recommends this listing
          </h1>
          <h1 className ="review-date">
            {date}
          </h1>
        </div>
        <div className="review-body">
          {review.body}
        </div>
        {reviewButtons}
      </div>
    )
  }
}

export default ReviewItem;