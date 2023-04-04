import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Textbox from '../components/Textbox';
import { link } from 'fs'
import { useState } from 'react';

const MyPage: React.FC = () => {
  const [value, setValue] = useState('');

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      <Textbox label="Enter your name:" value={value} onChange={handleChange} />
    </div>
  );
};

