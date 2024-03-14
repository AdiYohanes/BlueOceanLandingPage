'use client'
import React, { useState } from 'react';
import Image from 'next/image';

interface ModalVideoProps {
    videoSource: string;
    thumbnail: string;
}

const ModalVideo: React.FC<ModalVideoProps> = ({ videoSource, thumbnail }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="relative font-inter antialiased">
            <div className="relative min-h-0 flex flex-col justify-center bg-slate-50 overflow-hidden">
                <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-20">
                    <div className="flex justify-center">
                        <div>
                            <button
                                className="relative flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-3xl group"
                                onClick={openModal}
                                aria-label="Watch the video"
                                aria-haspopup="dialog"
                            >
                                <Image
                                    className="rounded-3xl shadow-2xl transition-shadow duration-300 ease-in-out"
                                    src={thumbnail}
                                    width="700"
                                    height="394"
                                    alt="Modal video thumbnail"
                                />
                                <svg className="absolute pointer-events-none group-hover:scale-110 transition-transform duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="72" height="72">
                                    <circle className="fill-white" cx="36" cy="36" r="36" fillOpacity=".8" />
                                    <path className="fill-indigo-500 drop-shadow-2xl" d="M44 36a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 32 29V43a.999.999 0 0 0 1.573.82l10-7A.995.995 0 0 0 44 36V36c0 .001 0 .001 0 0Z" />
                                </svg>
                            </button>

                            {modalOpen && (
                                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={closeModal} aria-hidden="true">
                                    <div className="max-w-screen-xl mx-auto">
                                        <div className="relative rounded-3xl shadow-2xl bg-black overflow-hidden">
                                            <button className="absolute top-0 right-0 m-4 text-white focus:outline-none" onClick={closeModal}>Close</button>
                                            <video className="w-full h-full object-cover" loop controls autoPlay>
                                                <source src={videoSource} type="video/mp4" />
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalVideo;




