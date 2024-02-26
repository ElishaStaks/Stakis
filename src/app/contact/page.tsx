/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable no-continue */

'use client';

import Image from 'next/image';
import type { ChangeEvent, FormEvent } from 'react';
import React, { useState } from 'react';
import { toast } from 'sonner';

import Button from '@/components/Button';

const initialFormData = {
  name: '',
  email: '',
  mobile: '',
  message: '',
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isLoading, setLoading] = useState(false);

  const handleFocusEvent = (
    e: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const element = e.currentTarget;
    element.classList.remove('border-red-500');
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;

    let hasEmptyFields = false;
    let emailFormatValid = true;

    const fieldsToCheck = ['name', 'email', 'message'];

    for (const fieldName of fieldsToCheck) {
      const element = form.elements.namedItem(fieldName) as HTMLInputElement;

      if (!element) {
        continue;
      }

      if (element.value.trim() === '') {
        // Empty field found
        hasEmptyFields = true;
        element.classList.add('border-red-500');
      }

      if (
        fieldName === 'email' &&
        element.value.trim() !== '' &&
        !element.value.includes('@')
      ) {
        // Email without @ found
        emailFormatValid = false;
        toast.error('Please include an @ in the email address');
        element.classList.add('border-red-500');
      }

      if (!hasEmptyFields && emailFormatValid) {
        element.classList.remove('border-red-500');
      }
    }

    if (hasEmptyFields) {
      toast.error('Please fill out all fields');
      return;
    }

    if (!emailFormatValid) {
      return;
    }

    setLoading(true);

    const url = process.env.NEXT_PUBLIC_STAKIS_BACKEND_URL;

    // Send form data to the backend
    const response = await fetch(`${url}/api/send-email`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setLoading(false);
      toast.success('Thank you! Your message has been received!');
      // Clear the form data
      setFormData(initialFormData);
    } else {
      setLoading(false);
      toast.error('Oops! Something went wrong while submitting the form.');
    }
  };
  return (
    <section className="relative mx-auto max-w-[100rem] xl:max-w-[70rem]">
      <div className="max-container padding-container py-[2rem] lg:py-[4rem]">
        <div className="w-full max-w-[67.5rem]">
          <div className="max-w-[42rem]">
            <h1 className="text-4xl font-medium leading-tight text-white sm:text-5xl md:text-5xl lg:text-6xl">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Let's <span className="text-text">connect</span>
            </h1>
          </div>
          <div className="relative gap-5 pt-[2rem] md:grid md:grid-cols-2 md:pt-[3rem]">
            <div className="flex flex-col justify-between pt-[1rem] md:pt-[0rem]">
              <div className="max-w-[24rem] pb-[2rem]">
                <p>
                  Get started by completing the form below. Our team will get in
                  touch with you within two business days.
                </p>
                <div className="flex flex-col pt-[2rem]">
                  <div className="flex items-center gap-x-2">
                    <Image
                      src="/svgs/mail-icon.svg"
                      alt="Mail icon"
                      width={24}
                      height={24}
                    />
                    <div className="text-white">elisha@stakis.com.au</div>
                  </div>

                  <div className="flex items-center gap-x-2">
                    <Image
                      src="/svgs/phone-icon.svg"
                      alt="Phone icon"
                      width={24}
                      height={24}
                    />
                    <div className="text-white">+61 430177749</div>
                  </div>
                </div>
              </div>
            </div>
            <form
              className="grid-rows-gap-8 flex flex-col items-start"
              onSubmit={handleSubmit}
            >
              <input
                onClick={handleFocusEvent}
                type="text"
                maxLength={256}
                placeholder="Name"
                id="name"
                name="name"
                className="mb-4 h-auto min-h-[2rem] w-full rounded border bg-transparent p-2 px-[1rem] leading-tight text-text"
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                onClick={handleFocusEvent}
                type="text"
                maxLength={256}
                placeholder="Email"
                id="email"
                name="email"
                className="mb-4 h-auto min-h-[2rem] w-full rounded border bg-transparent p-2 px-[1rem] leading-tight text-text"
                value={formData.email}
                onChange={handleInputChange}
              />
              <input
                onClick={handleFocusEvent}
                type="text"
                maxLength={256}
                placeholder="Mobile"
                id="mobile"
                name="mobile"
                className="mb-4 h-auto min-h-[2rem] w-full rounded border bg-transparent p-2 px-[1rem] leading-tight text-text"
                value={formData.mobile}
                onChange={handleInputChange}
              />
              <textarea
                onClick={handleFocusEvent}
                maxLength={256}
                placeholder="Message"
                id="message"
                name="message"
                className="mb-4 h-auto min-h-[11rem] w-full rounded border bg-transparent p-2 px-[1rem] leading-tight text-text"
                value={formData.message}
                onChange={handleInputChange}
              />

              <Button
                className="rounded-md border bg-background p-3 tracking-tight hover:bg-buttonHover md:text-sm"
                type="submit"
                title="SUBMIT"
                variant=""
                isLoading={isLoading}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
