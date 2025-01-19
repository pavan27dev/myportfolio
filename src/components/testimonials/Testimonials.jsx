import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      // link: 'https://www.linkedin.com/in/n%C9%99sib%C9%99li-yusibov-0x101/',
      name: 'Arjun',
      role: 'Cyber Security Engineer . Improving open-source projects, one commit at a time.',
      test: 'As a developer and a problem solver, I think Pavan is a great collaborative partner to have. I met Pavan while working on some basic JavaScript and React projects, and since then, he has shown remarkable progress in his understanding of the development process. He always maintains a professional environment and ensures excellent audio and video quality, which makes communication with him seamless and efficient.',
    },
    {
      id: 2,
      // link: 'https://www.linkedin.com/in/raul-omarov-7841b7201/',
      name: 'Raju',
      role: 'Full-stack developer | Technical Support Engineer at Microverse',
      test: "As a developer and a problem solver, I think Pavan is a great collaborative partner to have. I met Pavan while working on some basic JavaScript and React projects, and since then, he has shown remarkable progress in his understanding of the development process. He always maintains a professional environment and ensures excellent audio and video quality, which makes communication with him seamless and efficient.",
    },
    // {
    //   id: 3,
    //   link: 'https://www.linkedin.com/in/agasi-xalilov/',
    //   name: 'Ağası Xəlilov',
    //   role: 'Full Stack Developer| PostgreSQL | JavaScript | React | Redux | Html&Css | Python.',
    //   test: 'I worked with Rasif in the same team and him communication skills are very strong. Him programming skill is one of the bests, given the time frame in the field. He is a good team player.  He will probably fit in most of the companies not only because he\'s a good team worker, but also because he has very good skills and I know he has much more potential to be shown.',
    // },
    // {
    //   id: 4,
    //   link: 'https://www.linkedin.com/in/javid-aliyev-b343061b6/',
    //   name: 'Javid Aliyev',
    //   role: 'Full-Stack Web Developer. JavaScript | Rails | React | Redux.',
    //   test: "I mentored Rasif some months ago, and I can say that he is one of those people that you love to work with. He was always interested in what I was trying to teach him, paying attention and always asking questions if something was not clear. When it comes to professional skills, he is really committed to work, always doing him best and going beyond the requirements of the project he's building.",
    // },
    // {
    //   id: 5,
    //   link: 'https://www.linkedin.com/in/elshad-bashirov-1907a1213/',
    //   name: 'Elshad Bashirov',
    //   role: 'Software Developer',
    //   test: "Throughout all our collaborations, Rasif has always conducted herself politely and kindly. He comes across as someone that's always willing to help and puts the team ahead of himself. But beneath this, I see a strength and determination to distinguish himself. He's not only someone I highly recommend but is also someone I greatly respect.",
    // },
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
            <div className="client__avatar">
              <a href={test.link}>
                <BsLinkedin />
              </a>
            </div>
            <h5 className='client__name'>{test.name}</h5>
            <small className="client__review">{test.test}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials