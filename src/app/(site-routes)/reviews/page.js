import PostReviewOne from '../../../components/PostReviewOne';
import PostReviewTwo from '../../../components/PostReviewTwo';
import PostReviewThree from '../../../components/PostReviewThree';
import styles from './reviews.module.css';
const Reviews = () => {
  return (
    <>
      <article className={`${styles.articleSection}`}>
        <div>
          <PostReviewThree />
          <PostReviewOne />
          <PostReviewTwo />
          <PostReviewOne />
          <PostReviewTwo />
        </div>
      </article>
    </>
  );
};

export default Reviews;
