/* eslint-disable turbo/no-undeclared-env-vars */
//@ts-nocheck
"use server";
import { z } from "zod";
import { formSchema } from "@/src/lib/schemas";

import { EmailTemplate } from "@/src/emails/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (emailFormData: z.infer<typeof formSchema>) => {
  try {
    const { error } = await resend.emails.send({
      from: `Ali Imam <${process.env.RESEND_FROM_EMAIL}>`,
      to: [emailFormData.email],
      subject: "Thanks for contacting me!",
      react: EmailTemplate({ firstName: emailFormData.firstName }), 
    });

    if (error) {
      console.log(`failed to send email: ${error.message}`);
      return { success: false, message: "Failed to send email" };
    }

    console.log(`email sent successfully to: ${emailFormData.email}`);
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.log(`an error occurred while sending the email: ${error}`);
    return {
      success: false,
      message: "An error occurred while sending the email",
    };
  }
};
