import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import {activitiesOverviewContent} from "../../data/activitiesOverviewContent";

const ActivitiesOverview = () => {
    const router = useRouter();
    const content = activitiesOverviewContent[router.locale || "ru"];

    return (
        <section className="section-padding">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="wpo-section-title text-start">
                            <span className="text-primary">{content.sectionTitle}</span>
                            <h2 className="text-4xl font-bold mb-4">
                                {content.companyName}
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                {content.description1}
                            </p>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                {content.description2}
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[400px] overflow-hidden border-4 border-primary"
                    >
                        <Image
                            src="/images/img-3.JPG"
                            alt={content.companyName}
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ActivitiesOverview;
