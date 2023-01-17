import React from 'react';
import Image from 'next/image';

export default function Header() {
    return (
        <header>
            <div className='bg-gray-100'>
                <div className='lg flex py-2 items-center mx-2 gap-2'>
                    <div className='flex items-center gap-2 cursor-pointer bg-gray-400 opacity-90 transition hover:opacity-100'>
                        <Image
                            src='/icons/logo-rnb.png'
                            alt='company-logo'
                            width={32}
                            height={32}
                        />
                        <p>
                            Roslags Näsby Bryggeri
                        </p>
                    </div>
                    <p>this is the header</p>
                </div>
            </div>
        </header>
    );
}
