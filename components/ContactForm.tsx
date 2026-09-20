'use client';

import { useState, type FormEvent } from 'react';
import { SITE } from '@/data/site';
import { ArrowRightIcon } from './icons';

interface FieldState {
  name: string;
  email: string;
  topic: string;
  message: string;
}

const initialFields: FieldState = { name: '', email: '', topic: '', message: '' };

export default function ContactForm() {
  const [fields, setFields] = useState<FieldState>(initialFields);
  const [errors, setErrors] = useState<FieldState>(initialFields);

  const onInput =
    (key: keyof FieldState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setFields((prev) => ({ ...prev, [key]: e.target.value }));
      setErrors((prev) => ({ ...prev, [key]: '' }));
    };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors = {
      name: fields.name.trim() ? '' : 'required',
      email: fields.email.trim() ? '' : 'required',
      topic: fields.topic ? '' : 'required',
      message: fields.message.trim() ? '' : 'required',
    };
    setErrors(nextErrors);
    if (nextErrors.name || nextErrors.email || nextErrors.topic || nextErrors.message) {
      return;
    }
    const subject = encodeURIComponent(`[${fields.topic}] Inquiry from ${fields.name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${fields.name.trim()}\nEmail: ${fields.email.trim()}\nTopic: ${fields.topic}\n\n${fields.message.trim()}`,
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form className="contact-form" data-contact-form noValidate onSubmit={onSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="cf-name">Name</label>
          <input
            id="cf-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={fields.name}
            onChange={onInput('name')}
            className={errors.name ? 'is-error' : undefined}
          />
        </div>
        <div className="form-field">
          <label htmlFor="cf-email">Email</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={fields.email}
            onChange={onInput('email')}
            className={errors.email ? 'is-error' : undefined}
          />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="cf-topic">Topic</label>
        <select
          id="cf-topic"
          name="topic"
          required
          value={fields.topic}
          onChange={onInput('topic')}
          className={errors.topic ? 'is-error' : undefined}
        >
          <option value="" disabled>
            Select a topic
          </option>
          <option>General inquiry</option>
          <option>Research &amp; publications</option>
          <option>Partnerships</option>
          <option>Careers</option>
          <option>Investors</option>
          <option>Media &amp; press</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="cf-message">Message</label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          required
          value={fields.message}
          onChange={onInput('message')}
          className={errors.message ? 'is-error' : undefined}
        ></textarea>
      </div>
      <div className="form-foot">
        <p className="form-note">
          Submitting opens your email client with the message composed. Nothing is sent until
          you press send.
        </p>
        <button type="submit" className="btn btn--primary btn--lg">
          Compose Message
          <span className="btn-arrow" aria-hidden="true">
            <ArrowRightIcon size={15} />
          </span>
        </button>
      </div>
    </form>
  );
}