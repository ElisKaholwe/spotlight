import {
  IoArrowBack,
  IoAtCircleOutline,
  IoBriefcase,
  IoBulb,
  IoFootball,
  IoHardwareChip,
  IoHeadset,
  IoHelpCircleOutline,
  IoLogoBitcoin,
  IoManOutline,
  IoNewspaper,
  IoSchool,
  IoStorefrontSharp,
  IoTrendingUpSharp,
  IoEllipsisHorizontalSharp,
} from 'react-icons/io5';
import One from '../../../public/Images/alex.jpg';
import Two from '../../../public/Images/ReflectTwo.png';

export const navigationCategories = [
  { id: 1, icon: <IoLogoBitcoin />, heading: 'CRYPTOs & BLOCKCHAIN', subheading: 'Client asked why is the website in latin?' },
  { id: 2, icon: <IoHeadset />, heading: 'GADGETSBAY', subheading: 'Client asked why is the website in latin?' },
  { id: 3, icon: <IoFootball />, heading: 'SPORTECH', subheading: 'Client asked why is the website in latin?' },
  { id: 4, icon: <IoBriefcase />, heading: 'TECHPRENEUR', subheading: 'Client asked why is the website in latin?' },
  { id: 5, icon: <IoHardwareChip />, heading: 'AI & ML', subheading: 'Client asked why is the website in latin?' },
  //{ id: 6, icon: <IoApps />, heading: 'HI-TECH', subheading: 'Client asked why is the website in latin?' },
  { id: 7, icon: <IoManOutline />, heading: 'ONLY IN TZ', subheading: 'Client asked why is the website in latin?' },
];

export const navigationLinks = [
  { id: 0, icon: <IoArrowBack />, href: '#', label: 'Continue reading' },
  { id: 1, icon: <IoAtCircleOutline />, href: '/reviews', label: 'OnSp⌬t Reviews' },
  { id: 2, icon: <IoNewspaper />, href: '/headlines', label: 'Breaking Headlines' },
  { id: 3, icon: <IoTrendingUpSharp />, href: '/trendings', label: 'Trendings' },
  { id: 4, icon: <IoBulb />, href: '/discover', label: 'Discover' },
  { id: 5, icon: <IoSchool />, href: '/academia', label: 'Academia' },
  { id: 6, icon: <IoHelpCircleOutline />, href: '/questions', label: 'Ask anything' },
  { id: 7, icon: <IoStorefrontSharp />, href: '/store', label: 'Our store' },
  { id: 8, icon: <IoEllipsisHorizontalSharp />, href: '/', label: 'More' },
];

export const contactUs = [
  {
    href: '#',
    header: 'Contact us',
    subHeader: ['Sinza,Kijitonyama', 'Dar es salaam,Tanzania', '+255(0)-689-759-215', 'debug@bugs.com'],
  },
];

//NB: A Single Route redirect when a user click on any of the subheaders, in that particullar Route, brief all the subheaders contents
export const Legal = [
  {
    href: '#',
    header: 'Legal',
    subHeader: ['Terms of services', 'Privacy policy', 'Cookie policy', 'Comment policy'],
  },
];

export const aboutUs = [
  {
    href: '#',
    header: 'About us',
    subHeader: ['Our Supporters', 'Our Belief', 'Our Manifesto', 'Modus Operandi'],
  },
];

export const ReviewDetails = [
  {
    id: 1,
    Image: One,
    BrandName: 'Apple',
    Heading: `These Photos Don't Lie:42 Products With Results You'll Need To See To Believe.`,
    UpdateTime: 'Just now',
    comments: 213,
  },
  {
    id: 2,
    Image: One,
    BrandName: 'Oraimo',
    Heading: `Pochettino leaves Chelsea by mutual consent after one season in charge.`,
    UpdateTime: '15 April 2024',
    comments: 729,
  },
  {
    id: 3,
    Image: One,
    BrandName: 'Huawei',
    Heading: `'No equivalence': Biden defends Israel after ICC requests arrest warrants.`,
    UpdateTime: '3 Mins ago',
    comments: 624,
  },
  {
    id: 4,
    Image: One,
    BrandName: 'Samsung',
    Heading: `Here Are The Funniest Tweets From Just This Weekend. `,
    UpdateTime: '12 Feb 2025',
    comments: 118,
  },
  {
    id: 5,
    Image: One,
    BrandName: 'Redmagic',
    Heading: `UK infected blood scandal victims to receive final compensation this year.`,
    UpdateTime: '05 June 2024',
    comments: 109,
  },
  {
    id: 6,
    Image: One,
    BrandName: 'Apple',
    Heading: `These Photos Don't Lie:42 Products With Results You'll Need To See To Believe.`,
    UpdateTime: '05 June 2024',
    comments: 59,
  },
  {
    id: 7,
    Image: One,

    BrandName: 'Oraimo',
    Heading: `Pochettino leaves Chelsea by mutual consent after one season in charge.`,
    UpdateTime: '05 June 2024',
    comments: 84,
  },
  {
    id: 8,
    Image: One,
    BrandName: 'Huawei',
    Heading: `'No equivalence': Biden defends Israel after ICC requests arrest warrants.`,
    UpdateTime: '05 June 2024',
    comments: 317,
  },
  {
    id: 9,
    Image: One,
    BrandName: 'Samsung',
    Heading: `Here Are The Funniest Tweets From Just This Weekend. `,
    UpdateTime: '05 June 2024',
    comments: 617,
  },
  {
    id: 10,

    Image: One,
    BrandName: 'Redmagic',
    Heading: `UK infected blood scandal victims to receive final compensation this year.`,
    UpdateTime: '05 June 2024',
    comments: 417,
  },
];

export const ReviewDetailsOne = [
  {
    id: 1,
    Image: Two,
    BrandName: 'Apple',
    Heading: `These Photos Don't Lie:42 Products With Results You'll Need To See To Believe.`,
    UpdateTime: '05 June 2024',
    authorName: 'EllisAsync',
    category: 'GadgetsBay',
    comments: 213,
  },
  {
    id: 2,
    Image: Two,
    BrandName: 'Oraimo',
    Heading: `Pochettino leaves Chelsea by mutual consent after one season in charge.`,
    UpdateTime: '05 June 2024',
    authorName: 'EllisDoWhile',
    category: 'Crypto',
    comments: 56,
  },
  {
    id: 3,
    Image: Two,
    BrandName: 'Huawei',
    Heading: `'No equivalence': Biden defends Israel after ICC requests arrest warrants.`,
    UpdateTime: '05 June 2024',
    authorName: 'EllisAce',
    category: 'AI',
    comments: 125,
  },
  {
    id: 4,
    Image: Two,
    BrandName: 'Samsung',
    Heading: `Here Are The Funniest Tweets From Just This Weekend.This is some Extra Heading Text for Experimental Purposes,This is beginning to look weird `,
    UpdateTime: '05 June 2024',
    authorName: 'Ratzinger',
    category: 'Only in Tanzania',
    comments: 78,
  },
  {
    id: 5,
    Image: Two,
    BrandName: 'Redmagic',
    Heading: `UK infected blood scandal victims to receive final compensation this year.`,
    UpdateTime: '05 June 2024',
    authorName: 'Emmet',
    category: 'UEFA',
    comments: 96,
  },
];

export const ReviewDetailsThree = [
  {
    id: 1,
    category: 'football',
    heading: `Kylian Mbappe finally chose passion over money.It's happening guys`,
    paragraph:
      'adipisicing elit. Incidunt, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam reiciendis repellendus rerum, fuga error cupiditate.',
    UpdateTime: 'Just now',
    redirection: '/blog',
  },
  {
    id: 2,
    category: 'sports & betting',
    heading: `Why you never win a cent in betting.All professional tips explained.`,
    paragraph:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam reiciendis repellendus rerum, fuga error cupiditate.',
    UpdateTime: 'Updated 12 June 2023',
    redirection: '/blog',
  },
  {
    id: 3,
    category: 'Academics',
    heading: `NECTA Results are out,these schools are left out.`,
    paragraph:
      'Lorem, ipsum dolor sit amet consectetur Lorem ipsum dolor sit  amet consectetur adipisicing elit. Veniam reiciendis repellendus rerum, fuga error cupiditate.',
    UpdateTime: 'Updated 27 Feb 2024',
    redirection: '/blog',
  },
  {
    id: 4,
    category: 'Health',
    heading: `UK infected blood scandal victims to receive final compensation this year.`,
    paragraph:
      ' Lorem, ipsum dolor reprehenderit nostrum, asperiores sequi quisquam dolor sit amet consectetur adipisicing elit. Illum dolores, sit reprehenderit nostrum, asperiores sequi quisquam dolor officia animi adipisci reiciendis totam dolorem similique quo, odit veritatis consequatur?',
    UpdateTime: 'Updated 2hrs ago',
    redirection: '/blog',
  },
  {
    id: 5,
    category: 'politics ',
    heading: `These Photos Don't Lie:42 Products With Results You'll Need To See To Believe.`,
    paragraph:
      ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum dolores, sit  officia animi adipisci reiciendis totam dolorem similique quo, odit veritatis consequatur?',
    UpdateTime: '01 April 2024',
    redirection: '/blog',
  },
  {
    id: 6,
    category: 'internet humor',
    heading: `Here Are The Funniest Tweets From Just This Weekend.This is some Extra Heading Text for Experimental Purposes,This is beginning to look weird `,
    paragraph:
      '  Illum dolores, sit reprehenderit nostrum, Lorem,  ipsum dolor sit amet consectetur adipisicing elit. Illum dolores, sit reprehenderit nostrum, asperiores sequi quisquam dolor officia animi adipisci reiciendis totam dolorem similique quo, odit veritatis consequatur?',
    UpdateTime: '24 April 2017',
    redirection: '/blog',
  },
  {
    id: 7,
    category: 'hollywood',
    heading: `'No equivalence': Biden defends Israel after ICC requests arrest warrants.`,
    paragraph:
      'Illum dolores, sit reprehenderit nostrum, asperiores sequi quisquam dolor officia animi adipisci reiciendis totam dolorem similique quo, odit veritatis consequatur?',
    UpdateTime: '09 Dec 1961',
    redirection: '/blog',
  },
];
