'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Modal from '@/components/Modal';
import { CardItemInterface } from '@/interfaces';
import  Button  from '@/components/Button';
import { play } from '@/fonts';

export function Card(props: CardItemInterface) {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);


  return (
      <div id={props.url} className="flex flex-col  items-center justify-center
      gap-6 w-60 p-8 rounded-md ">
          <div className='flex flex-row items-center justify-center gap-2'>
            <Image
              src={props.imgURL}
              alt={props.label}
              width={props.imgSize}
              height={props.imgSize}
            />
            <h3 className={`${play.className} font-bold text-xl`}>{props.label}</h3>
          </div>
          <Button
            type='button'
            onClick={handleOpenModal}
            label="Detalhes"
          />
          <Modal isOpen={showModal} onClose={handleCloseModal} items={ props }/>
      </div>
)
}
