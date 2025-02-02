import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { principlesHeroData } from '../../data/principlesHero';
import { Leaf, Lightbulb, Handshake } from 'lucide-react';

const Badge = ({ icon: Icon, label, value, description, position, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: position === 'left' ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay }}
            className="bg-white/10 backdrop-blur-sm p-4 md:p-6 lg:p-8 rounded-lg transform hover:scale-105 transition-transform duration-300"
        >
            <div className="text-white text-center">
                <Icon className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 text-primary" strokeWidth={1.5} />
                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 md:mb-2">
                    {value}
                </div>
                <div className="text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
                    {label}
                </div>
            </div>
        </motion.div>
    );
};

const PrinciplesHero = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'ru';
    const data = principlesHeroData[currentLang];

    const scrollToPrinciples = () => {
        const principlesSection = document.getElementById('core-principles');
        principlesSection?.scrollIntoView({ behavior: 'smooth' });
    };

    const icons = {
        '🌱': Leaf,
        '💡': Lightbulb,
        '🤝': Handshake
    };

    return (
        <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={data.image.src}
                    alt={data.image.alt}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative h-full container mx-auto px-4">
                <div className="flex flex-col justify-center h-full max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary font-semibold mb-4 block">
                            {data.company}
                        </span>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-arial font-sans font-bold text-white mb-4 md:mb-6">
                            {data.title}
                        </h1>
                        <h2 className="text-xl md:text-2xl text-primary mb-3 md:mb-4 font-sans">
                            {data.subtitle}
                        </h2>
                        <p className="text-base md:text-lg text-gray-200 mb-6 md:mb-8 max-w-2xl">
                            {data.description}
                        </p>
                        <button
                            onClick={scrollToPrinciples}
                            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-none border-none
                                     transition-all duration-300 transform hover:scale-105"
                        >
                            {data.button}
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Mobile Badges */}
            <div className="absolute md:hidden bottom-4 left-4 right-4 grid grid-cols-3 gap-2 bg-black/20 p-2 rounded-lg">
                {data.badges.map((badge) => (
                    <div key={badge.id} className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                        <div className="text-white text-center">
                            <div className="text-2xl font-bold mb-1">{badge.value}</div>
                            <div className="text-xs font-semibold">{badge.label}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Desktop Badges */}
            {data.badges.map((badge, index) => {
                const Icon = icons[badge.icon];
                const positions = ['right', 'left', 'right'];
                const topPositions = ['20%', '45%', '70%'];
                const rightPositions = ['10%', '15%', '20%'];

                return (
                    <div
                        key={badge.id}
                        className={`hidden md:block absolute top-[${topPositions[index]}] right-[${rightPositions[index]}]`}
                    >
                        <Badge
                            icon={Icon}
                            label={badge.label}
                            value={badge.value}
                            description={badge.description}
                            position={positions[index]}
                            delay={0.5 + index * 0.2}
                        />
                    </div>
                );
            })}
        </section>
    );
};

export default PrinciplesHero;
