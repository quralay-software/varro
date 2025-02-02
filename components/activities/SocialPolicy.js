import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { socialPolicyContent } from '../../data/socialPolicyContent';
import { Users, Heart, Handshake, CircleDot } from 'lucide-react';

const iconComponents = {
    Users: Users,
    Heart: Heart,
    Handshake: Handshake
};

const SocialPolicy = () => {
    const router = useRouter();
    const content = socialPolicyContent[router.locale || "ru"];

    return (
        <section className="section-padding">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-xl">{content.sectionTitle}</span>
                    <h2 className="text-5xl font-bold mt-3">{content.mainTitle}</h2>
                    <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
                        {content.description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {content.policies.map((policy, index) => {
                        const IconComponent = iconComponents[policy.icon];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="bg-white p-8 hover:shadow-xl transition-shadow"
                            >
                                <div className="text-primary mb-6">
                                    <IconComponent size={48} />
                                </div>
                                <h3 className="text-2xl font-bold mb-6">{policy.title}</h3>
                                <ul className="space-y-4">
                                    {policy.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start text-lg text-gray-600">
                                            <CircleDot className="text-primary mr-3 h-5 w-5 flex-shrink-0 mt-1" />
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 bg-gradient-to-br from-primary/10 to-secondary/10 p-10"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {content.stats.map((stat, index) => (
                            <div key={index} className="p-4">
                                <div className="text-4xl font-bold text-primary mb-3">{stat.value}</div>
                                <div className="text-lg text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SocialPolicy;
