"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormValues } from "@/lib/schema";
import { CONTACT_TOPICS } from "@/lib/constants";

const inputClass =
  "w-full rounded-lg border border-cream-dark bg-white px-4 py-3 text-ink placeholder:text-muted/60 focus:border-pine focus:outline-2 focus:outline-pine/40 aria-[invalid=true]:border-red-600";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", topic: "", message: "", agree: false },
  });

  // 送信は仮実装。実案件では Server Action やフォームAPI(Resend 等)に差し替える
  const onSubmit = async (values: ContactFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("submitted (mock):", values);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-2xl bg-white p-10 text-center shadow-sm"
      >
        <p className="font-serif text-xl font-semibold text-pine">
          お問い合わせを受け付けました
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          内容を確認のうえ、2〜3営業日以内にご返信いたします。
          <br />
          お急ぎの場合はお電話にてお問い合わせください。
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-6 rounded-2xl bg-white p-6 shadow-sm md:p-10"
    >
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-cocoa">
          お名前 <span className="text-red-600">*</span>
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          placeholder="山田 花子"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={inputClass}
          {...register("name")}
        />
        {errors.name && (
          <p id="name-error" role="alert" className="mt-1.5 text-sm text-red-600">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-cocoa">
          メールアドレス <span className="text-red-600">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="example@email.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={inputClass}
          {...register("email")}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1.5 text-sm text-red-600">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="topic" className="mb-1.5 block text-sm font-medium text-cocoa">
          お問い合わせ種別 <span className="text-red-600">*</span>
        </label>
        <select
          id="topic"
          aria-invalid={!!errors.topic}
          aria-describedby={errors.topic ? "topic-error" : undefined}
          className={inputClass}
          {...register("topic")}
        >
          <option value="">選択してください</option>
          {CONTACT_TOPICS.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
        {errors.topic && (
          <p id="topic-error" role="alert" className="mt-1.5 text-sm text-red-600">
            {errors.topic.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-cocoa">
          お問い合わせ内容 <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          rows={6}
          placeholder="ご予約希望日時、人数などをご記入ください"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={inputClass}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1.5 text-sm text-red-600">
            {errors.message.message}
          </p>
        )}
      </div>

      <div>
        <div className="flex items-start gap-2">
          <input
            id="agree"
            type="checkbox"
            aria-invalid={!!errors.agree}
            aria-describedby={errors.agree ? "agree-error" : undefined}
            className="mt-1 h-4 w-4 accent-pine"
            {...register("agree")}
          />
          <label htmlFor="agree" className="text-sm leading-relaxed text-ink">
            <a
              href="/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pine underline underline-offset-4 hover:text-pine-dark"
            >
              プライバシーポリシー
              <span className="sr-only">(新しいタブで開きます)</span>
            </a>
            に同意する <span className="text-red-600">*</span>
          </label>
        </div>
        {errors.agree && (
          <p id="agree-error" role="alert" className="mt-1.5 text-sm text-red-600">
            {errors.agree.message}
          </p>
        )}
      </div>

      <div className="text-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-full bg-pine px-10 py-3 text-sm font-medium text-white transition-colors hover:bg-pine-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pine disabled:opacity-60"
        >
          {isSubmitting ? "送信中…" : "送信する"}
        </button>
      </div>
    </form>
  );
}
