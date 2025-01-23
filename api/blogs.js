import blogImg1 from "/public/images/img-1.JPG";
import blogImg2 from "/public/images/img-2.JPG";
import blogImg3 from "/public/images/img-3.JPG";

import blogAvaterImg1 from "/public/images/blog/blog-avater/img-1.jpg";
import blogAvaterImg2 from "/public/images/blog/blog-avater/img-2.jpg";
import blogAvaterImg3 from "/public/images/blog/blog-avater/img-3.jpg";

import blogSingleImg1 from "/public/images/img-4.JPG";
import blogSingleImg2 from "/public/images/img-5.JPG";
import blogSingleImg3 from "/public/images/img-6.JPG";

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
