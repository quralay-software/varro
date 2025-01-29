import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ServicesContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
        service: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <section className="section-padding">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-primary">Контакты</span>
                        <h2 className="text-4xl font-bold mt-2 mb-6">Свяжитесь с нами</h2>
                        <p className="text-gray-600 mb-8">
                            Готовы обсудить ваш проект или ответить на любые вопросы о наших услугах.
                            Заполните форму, и мы свяжемся с вами в ближайшее время.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="text-2xl text-primary">📍</div>
                                <div>
                                    <h4 className="font-bold mb-1">Адрес</h4>
                                    <p className="text-gray-600">
                                        Республика Казахстан, г. Актау, БЦ Зодиак
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="text-2xl text-primary">📞</div>
                                <div>
                                    <h4 className="font-bold mb-1">Телефон</h4>
                                    <p className="text-gray-600">+7 7292 201 909</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="text-2xl text-primary">📧</div>
                                <div>
                                    <h4 className="font-bold mb-1">Email</h4>
                                    <p className="text-gray-600">ReceptDep@btmg.kz</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-lg shadow-lg p-8"
                    >
                        <h3 className="text-2xl font-bold mb-6">Запросить предложение</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Ваше имя *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Компания
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Телефон *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Интересующая услуга
                                </label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                >
                                    <option value="">Выберите услугу</option>
                                    <option value="extraction">Добыча нефти и газа</option>
                                    <option value="processing">Переработка и хранение газа</option>
                                    <option value="logistics">Продажа и логистика</option>
                                    <option value="safety">Управление безопасностью</option>
                                    <option value="maintenance">Техническое обслуживание</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Сообщение
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg 
                                         transition-all duration-300 transform hover:scale-105"
                            >
                                Отправить запрос
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServicesContact;
