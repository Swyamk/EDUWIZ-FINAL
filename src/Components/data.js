import { category_1, category_2, category_3, category_4, stockmarket, math } from "../assets/images";
import { course_1, maths, stocks, pharma } from "../assets/images";

// const Team = [
//   { id: 1, name: 'Keshav Thakur', age: 16, src: keshav, work: 'Turn the website into react, making the home page, login page' },
//   { id: 2, name: 'Abhay Sagar', age: 15, src: abhay , work: 'make the services page, about page'},
//   { id: 3, name: 'Anurag Kumar', age: 17, src: anurag, work: ' create a api service for geolocation services'},
//   { id: 4, name: 'Abhinav Sagar', age: 16, src: abhinav, work: 'crousal page' },
//   { id: 5, name: 'Aman Verma', age: 15, src: aman, work: 'create the image and other graphics part'},
//   { id: 6, name: 'Prashik Humane', age: 17, src: prashik, work: 'make the contact page'},
//   { id: 7, name: 'Kritika Yadav', age: 16, src: kritika, work: 'make a payment page' },
//   { id: 8, name: 'Anushka', age: 16, src: anushka, work: 'make a footer page' },
// ];

const cardData = [
  {
    id: 1,
    title: "Software Engineer Programs",
    img: category_1,
    color: "green",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 2,
    title: "App Development Programs",
    img: category_2,
    color: "red",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit."

  },
  {
    id: 3,
    title: "UI/UX Design",
    img: category_3,
    color: "blue",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit."

  },
  {
    id: 4,
    title: "Pharma Course",
    img: category_4,
    color: "yellow",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit."

  },
  {
    id: 5,
    title: "Stock Market Programs",
    img: stockmarket,
    color: "purple",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit."

  },
  {
    id: 6,
    title: "Mathematics Course   /Programs",
    img: math,
    color: "pink",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
];


const course = [
  {
    id: 1,
    title: "Build a Modern Website Using HTML, CSS, and JavaScript",
    rating: 4.5,
    price: 4000.00,
    img: course_1,
    level: "Advanced",
    heading: "Advanced JavaScript",
    instructor: "Safiya Nasir",
    course_decs: `- Cover fundamental HTML tags and CSS styling techniques for layout, typography, and interactivity under the expert guidance of Safiya.A expert software developer.
    - Explore in-depth topics and practical applications to enhance your tdevelopment skills .
    - Benefit from Medha's wealth of experience and expertise as she shares valuable insights and real-world examples from her extensive career in software development.
    - Develop a comprehensive understanding of asynchronous JavaScript, form validation, and AJAX to create interactive and dynamic web experiences..
    - Gain practical experience through hands-on exercises.
    - Receive personalized guidance and feedback from Safiya to refine your web development skills and achieve your technical goals `,
    course_structure: [`HTML and CSS basics.
    - Introduce core JavaScript concepts like DOM manipulation, and event handling.
    - Explore advanced CSS features like flexbox, grid, and media queries for creating responsive layouts.
    - Teach asynchronous JavaScript, form validation, and AJAX to create interactive and dynamic web experiences.`],
    videoId: 'https://youtu.be/htznIeWKgg8?si=2RK_9YZmPFf9RzQl',
  },
  {
    id: 2,
    title: "Get the Certificate in Machine Learning Algorithms",
    rating: 4.5,
    price: 4000.00,
    img: pharma,
    level: "Intermediate",
    heading: "Advanced Machile Learning",
    instructor: "Medha Bhardwaj",
    course_decs: `- Delve into advanced topics and practical applications to elevate your understanding and proficiency in machine learning.
    -Harness Dr. Chen's extensive expertise as he shares invaluable insights and real-world examples garnered from years of experience in the field.
    -Master the fundamentals of various machine learning algorithms, including regression, classification, clustering, and deep learning.
    -Acquire hands-on experience through interactive exercises, case studies, and simulated projects to reinforce theoretical concepts and enhance your problem-solving skills.
    -Benefit from personalized mentorship and feedback from Dr. Chen to refine your approach and achieve success in applying machine learning algorithms to diverse real-world scenarios.`,
    course_structure: [`Covering basic concepts, algorithms, and supervised/unsupervised learning paradigms
    - Exploring deep learning, natural language processing, and computer vision applications
    - model evaluation, optimization, and considerations for deploying models in real-world scenarios.`],
    videoId: 'https://youtu.be/ukzFI9rgwfU?si=2Kr4Ux1CINOt-EtK',

  },
  {
    id: 3,
    title: "Learn how make money in Stock Market in just 7days",
    rating: 4.9,
    price: 5000.00,
    img: stocks,
    level: "Advanced",
    heading: "Advanced Stock Market Trading",
    instructor: "Hima Bindu",
    course_decs: `- Learn advanced techniques and strategies for successful stock market trading under the expert guidance of Hima Bindu, an experienced software engineer turned stock market trader.
    - Explore in-depth topics and practical applications to enhance your trading skills and maximize profits in the stock market.
    - Benefit from Hima Bindu's wealth of experience and expertise as she shares valuable insights and real-world examples from her extensive career in stock market trading.
    - Develop a comprehensive understanding of technical analysis, fundamental analysis, risk management, and portfolio diversification to make informed trading decisions.
    - Gain practical experience through hands-on exercises, case studies, and simulated trading sessions to apply theoretical concepts to real-world trading scenarios.
    - Receive personalized guidance and feedback from Hima Bindu to refine your trading strategies and achieve your financial goals in the stock market.`,
    course_structure: [`Overview of financial markets
    - Introduction to stock exchanges and trading platforms
    - Understanding market participants and their roles`],
    videoId: 'https://www.youtube.com/watch?v=rL4DdTOHc0A',

  },
  {
    id: 4,
    title: "Learn class 10th maths in just one minute",
    rating: 4.5,
    price: 2000.00,
    img: maths,
    level: "Beginner",
    heading: "Learn basics of mathematics",
    instructor: "Hima Bindu",
    course_decs: `-  Dive deep into fundamental mathematical concepts and practical applications to build a strong foundation for further learning.
   -Benefit from Professor Smith's wealth of teaching experience as he elucidates key concepts with clear explanations and real-world examples.
  -Develop a comprehensive understanding of arithmetic operations, algebraic expressions, geometry, and data interpretation to excel in class 10 mathematics examinations.`,
    course_structure: [`Covering arithmetic, algebra, geometry, and data interpretation.
    - Exploring real-world examples to reinforce understanding.
    - Receive tailored support and engage in hands-on exercises to master concepts effectively.`],
    videoId: 'https://youtu.be/__Uw1SXPW7s?si=njtKP1M9OMFW88y3',

  }
]




export {
  cardData,
  course,
};