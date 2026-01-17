"use server";


import { db } from "@/lib/db";

export async function submitForm(formData) {
  const name = formData.get("name")?.toString().trim();
  const contact = formData.get("contact")?.toString().trim();
  const reason = formData.get("reason")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !contact || !reason) {
    throw new Error("Missing required fields");
  }

  // These parameters for validating email or phone number were taken from Stack Overflow
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[6-9]\d{9}$/;

  const isEmail = emailRegex.test(contact);
  const isPhone = phoneRegex.test(contact);

  if (!isEmail && !isPhone) {
    throw new Error("Please enter a valid email or phone number");
  }

  if (name.length < 2) {
    throw new Error("Name is too short");
  }

  await db.run(
    `INSERT INTO form_submissions 
     (name, contact, user_type, message) 
     VALUES (?, ?, ?, ?)`,
    [name, contact, reason, message]
  );

  return { success: true };
}



