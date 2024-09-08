import Link from 'next/link';
import styles from './PostReviewThree.module.css';
import { ReviewDetailsThree } from '../app/constants/index';
import { IoDisc } from 'react-icons/io5';
const PostReviewThree = () => {
  return (
    <>
      <section className={`${styles.reviewsContainer}`}>
        {ReviewDetailsThree.map((review, index) => (
          <Link key={index} href={review.redirection}>
            <div className={`${styles.singleReview}`}>
              <div>
                <span className={`${styles.categoryLabel}`}>{review.category.toUpperCase()}</span>
                <h1 className={`${styles.reviewsHeading}`}>{review.heading}</h1>
                <p className={`${styles.reviewsParagraph}`}>{review.paragraph}</p>
                <div className={`flex items-center space-x-2`}>
                  <IoDisc className='text-PinkSpecial text-[12px]' />
                  <h4 className={`${styles.reviewsUpdateTime}`}>{review.UpdateTime}</h4>
                </div>
              </div>
              <div className='bg-neutral-400 w-full h-full'></div>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
};

export default PostReviewThree;
