// Imported Styles,Images,Components and Everything else
import styles from './PostReviewOne.module.css';
import Link from 'next/link';
import { ReviewDetailsOne } from '../app/constants/index';
import { IoPin } from 'react-icons/io5';

const PostReviewOne = () => {
  const ReviewDetail = ReviewDetailsOne.map((review) => (
    <>
      <Link href='/blog'>
        <div key={review.id} className={`${styles.singleReview}`}>
          {/* For an Image Fetched Locally (from the public directory-it is not necessary  to define the width and height property width={100} height={100}) */}
          {/*<Image className={`border border-red-500`} width={60} height={60} src={review.Image} quality={100} alt='Review Image' />*/}
          <div className='bg-neutral-400 w-full h-[80%]'></div>
          <div>
            <h2 className={`${styles.BrandName}`}>{review.BrandName}</h2>
            <h3 className={`${styles.updateTime}`}> Updated {review.UpdateTime}</h3>
            <h1 className={`${styles.Heading}`}>{review.Heading}</h1>
            <div className='flex gap-2'>
              <h4 className={`flex gap-[.275em] items-center text-NeutralWhite font-[500] font-primary text-[12px] `}>
                #{review.category.toUpperCase()}
              </h4>
              <h4 className='flex justify-between items-center  text-NeutralStone font-[400]  font-primary text-[12px]  '>
                <IoPin />
                {review.comments}
              </h4>
            </div>
          </div>
        </div>
      </Link>
    </>
  ));

  const categoryHeading = 'BUG REVIEWS';
  return (
    <>
      <section>
        <div className={`${styles.sectionContainer}`}>
          <h1
            className={`text-transparent bg-clip-text bg-gradient-to-tr from-purple-800 to-pink-700 text-[1.25rem] font-[600] font-primary justify-self-center mb-2`}>
            {categoryHeading}
          </h1>
          {ReviewDetail}
        </div>
      </section>
    </>
  );
};

export default PostReviewOne;
