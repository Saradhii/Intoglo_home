import NextImage from 'next/image';
import React from 'react';
import styled from 'styled-components';

import { A11y, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from 'components/Container';
import Separator from 'components/Separator';
import { media } from 'utils/media';

// https://ucec83ae001e3d5592e7cace35b7.previews.dropboxusercontent.com/p/thumb/ABv-1_O_Qmj9a1XzFcbx6XeegNN6_-LifGBcuqEQwIX5nFsFZ2rNxarfLPqtt7bPK9wpCnh56WiCbP5nG7H82tTMeFxu1OxZUNmGtLof7hoNiUyaPdp-i7ECGqR2sZ0PPm_0YxjFXzRA5JSUCYlWrSwBM5T_qymZ_AeBy847airIMmIm0BCzwWg5BQKq-OZV7ZOOo405WEFFWm6vuhiC8XK0DyFaHAPFk2PGOD2eaTD0shLEkd9139jKo0M5_s9JMWvHSjns4VfbXCl2fuqU7H4ArOHx-S83CSbbRa_ubbXLPPw7GjrlhYUPA8nb8yFhE4t88sIuGfgLmLdKclDhYtQteLCwUf1FvAl4G9IigHuiCV3Um_xFXtkHu2cnwEQfK0c/p.png
const TESTIMONIALS = [
  {
    companyLogoUrl:
      'https://ucec83ae001e3d5592e7cace35b7.previews.dropboxusercontent.com/p/thumb/ABv-1_O_Qmj9a1XzFcbx6XeegNN6_-LifGBcuqEQwIX5nFsFZ2rNxarfLPqtt7bPK9wpCnh56WiCbP5nG7H82tTMeFxu1OxZUNmGtLof7hoNiUyaPdp-i7ECGqR2sZ0PPm_0YxjFXzRA5JSUCYlWrSwBM5T_qymZ_AeBy847airIMmIm0BCzwWg5BQKq-OZV7ZOOo405WEFFWm6vuhiC8XK0DyFaHAPFk2PGOD2eaTD0shLEkd9139jKo0M5_s9JMWvHSjns4VfbXCl2fuqU7H4ArOHx-S83CSbbRa_ubbXLPPw7GjrlhYUPA8nb8yFhE4t88sIuGfgLmLdKclDhYtQteLCwUf1FvAl4G9IigHuiCV3Um_xFXtkHu2cnwEQfK0c/p.png',
    content: `Intoglo team has been super helpful in bringing down our logistics costs and opening up the new global markets to us. Mrigank and Sufal have been very professional. The best part is everything is told to us transparently without any hidden costs. The team works as a part of the logistics team for you and gives extremely sincere suggestions, not just on the logistics but also other pieces. Would wish them all the best`,
    author: {
      name: 'Hardik',
      title: 'Akiva Health Shots',
      avatarUrl: '/testimonials/author-photo-1.jpeg',
    },
  },
  {
    companyLogoUrl:
      'https://uce90923477c9b2328edcdd358d2.previews.dropboxusercontent.com/p/thumb/ABvYl0LIe75f6gTV7joDws2zpw7NnXl5TcOD2nOcpCs6bOnHi5zVTeITzgF_i5ZlEOvCQCg2VHwZ0aVy8KrgacL5pNcIMhtKjt3hHXBzkrywB2ZgBhduyzvRIHC32ubAny50aOZvAojGRiqAjKzMgpr-tNYX8pY189KyJK8iQNaQmj65NMJelsGeVLMvzviL1g0iXYiS53cK_dQldihyY6QOBrGOgZAqWSFpQhMvDZZS4QRqG9zAg6Meqse5c-vzqZuhK2SkirZsuaQwVogYBjMzXTFYQob1PgbRfRR_8_C4jZ8hf7oJsCWE-a1GWCBGFRbuEjLQZT7Gs7c9VwxIiid53bFTCx2ke9VZD-jnpZnWGNPeLizW1J23S7HZHf3vZdY/p.png',
    content: `Working with Intoglo has been great so far, it really feels like your own team on the ground. The amount of ownership displayed has been truly inspiring. I wish you guys a lot of success and hope to recommend you to as many people as I can. Best Wishes!`,
    author: {
      name: 'Amogh, Supply Chain Head',
      title: 'Ayurveda Experience',
      avatarUrl: '/testimonials/author-photo-2.jpeg',
    },
  },
  {
    companyLogoUrl:
      'https://uca523102275d1ee3daf1059382a.previews.dropboxusercontent.com/p/thumb/ABs19hXpMn_cwyZX98g0P1JlVljbnC6gL4ZCFVO_ZH-f21ehNEfV1gGDmViiBWxiSuAHOggdLiBMpLBbo5tDvqWe3ImhWtM5T7_qP_mFsVyqPW9ZkVV89VQ12qFvlBvaXCwd8hEFkQ2n6PwQE6e7_zYrPIUXoFelsTRYCjuLrkx1SfPdD0bYGS35pPWz1MC6eYHFr-U9KVzJDYFQVtOv5yA6703poNEr8IOlDxNXt7QoczgA-N1jemTT3PAdps2PSmsusyw4ZXPE_CMKRUUWMS_JJJKo4Mgw9NmWHufcVRzBYmZXJEtUgXm_JtHC74ofHVbq33c9Sihz7kKDbcQajk9wZm_hyl15rXGLT-Cs4Tqt0v2UknP6rnIbeSUhrgvwMfo/p.jpeg',
    content: `Great service provided. A very reliable, cooperative & efficient company. Pleased with the overall service and clear communication that they provide.`,
    author: {
      name: 'Nidhi Gupta',
      title: 'CavinKare',
      avatarUrl: '/testimonials/author-photo-3.jpeg',
    },
  },
  {
    companyLogoUrl: '/testimonials/abc.svg',
    content: `Your services are great. Quick response in RFQ is appreciable. Understanding the requirement from us & attention to details are best in Intoglo.`,
    author: {
      name: 'Aslam Pasha',
      title: 'GlobalBees',
      avatarUrl: '/testimonials/author-photo-1.jpeg',
    },
  },
  {
    companyLogoUrl:
      'https://uc719df180d7d6d17185deb78878.previews.dropboxusercontent.com/p/thumb/ABuC0HNaBqZXk19ZHb_GDkpCan8Y4MSLhzB4pp1Se39FSatKqNYGgxEA-MCszseg6jIQvg8SweowImpl2DWNTJ8AuWT6JkMonJWsLwEl6qUQmO6s5rSQBHRJoHUFLu_asPJlL5z9n7yXcmmraDg7CYFyzI_FY2wqEFg0SXpYVx-TvtWFmw6s5gUMqaTi8DTFskYsOJd9l-IL9zTr2ynYZQs1SAP4lowcV1PtJ_WqK-oD6hWWXPBxvUqbNo7-O_j1W5C4ZMWr531477NTQb0QFYqPUr6RLYhMyBJ7ObUpj3s6Pi0vpyfTMsFVBpM3a9f_sCrzod-S5d_1QU2g-mhI_s7zzSEmnjg68PSm2rtDUWSERKepmnqH-x6zYDBoS4s8fv0/p.png',
    content: `Before Intoglo, we were trying to manage our global logistics through multiple partners but we were facing a lot of operational challenges. Love how Intoglo team has helped ease the entire process for us and made it seamless. And we got better prices as well. We had perfect customer support from Apoorva and his team"`,
    author: {
      name: 'Keshav Mittal',
      title: 'Hindcha, D2C Global Tea Brand',
      avatarUrl: '/testimonials/author-photo-2.jpeg',
    },
  },
  {
    companyLogoUrl: '/testimonials/abc.svg',
    content: `Always find the right solution. Intoglo team is amazing, professional, timely and communicative. They work seamlessly and when troubleshooting is needed, they always find the right solution.`,
    author: {
      name: 'Adnan Kapadia',
      title: 'Nutrition Lab',
      avatarUrl: '/testimonials/author-photo-3.jpeg',
    },
  },
];

export default function Testimonials() {
  return (
    <div>
      <Separator />
      <TestimonialsWrapper>
        <Swiper modules={[Navigation, Autoplay, A11y]} slidesPerView={1} autoplay={{ delay: 4000 }} centeredSlides navigation loop>
          {TESTIMONIALS.map((singleTestimonial, idx) => (
            <SwiperSlide key={idx}>
              <TestimonialCard>
                {/* <NextImage
                  src={singleTestimonial.companyLogoUrl}
                  alt={`${singleTestimonial.author.name}'s company logo`}
                  width={200}
                  height={60}
                /> */}
                <img src={singleTestimonial.companyLogoUrl} alt={`${singleTestimonial.author.name}'s company logo`} />
                <Content>“{singleTestimonial.content}”</Content>
                <AuthorContainer>
                  {/* <AuthorImageContainer>
                    <NextImage src={singleTestimonial.author.avatarUrl} alt={singleTestimonial.author.name} width={48} height={48} />
                  </AuthorImageContainer> */}
                  <AuthorContent>
                    <AuthorName>{singleTestimonial.author.name}</AuthorName>
                    <AuthorTitle>{singleTestimonial.author.title}</AuthorTitle>
                  </AuthorContent>
                </AuthorContainer>
              </TestimonialCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </TestimonialsWrapper>
    </div>
  );
}

const TestimonialsWrapper = styled(Container)`
  position: relative;

  .swiper-button-prev,
  .swiper-button-next {
    color: rgb(var(--secondary));

    ${media('<=desktop')} {
      display: none;
    }
  }

  .swiper-button-prev {
    color: rgb(var(--textSecondary));
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23currentColor'%2F%3E%3C%2Fsvg%3E");
  }

  .swiper-button-next {
    color: rgb(var(--textSecondary));
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23currentColor'%2F%3E%3C%2Fsvg%3E");
  }
`;

const TestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:not(:first-child) {
    margin-top: 5rem;
  }
`;

const Content = styled.blockquote`
  text-align: center;
  font-size: 2.2rem;
  font-weight: bold;
  font-style: italic;
  max-width: 60%;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.4rem;
`;

const AuthorTitle = styled.p`
  font-weight: bold;
`;

const AuthorName = styled.p`
  font-weight: normal;
`;

const AuthorImageContainer = styled.div`
  display: flex;
  border-radius: 10rem;
  margin-right: 1rem;
  overflow: hidden;
`;
