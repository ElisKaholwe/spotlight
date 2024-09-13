import Link from 'next/link';
import styles from './PostReviewTwo.module.css';
import { ReviewDetails } from '../app/constants/index';
const PostReviewTwo = () => {
  const ReviewDetail = ReviewDetails.map((review, index) => (
    <>
      <Link key={index} href='/academia'>
        <div className={`${styles.singleReview}`}>
          <div className='bg-neutral-400 w-full h-full'></div>
          <div className={`flex flex-col items-start gap-[2px]`}>
            <h2 className={`${styles.reviewsBrandName}`}>{review.BrandName}</h2>
            <h1 className={`${styles.reviewsHeading}`}>{review.Heading}</h1>
          </div>
        </div>
      </Link>
    </>
  ));
  const reviewsCategoryHeader = 'JOBS & INTERVIEWS';
  return (
    <>
      <article className={` flex flex-col w-screen items-center py-[1em]`}>
        <h1
          className={`text-transparent bg-clip-text bg-gradient-to-tr from-purple-800 to-pink-700 text-[1.25rem] font-[600] font-primary`}>
          {reviewsCategoryHeader}
        </h1>
        <div className={`${styles.reviewsContainer}`}>{ReviewDetail}</div>
      </article>
    </>
  );
};

export default PostReviewTwo;
