import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FAQ = () => {
    const { ref, inView } = useInView({ triggerOnce: true });
    const [activeIndex, setActiveIndex] = useState(null);
    const faqData = [
        {
            question: 'Apa itu Healthify ini?',
            answer: 'Healthify adalah platform informasi kesehatan yang menyediakan berbagai artikel, panduan, dan sumber daya tentang penyakit, obat-obatan, dan layanan kesehatan.',
        },
        {
            question: 'Bagaimana cara mencari informasi tentang penyakit tertentu?',
            answer: 'Anda dapat menggunakan fitur pencarian di halaman utama atau menjelajahi kategori penyakit untuk menemukan informasi yang Anda butuhkan.',
        },
        {
            question: 'Apakah semua informasi di website ini sudah terverifikasi?',
            answer: 'Kami berusaha memberikan informasi yang akurat dan terkini dengan merujuk pada sumber-sumber terpercaya serta melibatkan profesional kesehatan dalam penyusunan konten.',
        },
        {
            question: 'Bagaimana cara menghubungi dokter atau klinik melalui website ini?',
            answer: 'Setiap halaman klinik menyediakan detail kontak dan alamat klinik. Anda dapat menghubungi mereka langsung melalui nomor telepon atau alamat yang tertera.',
        },
        {
            question: 'Apakah saya bisa mendapatkan resep obat melalui website ini?',
            answer: 'Website kami tidak memberikan resep obat secara langsung. Untuk mendapatkan resep, silakan konsultasikan dengan dokter atau tenaga medis profesional.',
        },
    ];

    const toggleFAQ = index => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex flex-col lg:min-h-[843px] w-screen min-[1920px]:w-[973px] p-[34px] bg-white rounded-[40px] gap-[32px]"
        >
            <div>
                <p className="text-3xl 2xl:text-5xl font-semibold mb-[8px]">Frequently Asked Questions</p>
                <p className="lg:text-lg text-base">We are dedicated to providing thorough and professional responses to all of your inquiries.</p>
            </div>
            <div>
                {faqData.map((item, index) => {
                    const isActive = activeIndex === index;
                    return (
                        <div key={index}>
                            <div
                                onClick={() => toggleFAQ(index)}
                                className={`cursor-pointer px-4 py-3 rounded-[20px] transition-colors duration-300 ${isActive ? 'bg-[#E8F6FF]' : 'hover:bg-[#F5FAFF]'}`}
                            >
                                <div className="flex justify-between items-center gap-4">
                                    <p className="lg:text-xl text-lg font-semibold">{item.question}</p>
                                    <motion.div
                                        animate={{ rotate: isActive ? 45 : 0 }}
                                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                                        style={{
                                            flexShrink: 0,
                                            width: 48,
                                            height: 48,
                                            borderRadius: '50%',
                                            backgroundColor: '#C5E5FF',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24">
                                            <path fill="#213170" d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2" />
                                        </svg>
                                    </motion.div>
                                </div>
                            </div>

                            <AnimatePresence initial={false}>
                                {isActive && (
                                    <motion.div
                                        key="answer"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                        style={{ overflow: 'hidden' }}
                                    >
                                        <p className="lg:text-lg text-base text-justify px-4 pb-5 pt-2 text-gray-600">
                                            {item.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <hr className="my-4 border-[#E0E0E0]" />
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default FAQ;
