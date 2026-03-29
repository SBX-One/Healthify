import patient from '../../assets/patient.webp';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

const cardVariant = delay => ({
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease: 'easeOut' },
});

export const Feature = () => {
    const navigate = useNavigate();
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    return (
        <div ref={ref} className="grid grid-cols-1 h-full w-full sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <motion.div {...cardVariant(0)} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }} className="items h-full self-stretch group" onClick={() => navigate('/clinic')}>
                <div className="BOX hover:bg-[#213170] min-h-[350px] flex flex-col justify-between w-full h-full hover:text-white transition-all duration-300">
                    <div className="flex justify-between">
                        <p className="lg:text-2xl 2xl:text-4xl text-2xl font-semibold w-1/2">Clinics Listed</p>
                        <div className="circle-btn bg-[#C5E5FF] group-hover:rotate-45 group-hover:bg-white group-hover:border-[3px] group-hover:border-[#C5E5FF] group-hover:border-solid">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                                <path
                                    fill="black"
                                    className="group-hover:fill-[#213170]"
                                    fillRule="evenodd"
                                    d="M9 6.75a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V7.81L6.53 18.53a.75.75 0 0 1-1.06-1.06L16.19 6.75z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <p className="2xl:text-7xl text-5xl font-semibold">12K</p>
                        <p className="lg:text-lg text-base">
                            <strong>12K+</strong> Clinics have been listed into our services. Helping you find the perfect one
                        </p>
                    </div>
                </div>
            </motion.div>

            <motion.div {...cardVariant(0.15)} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }} className="items h-full self-stretch group" onClick={() => navigate('/pharmacy')}>
                <div className="BOX hover:bg-[#213170] min-h-[350px] flex flex-col justify-between w-full h-full hover:text-white transition-all duration-300">
                    <div className="flex justify-between">
                        <p className="lg:text-2xl 2xl:text-4xl text-2xl font-semibold w-1/2">Supported Pharmacy</p>
                        <div className="circle-btn bg-[#C5E5FF] group-hover:rotate-45 group-hover:bg-white group-hover:border-[3px] group-hover:border-[#C5E5FF] group-hover:border-solid">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                                <path
                                    fill="black"
                                    className="group-hover:fill-[#213170]"
                                    fillRule="evenodd"
                                    d="M9 6.75a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V7.81L6.53 18.53a.75.75 0 0 1-1.06-1.06L16.19 6.75z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <p className="2xl:text-7xl text-5xl font-semibold">16K</p>
                        <p className="lg:text-lg text-base">
                            <strong>12K+</strong> Pharmacys have been listed into our services. Helping you find the perfect one
                        </p>
                    </div>
                </div>
            </motion.div>

            <motion.div {...cardVariant(0.3)} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }} className="items h-full self-stretch">
                <div className="BOX min-h-[350px] w-full h-full flex flex-col justify-between">
                    <div className="flex justify-between">
                        <p className="lg:text-2xl 2xl:text-4xl text-2xl font-semibold w-1/2">Our Patient</p>
                    </div>
                    <div className="flex flex-col justify-between">
                        <img src={patient} alt="patient image" width={200} style={{ backgroundColor: 'white' }} className="my-4" />
                        <p className="lg:text-lg text-base">
                            Over <strong>200K+</strong> Patient we help to finding their best choice for healthy need
                        </p>
                    </div>
                </div>
            </motion.div>

            <motion.div {...cardVariant(0.45)} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }} className="items h-full self-stretch group" onClick={() => navigate('/disease')}>
                <div className="BOX hover:bg-[#213170] min-h-[350px] flex flex-col justify-between w-full h-full hover:text-white transition-all duration-300">
                    <div className="flex justify-between">
                        <p className="lg:text-2xl 2xl:text-4xl text-2xl font-semibold w-1/2">Find More</p>
                        <div className="circle-btn bg-[#C5E5FF] group-hover:rotate-45 group-hover:bg-white group-hover:border-[3px] group-hover:border-[#C5E5FF] group-hover:border-solid">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                                <path
                                    fill="black"
                                    className="group-hover:fill-[#213170]"
                                    fillRule="evenodd"
                                    d="M9 6.75a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V7.81L6.53 18.53a.75.75 0 0 1-1.06-1.06L16.19 6.75z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <p className="lg:text-lg text-base">Browse Disease or find drugs on your nearest pharmacy!</p>
                </div>
            </motion.div>
        </div>
    );
};
