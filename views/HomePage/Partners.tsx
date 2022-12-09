import NextImage from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from 'components/Container';
import { media } from 'utils/media';

// const PARTNER_LOGOS = [
//   'akiva_love.png',
//   'almo.png',
//   'ayurveda_experience.png',
//   'barosi.png',
//   'blue_tea.png',
//   'bonayu.jpg',
//   'Cavinkare.jpg',
//   'even_flow.png',
//   'Geniemode.jpg',
//   'hindcha.png',
//   'life_of_bile.jpg',
//   'matras_exporters.png',
//   'nexpert.png',
//   'Nykaa.png',
//   'plum.jpg',
//   'rakuten.png',
//   'softee_bay.jpg',
//   'wellbeing_nutrition.jpg',
// ];

const CLIENTS_LOGOS = [
  'https://ucec83ae001e3d5592e7cace35b7.previews.dropboxusercontent.com/p/thumb/ABv-1_O_Qmj9a1XzFcbx6XeegNN6_-LifGBcuqEQwIX5nFsFZ2rNxarfLPqtt7bPK9wpCnh56WiCbP5nG7H82tTMeFxu1OxZUNmGtLof7hoNiUyaPdp-i7ECGqR2sZ0PPm_0YxjFXzRA5JSUCYlWrSwBM5T_qymZ_AeBy847airIMmIm0BCzwWg5BQKq-OZV7ZOOo405WEFFWm6vuhiC8XK0DyFaHAPFk2PGOD2eaTD0shLEkd9139jKo0M5_s9JMWvHSjns4VfbXCl2fuqU7H4ArOHx-S83CSbbRa_ubbXLPPw7GjrlhYUPA8nb8yFhE4t88sIuGfgLmLdKclDhYtQteLCwUf1FvAl4G9IigHuiCV3Um_xFXtkHu2cnwEQfK0c/p.png',
  'https://uc82373efbcdb951cae0cf56e4fd.previews.dropboxusercontent.com/p/thumb/ABsfnwqI6BV0AlgA7HrQmVgNOP6KhpRtywkX0wCHEq6kKTjDb6ke3fOR5Pd5Eovuy7lPavN0zyoxoSX4Hc5UFBBqgXxRyZijhTLQBcO38wrp-Mgc7_FnvFtzku3hVKZ2mJdMUXntMafy5FUL05oMZJ5NN1FSKze8AnrIIg4zo7QDnTenAxQiUIevLE-TgDj-_Leq1MW0Dk6KuV6mtL-ENAo-jhUpNT6sOSbLGztR_DiPTdgtEv9bFy_-xtTEvRxWwYklZt6cqzh3hZpZ_ff3SuCcWb87tnukNRZ2vIfP9kbup8v-Y2veDAucupCzk0dmrpUJpnLqGVia6iVhyolnDFper7-ZX7rn5mghNHownpK_4JefhyreEnxyULzQftpdfJM/p.png',
  'https://uce90923477c9b2328edcdd358d2.previews.dropboxusercontent.com/p/thumb/ABvYl0LIe75f6gTV7joDws2zpw7NnXl5TcOD2nOcpCs6bOnHi5zVTeITzgF_i5ZlEOvCQCg2VHwZ0aVy8KrgacL5pNcIMhtKjt3hHXBzkrywB2ZgBhduyzvRIHC32ubAny50aOZvAojGRiqAjKzMgpr-tNYX8pY189KyJK8iQNaQmj65NMJelsGeVLMvzviL1g0iXYiS53cK_dQldihyY6QOBrGOgZAqWSFpQhMvDZZS4QRqG9zAg6Meqse5c-vzqZuhK2SkirZsuaQwVogYBjMzXTFYQob1PgbRfRR_8_C4jZ8hf7oJsCWE-a1GWCBGFRbuEjLQZT7Gs7c9VwxIiid53bFTCx2ke9VZD-jnpZnWGNPeLizW1J23S7HZHf3vZdY/p.png',
  'https://ucb574f56841057cf60b201caa89.previews.dropboxusercontent.com/p/thumb/ABurC4oYjGSaOo2nbk0yd0Y-ZVhszfOWNNIqGsqJOnrXEUMfcPEbpaAhihjPx1rTeG8HwpPSwLvk682A9S3krsp6WIojWmh0kkJyASLUKAq7YzPZTs_ZwNaOufpo3HWjErTPanlUoc1XAgIU_AxQcmUMiRzRsog4O5gyDtSFIkKicnJY0MiEQUap_97WB78htEXi1vA4k9vis6Cng0LnB4b31MKMl7bLnk1KhfjPgtnlcqr5Fv3MqnuaD7AniQ-BKwLAKuwY2Yzxjf4Zb1bDAQQHdxa84JmJgeRcsNCxwQjN4rUp2CKvuABdsxShm2zYSF5dePsauB_fW6HPbAI-LtLGR9HA2LhL2e4Pu6QKz6xHvjf7F1mItV1MaBdAJ44l_UE/p.png',
  'https://uc3f83af790b356c1d2a795c78c6.previews.dropboxusercontent.com/p/thumb/ABt3ceq_h-q0hA0E7BJKFgr5TRsW32gaS3qPazfNRhObEY9ll4mvFRsMPwD92kk6fWNM4rlbwebTdJHR66xQrIGd-NnPLsWH0bf5QbYxEuYkdCQS3wvP2L-Zwnw6_UdK8FyOkM3Fx-BWIcT1GkHC2hCPsSLPVciGLOnPV7Kl4ozKhTLBOP-GJy1bPjCcBwPt7tSKSjyiMboeBRLnyzIdxri4WU6bnf-jL8Map9r1h_ZxsI-0f1VQZnfKRuBVDikQjSlsjBIntHTxDh9QU1Y_mYl_m14agvsOALIBvS8icQUiWlZwSH1jnoajrr0GJGvfc-w9-XKWLvuYtIQvF8WwtFaqhNdeHWYAZg8IcAB8l60lL3EtQHd9xaOWRVZp2JfqZAY/p.png',
  'https://ucf56db5232dee230ce5aa6e609e.previews.dropboxusercontent.com/p/thumb/ABux0Vnz2twaFiealdpwCoSVnVv_-Fy2smGQwdq2J-VV1vS5wm9zwCUTI8udVXmRVFPG7B0e5PswSfiiMxQH8-hQ3urzvlkjzr1AFEGNrBvErqZa5ZtZGROnrvSJ0ZAa4t5wsRbnqIA4AIvLUJTd9elGXVeuYN_ezQvAD5hXZ4auYQbm4UVH5w38-FfFVx-liSztw69MvTVXHfaKLpphF5tVKd_7PA6dXHdbfjguTleu49qYRSTwndor2Cv5tjGu2abYUJ8_lriOk7uKFUKFguRCp1ShVZ7NMdZGpmkO6b8EXvR2sjWr3ssthBFno9jRSj5v55xB6tDgSSihmqHPj8NVkJRceuBRDRdN8wkQGgVeA362GgX9YM8tNHNSthTWtn4/p.jpeg',
  'https://uca523102275d1ee3daf1059382a.previews.dropboxusercontent.com/p/thumb/ABs19hXpMn_cwyZX98g0P1JlVljbnC6gL4ZCFVO_ZH-f21ehNEfV1gGDmViiBWxiSuAHOggdLiBMpLBbo5tDvqWe3ImhWtM5T7_qP_mFsVyqPW9ZkVV89VQ12qFvlBvaXCwd8hEFkQ2n6PwQE6e7_zYrPIUXoFelsTRYCjuLrkx1SfPdD0bYGS35pPWz1MC6eYHFr-U9KVzJDYFQVtOv5yA6703poNEr8IOlDxNXt7QoczgA-N1jemTT3PAdps2PSmsusyw4ZXPE_CMKRUUWMS_JJJKo4Mgw9NmWHufcVRzBYmZXJEtUgXm_JtHC74ofHVbq33c9Sihz7kKDbcQajk9wZm_hyl15rXGLT-Cs4Tqt0v2UknP6rnIbeSUhrgvwMfo/p.jpeg',
  'https://uc83216ff7b722fb1f93324dcbbc.previews.dropboxusercontent.com/p/thumb/ABuwyG-ABLVQBky56LoUnVrPD23e-oCUoeqSGC1xOVrfMUd8Ccknq3mNzzcThiiAimMHQnQw-eXFfyBPNC2oOYNj0np6IUNtSeWD9yzXy-S0qF9MoyLXw-MKuZ7DtYX1-hIUOGCVxtjQh-nCDhpKKMmKPTTXs1MrFNeVdvkvrXYh89bu3vwlKOXJ8c5s3MbaU1gZPBBO2tF6R7vkGT0L1qI0wGdGK2JOZJeCJ8873aq6Heo3WEjXiWdTUnzZAEC9Xf0j7bEzTbfqbgr8E5Pa-MHFqMVZwhZnX509sSjD_QSTWJicjOiVLGNpgbS_RruYFGHi-OYdOKokpLeV6QKPywvUuSZ6Pr2r8c-MKQhsuoRu9fTd9hWwnjOenyM-5MsErOs/p.png',
  'https://ucf69cd70c7c533233e6cefb24c4.previews.dropboxusercontent.com/p/thumb/ABsL_q1Q9N6F8-0sQN1QtxvXW_hKvMp6Hd09C_NO8kvLuLkSBWdu0K8eVZfxylSSA7uKnMUzIWnUV1UZHSDS-iONEkiAbEgfpllxEAVUb-pswmtPDPI-D3TV11VA3nEUVVaY3DYmCy-WUvjAH_H-XdHopWIID573HBSP-gN62nlVfWvT8w608qVpIV3GegmTneHhx16vY7ENj_suhnMRVqqSTeuqxx0-bQa0vTy32kviAMEfxs_EL6kFw_ty9qKBB8YDXmoAsunZ0_9yT9QDYxd68jLUkrmQ08JOotJOdjmrThQLnWL08_M6L4nQiyxwvOV2mCLL0pmaE2onf93A_kCMfXyw7WvglOOdq3UUTymuJYxYY_XO0wxZRaQdyxQPhsI/p.jpeg',
  'https://uc719df180d7d6d17185deb78878.previews.dropboxusercontent.com/p/thumb/ABuC0HNaBqZXk19ZHb_GDkpCan8Y4MSLhzB4pp1Se39FSatKqNYGgxEA-MCszseg6jIQvg8SweowImpl2DWNTJ8AuWT6JkMonJWsLwEl6qUQmO6s5rSQBHRJoHUFLu_asPJlL5z9n7yXcmmraDg7CYFyzI_FY2wqEFg0SXpYVx-TvtWFmw6s5gUMqaTi8DTFskYsOJd9l-IL9zTr2ynYZQs1SAP4lowcV1PtJ_WqK-oD6hWWXPBxvUqbNo7-O_j1W5C4ZMWr531477NTQb0QFYqPUr6RLYhMyBJ7ObUpj3s6Pi0vpyfTMsFVBpM3a9f_sCrzod-S5d_1QU2g-mhI_s7zzSEmnjg68PSm2rtDUWSERKepmnqH-x6zYDBoS4s8fv0/p.png',
  'https://uc87fafededf2d790853882ba4fa.previews.dropboxusercontent.com/p/thumb/ABvfBFgDPMcuoqTM30dR2_vmnMGFmR1C_VDIkKxGMzuEAPrRxbpd67VF9kKNTkg39h80FIOZqzfsb7Sa1sZaugJK27PW-TIwTYNFg-cZKbb_lb5R9fY0_VCEbJTfSXcE5ImhMFGVD5kfi5ygAVRroA10oJp9ZhlabxlJqnZOBw3gtpWmXwIrL_8Rzp9rjEdicm-Tx7qSbF-a8KS6du1S_XN06sLBrxHSMiv5ETaHsjLwP_RMI0ITsOrSNh9HbnVNmIHiup4TyBb9No820vNvamqC6mBJr4ij4oHuHOPjXCIX3b81pnZ9SPIovMBu6R68WvUahlkdiMihoLuqA_I-vPYJlI9_-1rtVi0RUPMxR_EO-zjprLs6ydZbt1-HadT5iLA/p.jpeg',
  'https://uc14c8193fce9b7f3f535b42ada3.previews.dropboxusercontent.com/p/thumb/ABuW3HyrMhX8LwsGLFInYOhFZzPWcR9PcL3GrsSQ7uC8p-_MCW02D-yM6RFhdzhyzFMyvweiRFE6fmBRImO1jEsKhvZdfvDJQ_im6y8DmI_hraIeGwTs4ZMOEHQ5B1x30QKl_7EshQwFTyQx6muVgqZ5lmgdaHbr77P3qP48_sDZzxhP_SxskG1_OMqFobIm9nl0OndDeLaFhQvEyJltkxwZ7Yu5U-x4ohHzVgahtn0kcpl8byx7eXpMmlnrqIU8xs0k9AE3-J4ZtiAZ4j95kaeSH5omeOLLLrFDGWDPAscN6ffk8vSf6SUbVYHHOXj5zKMxYAo5X5R5JFeLBFGkRVJjF5yLQND8g5IBNVfQyZmFKcpKWw-Z3moEMRzmVr74eYo/p.png',
  'https://uc031b754af344df1a40aaa94f54.previews.dropboxusercontent.com/p/thumb/ABviaHvtltZ1pSL2J5-NNG7YF0Iu2R-A-mGtXBsBHi_f4nP5OOyuJW0CyaudN5zrJF9ek6zPTs2xMoo4gd0nr06R36l-nh__pzohPzjy88XoKGtYoqTOLceVB8QZU36PS-pVKv88mekaqtp-bbmFTS-6nv3vClACi_TVDki2Zxn0JhCKjkEFJQJEwE4hurdFX_ZgfM_dNU6_vqUqjSDpmxU8ClM_Dzc2FPsd55IuZ_ifUVd1CkBmHm5Y5QV_uMY-I5KJVG_Fvca3L6M5f9ZQHPLYN5pOE6GXLmoBu55mHrGcVPCMAj5NvobkXRmbMIr-6zKmh9kNAiubdK2KKxDxT4R58hHebisY16cmlNvn1a72TLFwRdJzWu-PLJgNMbMZGZs/p.png',
  'https://uc273966fb4c81717ad423188133.previews.dropboxusercontent.com/p/thumb/ABsDGUEOIYXU9RfJMqOpy9kj8Z7_jBt2St6U5gew5MRaZJMjVLPRilAhL__ox8-zwgUwD7OShiMtx6nEURJ_1AEC1AqNL-A96EEISqWGzfd6C-ZsWDGiXf4XBScSnxXR-mk56AFW9o08guaZhO1Bb3yYvQbJp3qt8NYH7ouj6OcKVJpJVZI264JOVbUQa4gf1B5e77MpwgtaIGt2JTb3w-0fwTv42E5rb_JgPxUHB-SCKQuEElbi7LzWOULfa9953l24_bo8qexGywA83dAZFkBWUciN2TWBrJT2H5ZnzgM2pEPHMtVrzrFKcooeGK8SE43L6TJ38niynj2Lks4TNDK5MEkxhtl8bDx-fxTz27yeRux9PU2ahnCtTAUk7WplDeo/p.png',
  'https://uc3d27e48c6b5556219b7786f89c.previews.dropboxusercontent.com/p/thumb/ABu8BKCbh4TdcRlGMQy1hnpZCjPpjJXaaBXEQ1RZ323gQGYq1jiMIN1j9TedqcQvhAjshUvVh_ZG2kF8vOUqqz8fGezjktpc4DdntKiHpRnwlLNU4GKrfCKygYv9zli0Uw908Wg7SgYtCRbUt6Joz9Aqd23wQ9nTrMg5xkuZliCHbiWABJN467I29FV_QQrffTmXYLJSQTrHhfk67yLeOpwUCJbpYiIIo8njlgmQVdv7hv1qmJLAdfZZyFYky3BgSgdTYs3U6Zv2DubF4IDujQQmdQW9w5vDQdEh9p5LDce25rY_oTY8ytNQlJ_hu7QrAx7AQY9tg-EZBWqL3T4d4JketCIlK55UMwYo--pZqNvQlgEf9HYOCjJ7SyTnfxx9TEI/p.jpeg',
  'https://uca920ba930939e3f5564e109d3b.previews.dropboxusercontent.com/p/thumb/ABsnkgRT4wKy8a6s7CPMBxwyDqRUT0XsRuFNbW90I3BXGHMAT_U75KddITMn4gZW8VWAKnSonk_C8BK476FE-v_YPkEeIZpueKVRE-Czhm69UmZJNTIZpHk2o4tfCjJ8OvnmdTSrB-KXqPdBuM0IOkXtwVtZlSzV7K3WuNDl1tY5PtSCvxQlhCAmWXlEZXQJmNm0kaS5ZnrnaW85Co45fIt8O7X9r635PKZq_yqxP07T2r0wuioIJQXZUdmPXjRASo9D-IV8X2nsFfyVlD1ahENCWh85ClsbK-FsVOY4a3n-hj1kysfVmtv8b7uXbyTMvrA1EWOUv1aOq-0HYXQcmpXxuOqs22Baif36IzGsu-lyDO7ySv36EZEC2x6KpyyV464/p.png',
  'https://uc1fd99092b60dac32caf11ab6c2.previews.dropboxusercontent.com/p/thumb/ABuCEcBhmS_sgk81FAYCHloKy3tgHhChEOt8X1K4JjXJ7JBv_puvf642blupOxBx3ycbKUndyjAoBKdCQYBZMl3ambFp7Wz0HqfxKSCs03QhXmm-0euQK8qanE0VFplc7FzGtLyQbClNBSeMJQ1JtajjlC3ZbyFX6LfNzVqJ0Sw_igVbxbWP24s0HnAZZlI_nC5d1WSX0i6MOygZIsz4-IWKAxYOWNeacX_F7EzINTyK9g1K0RbAF80_Z2PqCiHoqGAzXod5qA4pWJO1vlmXsWeEJ_v7GbCcXkiEoDaVEvPsv5lcRgKZK790YB_VAcyjyJOmu1vmUhX_1kcrrYjOdvIDW5-i0xXDy6LkWaY4Sr3yJEHN_BaHdcTmAE7Mh4RQ6vI/p.jpeg',
  'https://uc2bb841e3254fe44f232d800576.previews.dropboxusercontent.com/p/thumb/ABvxlNYlYccwf-ml7cBEixA6qHL1RKJctmXfZwZ7cT9poIc4YxckuarFyflSueuy6kp6o3CnJLWXDj6GOefKhjVYA5P7aNliDpq6KDHNSSJNnLWs5F--SbF_OCwcAvs41_Scrt-NONBZY2QqYTHxyRNtR2QmZv9qnIA7Kv4WpWSw7XJFAQuOTSfSxACU3Ok_YYQdO8cPjXRHnQx3RWCENiC5_T3R5XjNmKSS5dp3pODy3hQIlAwPZMBMhvEhDdPVIAgsKdTln-v_a6jW71kPgi2VJQJu3uLcXgtSVKpvdHIVS9rEN9Sr5RkU8VqCt5ZPArXp0vCvvm8kH8d2l6gzzvNSSnpjCiJtWLXHb-6TNXz5YdDcB8FDa3cthGdIlWI8MB0/p.jpeg',
  'https://www.globalbees.com/assets/img/gb-logo.svg'
];

export default function Partners() {
  return (
    <PartnersWrapper>
      <Title>brands that trust us</Title>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false, waitForTransition: false, stopOnLastSlide: false }}
        speed={3000}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1025: { slidesPerView: 6 },
        }}
        className="swiper-wrapper"
      >
        {CLIENTS_LOGOS.map((logo) => (
          <SwiperSlide key={logo}>
            <img src={logo} alt="logo" />
          </SwiperSlide>
        ))}
      </Swiper>
    </PartnersWrapper>
  );
}

function normalizePartnerLogoName(logo: string) {
  return logo.replace('.svg', '');
}

const Title = styled.h3`
  font-size: 1.3rem;
  font-weight:bold;
  letter-spacing: 0.02em;
  line-height: 0;
  text-transform: uppercase;
  margin-bottom: 2rem;
  text-align: center;
  opacity: 0.8;
  ${media('<=desktop')} {
    line-height: 1.5;
  }
`;

const PartnersWrapper = styled(Container)`
  .swiper-wrapper {
    will-change: transform;
    transition-timing-function: linear;
    user-select: none;
    display: flex;
    place-items: center;
    // border:1px solid red;
    margin-bottom:-35px;
  }

  .swiper-slide {
    opacity: 0.8;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;
