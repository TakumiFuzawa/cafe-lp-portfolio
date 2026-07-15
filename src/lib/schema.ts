import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, "お名前を入力してください")
    .max(50, "お名前は50文字以内で入力してください"),
  email: z
    .string()
    .min(1, "メールアドレスを入力してください")
    .pipe(z.email("メールアドレスの形式が正しくありません")),
  topic: z.string().min(1, "お問い合わせ種別を選択してください"),
  message: z
    .string()
    .min(10, "お問い合わせ内容は10文字以上で入力してください")
    .max(1000, "お問い合わせ内容は1000文字以内で入力してください"),
  agree: z
    .boolean()
    .refine((v) => v === true, "プライバシーポリシーへの同意が必要です"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
