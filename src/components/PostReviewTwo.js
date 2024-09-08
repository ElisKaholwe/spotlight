import Link from 'next/link';
import styles from './PostReviewTwo.module.css';
import { ReviewDetails } from '../app/constants/index';
import { IoPin } from 'react-icons/io5';
const PostReviewTwo = () => {
  const ReviewDetail = ReviewDetails.map((review, index) => (
    <>
      <Link key={index} href='/academia'>
        <div className={`${styles.singleReview}`}>
          <div className='bg-neutral-400 w-full h-full'></div>
          {/*<Image className={``} src={review.Image} quality={100} alt='Review Image' width={100} height={100} />*/}
          <div className={`flex flex-col items-start justify-between gap-[2px]`}>
            <h2 className={`${styles.reviewsBrandName}`}>{review.BrandName}</h2>
            <h1 className={`${styles.reviewsHeading}`}>{review.Heading}</h1>
            <div className='flex gap-2'>
              <h2 className={`${styles.reviewsUpdateTime}`}>{review.UpdateTime}</h2>
              <h2 className='flex justify-between items-center text-NeutralStone font-[400]  font-primary text-[12px]'>
                <IoPin />
                {review.comments}
              </h2>
            </div>
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
