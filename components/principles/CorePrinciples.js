import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { corePrinciplesData } from '../../data/corePrinciples';
import {
    Leaf,
    TrendingUp,
    Lightbulb,
    Settings,
    Cpu
} from 'lucide-react';

const icons = {
    leaf: Leaf,
    'trending-up': TrendingUp,
    lightbulb: Lightbulb,
    settings: Settings,
    cpu: Cpu
};

const colorVariants = {
    darkBlue: 'from-gray-50 to-primary/15 bg-gradient-to-br',
};

const PrincipleCard = ({ principle, isActive, onClick }) => {
    const Icon = icons[principle.icon];
    const colorClass = colorVariants[principle.color];

    const bulletPoints = isActive
        ? principle.description.split('. ').filter(point => point.trim().length > 0)
        : [];

    return (
        <motion.div
            layout
            onClick={onClick}
            className={`bg-gray-50 rounded-xl overflow-hidden cursor-pointer transition-shadow duration-300
                       hover:shadow-lg border border-gray-200 relative
                       ${isActive ? 'md:col-span-2 md:row-span-2' : ''}`}
            whileHover={{ y: -5 }}
            initial={false}
        >
            <div className="p-6 md:p-8 h-full" title="Click to expand">
                <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} transition-all duration-300`} />

                <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-xl bg-white/90 backdrop-blur-sm
                                          shadow-sm border border-gray-200`}>
                                <Icon className="w-6 h-6 text-gray-800" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">
                                {principle.title}
                            </h3>
                        </div>
                    </div>

                    {!isActive && (
                        <p className="text-gray-700 text-base leading-relaxed">
                            {principle.description}
                        </p>
                    )}

                    <motion.div
                        initial={false}
                        animate={{
                            height: isActive ? 'auto' : 0,
                            opacity: isActive ? 1 : 0
                        }}
                        className="overflow-hidden"
                    >
                        {isActive && bulletPoints.length > 0 && (
                            <ul className="space-y-4 mt-4">
                                {bulletPoints.map((point, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                        <span className="text-gray-600 leading-relaxed">
                                            {point.trim()}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>
                        )}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

const CorePrinciples = () => {
    const [activePrinciple, setActivePrinciple] = useState(null);
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'ru';
    const content = corePrinciplesData[currentLang];

    return (
        <section id="core-principles" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-xl font-medium block mb-4">
                        {content.sectionTitle}
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans mb-6">
                        {content.mainTitle}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {content.description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {content.principles.map((principle) => (
                        <PrincipleCard
                            key={principle.id}
                            principle={principle}
                            isActive={activePrinciple === principle.id}
                            onClick={() => setActivePrinciple(
                                activePrinciple === principle.id ? null : principle.id
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CorePrinciples;

// упрощенный вариант карточек как на других страницах

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useTranslation } from 'next-i18next';
// import { corePrinciplesData } from '../../data/corePrinciples';


// const colorVariants = {
//     darkBlue: 'from-gray-50 to-primary/15 bg-gradient-to-br',
// };

// const PrincipleCard = ({ principle }) => {
//   const colorClass = colorVariants[principle.color];

//   return (
//     <motion.div
//       className="bg-gray-50 rounded-xl overflow-hidden transition-shadow duration-300
//                        hover:shadow-lg border border-gray-200 relative"
//       whileHover={{ y: -5 }}
//       initial={false}
//     >
//       <div className="p-6 md:p-8 h-full">
//         <div
//           className={`absolute inset-0 bg-gradient-to-br ${colorClass} transition-all duration-300`}
//         />

//         <div className="relative z-10">
//           {/* Заголовок с линией */}
//           <h3 className="text-xl font-bold text-gray-800 mb-3 sm:mb-4 text-center relative">
//             {principle.title}
//             <span className="block h-1 mt-2 bg-primary w-full"></span>
//           </h3>

//           <p className="text-gray-700 text-base leading-relaxed text-center">
//             {principle.description}
//           </p>
//         </div>
//       </div>
//     </motion.div>
//   );
// };


// const CorePrinciples = () => {
//     const [activePrinciple, setActivePrinciple] = useState(null);
//     const { i18n } = useTranslation();
//     const currentLang = i18n.language || 'ru';
//     const content = corePrinciplesData[currentLang];

//     return (
//       <section id="core-principles" className="py-20">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <span className="text-primary text-xl font-medium block mb-4">
//               {content.sectionTitle}
//             </span>
//             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans mb-6">
//               {content.mainTitle}
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               {content.description}
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
//             {content.principles.map((principle) => (
//               <PrincipleCard
//                 key={principle.id}
//                 principle={principle}
//                 isActive={activePrinciple === principle.id}
//                 onClick={() =>
//                   setActivePrinciple(
//                     activePrinciple === principle.id ? null : principle.id
//                   )
//                 }
//               />
//             ))}
//           </div>
//         </div>
//       </section>
//     );
// };

// export default CorePrinciples;
