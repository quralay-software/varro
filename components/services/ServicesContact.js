import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { MapPin, Phone, Mail, AlertCircle } from 'lucide-react';
import { servicesContactData } from '../../data/servicesContact';

const ContactInfo = ({ icon: Icon, title, value }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-start space-x-4 group"
    >
        <div className="text-primary p-2 bg-primary/5 rounded-lg group-hover:bg-primary/10 transition-colors duration-300">
            <Icon size={24} strokeWidth={1.5} />
        </div>
        <div>
            <h4 className="font-bold mb-1 text-lg">{title}</h4>
            <p className="text-gray-600 text-lg">{value}</p>
        </div>
    </motion.div>
);

const Input = ({ label, error, ...props }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
        </label>
        <input
            {...props}
            className={`w-full px-4 py-3 border rounded-lg transition-all duration-300
                       focus:ring-2 focus:ring-primary focus:border-transparent
                       ${error ? 'border-red-500' : 'border-gray-300'}`}
        />
        {error && (
            <p className="mt-1 text-sm text-red-500">{error}</p>
        )}
    </div>
);

const ServicesContact = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'ru';
    const content = servicesContactData[currentLang];

    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
        service: ''
    });

    const [errors, setErrors] = useState({});
    const [showComingSoon, setShowComingSoon] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.length > 100) {
            newErrors.name = 'Name is too long';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        const phoneRegex = /^\+?[\d\s-()]+$/;
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone is required';
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = 'Invalid phone format';
        }

        if (formData.message && formData.message.length > 1000) {
            newErrors.message = 'Message is too long';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const sanitizeInput = (input) => {
        return input.replace(/[<>]/g, '').trim();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: sanitizeInput(value)
        }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setShowComingSoon(true);
            setFormData({
                name: '',
                company: '',
                email: '',
                phone: '',
                message: '',
                service: ''
            });
        }
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:sticky lg:top-8"
                    >
                        <span className="text-primary text-xl font-medium">{content.sectionTitle}</span>
                        <h2 className="text-5xl font-bold mt-4 mb-6">{content.mainTitle}</h2>
                        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                            {content.description}
                        </p>

                        <div className="space-y-8">
                            <ContactInfo
                                icon={MapPin}
                                title={content.contactInfo.address.title}
                                value={content.contactInfo.address.value}
                            />
                            <ContactInfo
                                icon={Phone}
                                title={content.contactInfo.phone.title}
                                value={content.contactInfo.phone.value}
                            />
                            <ContactInfo
                                icon={Mail}
                                title={content.contactInfo.email.title}
                                value={content.contactInfo.email.value}
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-white p-8 lg:p-10 shadow-lg">
                            <h3 className="text-2xl font-bold mb-8">{content.form.title}</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input
                                        type="text"
                                        name="name"
                                        label={content.form.name.label}
                                        placeholder={content.form.name.placeholder}
                                        value={formData.name}
                                        onChange={handleChange}
                                        error={errors.name}
                                        required
                                    />
                                    <Input
                                        type="text"
                                        name="company"
                                        label={content.form.company.label}
                                        placeholder={content.form.company.placeholder}
                                        value={formData.company}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input
                                        type="email"
                                        name="email"
                                        label={content.form.email.label}
                                        placeholder={content.form.email.placeholder}
                                        value={formData.email}
                                        onChange={handleChange}
                                        error={errors.email}
                                        required
                                    />
                                    <Input
                                        type="tel"
                                        name="phone"
                                        label={content.form.phone.label}
                                        placeholder={content.form.phone.placeholder}
                                        value={formData.phone}
                                        onChange={handleChange}
                                        error={errors.phone}
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {content.form.service.label}
                                    </label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg
                                                 focus:ring-2 focus:ring-primary focus:border-transparent"
                                    >
                                        <option value="">{content.form.service.placeholder}</option>
                                        {Object.entries(content.form.service.options).map(([key, value]) => (
                                            <option key={key} value={key}>{value}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {content.form.message.label}
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder={content.form.message.placeholder}
                                        rows="4"
                                        className={`w-full px-4 py-3 border rounded-lg transition-all duration-300
                                                  focus:ring-2 focus:ring-primary focus:border-transparent
                                                  ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                                    ></textarea>
                                    {errors.message && (
                                        <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                                    )}
                                </div>

                                <motion.button
                                    type="submit"
                                    className="w-full bg-primary text-white font-bold py-4 px-6 border-none
                                             transition-all duration-300 hover:bg-primary/90
                                             transform hover:-translate-y-1"
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {content.form.submit}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>

                {/* Coming Soon Message */}
                <AnimatePresence>
                    {showComingSoon && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
                            onClick={() => setShowComingSoon(false)}
                        >
                            <motion.div
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.9 }}
                                className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl"
                                onClick={e => e.stopPropagation()}
                            >
                                <div className="flex items-center space-x-4 text-primary mb-4">
                                    <AlertCircle size={24} />
                                    <h3 className="text-xl font-bold">{content.form.title}</h3>
                                </div>
                                <p className="text-gray-600 mb-6">
                                    {content.form.comingSoon}
                                </p>
                                <button
                                    onClick={() => setShowComingSoon(false)}
                                    className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg
                                             transition-all duration-300 hover:bg-primary/90"
                                >
                                    OK
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default ServicesContact;
