import blogImg1 from "/public/images/img1.jpg";
import blogImg2 from "/public/images/img2.jpg";
import blogImg3 from "/public/images/img3.jpg";

import blogAvaterImg1 from "/public/images/blog/blog-avater/img1.jpg";
import blogAvaterImg2 from "/public/images/blog/blog-avater/img2.jpg";
import blogAvaterImg3 from "/public/images/blog/blog-avater/img3.jpg";

import blogSingleImg1 from "/public/images/img4.jpg";
import blogSingleImg2 from "/public/images/img5.jpg";
import blogSingleImg3 from "/public/images/img6.jpg";

const blogs = [
    {
        id: '1',
        title: 'Инновации в добыче нефти и газа',
        slug: 'innovations-in-oil-and-gas-extraction',
        screens: blogImg1,
        description: 'Мы внедряем передовые технологии для повышения эффективности добычи и минимизации воздействия на окружающую среду.',
        author: 'Алексей Иванов',
        authorTitle: 'Главный инженер',
        authorImg: blogAvaterImg1,
        create_at: '14 АВГ, 23',
        blogSingleImg: blogSingleImg1,
        comment: '35',
        blClass: 'format-standard-image',
    },
    {
        id: '2',
        title: 'Устойчивое развитие в нефтегазовой отрасли',
        slug: 'sustainable-development-in-oil-and-gas',
        screens: blogImg2,
        description: 'Мы стремимся к устойчивому развитию, реализуя меры по минимизации выбросов и сокращению использования воды.',
        author: 'Мария Петрова',
        authorTitle: 'Руководитель отдела устойчивого развития',
        authorImg: blogAvaterImg2,
        create_at: '16 АВГ, 23',
        blogSingleImg: blogSingleImg2,
        comment: '80',
        blClass: 'format-standard-image',
        sClass: 's2',
    },
    {
        id: '3',
        title: 'Боранкольский ГПЗ: технологии и перспективы',
        slug: 'borankol-gas-processing-plant',
        screens: blogImg3,
        description: 'Наш газоперерабатывающий завод обеспечивает стабильную переработку газа и поставку продукции на внутренний и внешний рынки.',
        author: 'Дмитрий Смирнов',
        authorTitle: 'Технический директор',
        authorImg: blogAvaterImg3,
        create_at: '18 АВГ, 23',
        blogSingleImg: blogSingleImg3,
        comment: '95',
        blClass: 'format-video',
        sClass: 's2',
    },
];
export default blogs;
