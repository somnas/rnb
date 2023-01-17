import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <div className='bg-gray-100'>
                <div className='lg flex py-2 items-center justify-between mx-2 gap-2'>
                    <Link href='/'>
                        <div className='flex items-center gap-2 cursor-pointer bg-gray-200 opacity-90 transition hover:opacity-100'>
                            <Image
                                src='/icons/logo-rnb.png'
                                alt='company-logo'
                                width={32}
                                height={32}
                            />
                            <p className='hidden sm:block'>
                                Roslags Näsby Bryggeri
                            </p>
                        </div>
                    </Link>
                    <div className='hidden md:flex items-center justify-between ml-4 gap-2 flex-1 max-w-xl bg-gray-200'>
                        <p>header links</p>
                        <p>header links</p>
                        <p>header links</p>
                    </div>
                    <div className='flex items-center justify-end ml-4 gap-2 max-w-xl bg-gray-200'>
                        <p className='hidden md:block'>right end button</p>
                        <p className='md:hidden'>burger</p>
                    </div>
                </div>
            </div>
        </header>
    );
}
