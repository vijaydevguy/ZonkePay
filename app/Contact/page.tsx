"use client";

import React, { useState } from "react";
import mail from "../../assets/mail.png";
import phone from "../../assets/phone.png";
import location from "../../assets/location.png";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import flag from "../../assets/SAflag.png";
import pattern from "../../assets/contact_pattern.png";
import Navbar from "../../components/Navbar/page";

const RECAPTCHA_SITE_KEY = "6LfDQ2IrAAAAAMTUHv4015vTVBMJMUxkcqfNr6qW";

type ContactFormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  identity: string;
  message: string;
};

type FormErrors = {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  identity?: string;
  message?: string;
  recaptcha?: string;
  form?: string;
};

const ContactPage = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    identity: "",
    message: "",
  });

  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateName = (name: string, field: string): string | undefined => {
    if (!name.trim()) return `${field} is required`;
    if (name.length < 2) return `${field} must be at least 2 characters`;
    if (!/^[a-zA-Z\s-']+$/.test(name))
      return `${field} can only contain letters, spaces, hyphens and apostrophes`;
    return;
  };

  const validateEmail = (email: string): string | undefined => {
    if (!email) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return "Please enter a valid email address";
    const gmailMatch = email.match(/^([^\s@]+)@gmail\.com(.*)$/i);
    if (gmailMatch && gmailMatch[2] && gmailMatch[2].trim() !== "") {
      return "No characters are allowed after @gmail.com";
    }
    return;
  };

  const validatePhone = (phone: string): string | undefined => {
    if (!phone) return "Phone number is required";
    if (!/^\d{10}$/.test(phone))
      return "Must be a 10-digit number";
    return;
  };

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "firstName":
        return validateName(value, "First name");
      case "lastName":
        return validateName(value, "Last name");
      case "email":
        return validateEmail(value);
      case "phone":
        return validatePhone(value);
      case "identity":
        if (!value) return "Please select how you identify yourself";
        return;
      case "message":
        if (!value.trim()) return "Message is required";
        if (value.length < 10) return "Message must be at least 10 characters";
        return;
      default:
        return;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "").substring(0, 10);
      setFormData((prev) => ({
        ...prev,
        [name]: digitsOnly,
      }));
      setErrors((prev) => ({
        ...prev,
        [name]: validatePhone(digitsOnly),
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
    setErrors((prev) => ({
      ...prev,
      recaptcha: token ? undefined : "Please verify you're not a robot",
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    Object.entries(formData).forEach(([name, value]) => {
      const error = validateField(name, value);
      if (error) newErrors[name as keyof FormErrors] = error;
    });

    if (!recaptchaToken) {
      newErrors.recaptcha = "Please verify you're not a robot";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_r1vnbb2",
        "template_k0vme5m",
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          from_email: formData.email,
          identity: formData.identity,
          message: formData.message,
        },
        {
          publicKey: "BwoLNCmJSzu3vqyz5",
        }
      );

      setIsSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        identity: "",
        message: "",
      });
    } catch (err) {
      console.error("Failed to send message:", err);
      setErrors((prev) => ({
        ...prev,
        form: "Failed to send message. Please try again.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row gap-6 px-[5%] py-12 overflow-x-clip md:justify-center">
        <div className="fixed left-0 bottom-0 z-0 w-[180px] md:w-[300px] pointer-events-none select-none">
          <Image src={pattern} alt="pattern" className="w-full h-auto" />
        </div>

        <div className="md:w-1/2">
          <h2 className="text-[#A93922] md:text-[32px] text-[24px] font-bold mb-4">
            Contact Us
          </h2>

          <div className="mb-8">
            <h2 className="text-[20px] font-semibold mb-2">
              Have a question or need support?
            </h2>
            <p className="text-[20px]">
              Our team is here to assist you. Simply fill out the form or
              contact us directly.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <h2 className="flex flex-row gap-2 items-center text-[20px]">
              <span>
                <Image
                  src={mail}
                  alt="mail icon"
                  width={20}
                  height={20}
                  className="w-[24px] h-[24px]"
                />
              </span>
              support@zonkepay.com
            </h2>
            <h2 className="flex flex-row gap-2 items-center text-[20px]">
              <span>
                <Image
                  src={phone}
                  alt="phone icon"
                  width={20}
                  height={20}
                  className="w-[24px] h-[24px]"
                />
              </span>
              +27 [Your Number]
            </h2>
            <h2 className="flex flex-row gap-2 items-center text-[20px]">
              <span>
                <Image
                  src={location}
                  alt="location icon"
                  width={20}
                  height={20}
                  className="w-[24px] h-[24px]"
                />
              </span>
              South Africa
            </h2>
          </div>
        </div>

        <div className="md:w-1/2">
          {isSubmitted ? (
            <div className="text-center py-8">
              <h3 className="text-2xl font-semibold text-[#A93922] mb-2">
                Thank You!
              </h3>
              <p className="text-lg">
                Your message has been sent successfully. {`We'll`} get back to
                you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errors.form && (
                <div className="p-2 bg-red-100 text-red-700 rounded-md text-sm">
                  {errors.form}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`mt-1 block w-full px-3 py-2 border ${
                      errors.firstName ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm focus:outline-none focus:ring-[#A93922] focus:border-[#A93922] bg-white`}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`mt-1 block w-full px-3 py-2 border ${
                      errors.lastName ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm focus:outline-none focus:ring-[#A93922] focus:border-[#A93922] bg-white`}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm bg-white focus:outline-none focus:ring-[#A93922] focus:border-[#A93922]`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-row gap-2 items-center">
                  <span>
                    <Image src={flag} alt="SA Flag" width={30} height={20} />
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    maxLength={10}
                    placeholder="1234567890"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`mt-1 block w-full px-3 py-2 bg-white border ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm focus:outline-none focus:ring-[#A93922] focus:border-[#A93922]`}
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="identity"
                  className="block text-sm font-medium text-gray-700"
                >
                  How do you identify yourself?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="identity"
                  name="identity"
                  required
                  value={formData.identity}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 bg-white py-2 border ${
                    errors.identity ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-[#A93922] focus:border-[#A93922]`}
                >
                  <option value="">Select your role</option>
                  <option value="Merchant">Merchant</option>
                  <option value="Seller">Seller</option>
                  <option value="Consumer">Consumer</option>
                  <option value="Partner">Partner</option>
                  <option value="Other">Other</option>
                </select>
                {errors.identity && (
                  <p className="mt-1 text-sm text-red-600">{errors.identity}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className={`mt-1 block w-full bg-white px-3 py-2 border ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-[#A93922] focus:border-[#A93922] max-h-[200px]`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              <div className="flex flex-col items-center">
                <ReCAPTCHA
                  sitekey={RECAPTCHA_SITE_KEY}
                  onChange={handleRecaptchaChange}
                />
                {errors.recaptcha && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.recaptcha}
                  </p>
                )}
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 text-sm font-medium text-white bg-[#FA5117] rounded-md hover:bg-[#fa3517] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactPage;

// "use client";

// import React, { useState } from "react";
// import mail from "../../assets/mail.png";
// import phone from "../../assets/phone.png";
// import location from "../../assets/location.png";
// import Image from "next/image";
// import ReCAPTCHA from "react-google-recaptcha";
// import emailjs from "@emailjs/browser";
// import flag from "../../assets/SAflag.png";
// import pattern from "../../assets/contact_pattern.png";

// // import Button from "../../components/Button/page";

// import Navbar from "../../components/Navbar/page";

// type ContactFormData = {
//   firstName: string;
//   lastName: string;
//   phone: string;
//   email: string;
//   identity: string;
//   message: string;
// };

// type FormErrors = {
//   firstName?: string;
//   lastName?: string;
//   phone?: string;
//   email?: string;
//   identity?: string;
//   message?: string;
//   recaptcha?: string;
//   form?: string;
// };

// // const RECAPTCHA_SITE_KEY = "6Lf_SVsrAAAAAJE-1WSvMXGbSdXukogLED_tmSzb";
// // const RECAPTCHA_SITE_KEY = "6LdtmMMqAAAAAO0AAfhBlfqofdA-z8CJLNDJUMbM";

// //new vercel key
// const RECAPTCHA_SITE_KEY = "6LfDQ2IrAAAAAMTUHv4015vTVBMJMUxkcqfNr6qW";

// const ContactPage = () => {
//   const [formData, setFormData] = useState<ContactFormData>({
//     firstName: "",
//     lastName: "",
//     phone: "",
//     email: "",
//     identity: "",
//     message: "",
//   });

//   const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [errors, setErrors] = useState<FormErrors>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Validation functions
//   const validateName = (name: string, field: string): string | undefined => {
//     if (!name.trim()) return `${field} is required`;
//     if (name.length < 2) return `${field} must be at least 2 characters`;
//     if (!/^[a-zA-Z\s-']+$/.test(name))
//       return `${field} can only contain letters, spaces, hyphens and apostrophes`;
//     return;
//   };

//   const validateEmail = (email: string): string | undefined => {
//     if (!email) return "Email is required";
//     // Basic email format check
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
//       return "Please enter a valid email address";
//     // If email is gmail.com, ensure nothing after gmail.com
//     const gmailMatch = email.match(/^([^\s@]+)@gmail\.com(.*)$/i);
//     if (gmailMatch && gmailMatch[2] && gmailMatch[2].trim() !== "") {
//       return "No characters are allowed after @gmail.com";
//     }
//     return;
//   };

//   const validatePhone = (phone: string): string | undefined => {
//     if (!phone) return "Phone number is required";
//     const digitsOnly = phone.replace(/\D/g, "");
//     if (!/^0\d{9}$/.test(digitsOnly))
//       return "Must be a 10-digit number starting with 0 (e.g., 0123456789)";
//     return;
//   };

//   const validateField = (name: string, value: string): string | undefined => {
//     switch (name) {
//       case "firstName":
//         return validateName(value, "First name");
//       case "lastName":
//         return validateName(value, "Last name");
//       case "email":
//         return validateEmail(value);
//       case "phone":
//         return validatePhone(value);
//       case "identity":
//         if (!value) return "Please select how you identify yourself";
//         return;
//       case "message":
//         if (!value.trim()) return "Message is required";
//         if (value.length < 10) return "Message must be at least 10 characters";
//         return;
//       default:
//         return;
//     }
//   };

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     const { name, value } = e.target;

//     // Special handling for phone input
//     if (name === "phone") {
//       const numericValue = value.replace(/\D/g, "");
//       setFormData((prev) => ({
//         ...prev,
//         [name]: numericValue,
//       }));
//       setErrors((prev) => ({
//         ...prev,
//         [name]: validatePhone(numericValue),
//       }));
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//       setErrors((prev) => ({
//         ...prev,
//         [name]: validateField(name, value),
//       }));
//     }
//   };

//   const handleRecaptchaChange = (token: string | null) => {
//     setRecaptchaToken(token);
//     setErrors((prev) => ({
//       ...prev,
//       recaptcha: token ? undefined : "Please verify you're not a robot",
//     }));
//   };

//   const validateForm = (): boolean => {
//     const newErrors: FormErrors = {};
//     Object.entries(formData).forEach(([name, value]) => {
//       const error = validateField(name, value);
//       if (error) newErrors[name as keyof FormErrors] = error;
//     });

//     if (!recaptchaToken) {
//       newErrors.recaptcha = "Please verify you're not a robot";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     setIsSubmitting(true);

//     try {
//       await emailjs.send(
//         "service_r1vnbb2",
//         "template_k0vme5m",
//         {
//           firstName: formData.firstName,
//           lastName: formData.lastName,
//           phone: formData.phone,
//           from_email: formData.email,
//           identity: formData.identity,
//           message: formData.message,
//         },
//         {
//           publicKey: "BwoLNCmJSzu3vqyz5",
//         }
//       );

//       setIsSubmitted(true);
//       setFormData({
//         firstName: "",
//         lastName: "",
//         phone: "",
//         email: "",
//         identity: "",
//         message: "",
//       });
//     } catch (err) {
//       console.error("Failed to send message:", err);
//       setErrors((prev) => ({
//         ...prev,
//         form: "Failed to send message. Please try again.",
//       }));
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <>
//        <Navbar />

//       {/* <div className="flex px-[5%] pt-6">
//         <Button text="back" secondary link="/" className="w-fit md:w-auto" />
//       </div> */}
//       <div className="flex flex-col md:flex-row gap-6 px-[5%] py-12 overflow-x-clip md:justify-center">
//         <div className="fixed left-0 bottom-0 z-0 w-[180px] md:w-[300px] pointer-events-none select-none">
//           <Image src={pattern} alt="pattern" className="w-full h-auto" />
//         </div>

//         {/* left */}
//         <div className="md:w-1/2">
//           <h2 className="text-[#A93922] md:text-[32px] text-[24px] font-bold mb-4">
//             Contact Us
//           </h2>

//           <div className="mb-8">
//             <h2 className="text-[20px] font-semibold mb-2">
//               Have a question or need support?
//             </h2>
//             <p className="text-[20px]">
//               Our team is here to assist you. Simply fill out the form or
//               contact us directly.
//             </p>
//           </div>

//           <div className="flex flex-col justify-center gap-4">
//             <h2 className="flex flex-row gap-2 items-center text-[20px]">
//               <span>
//                 <Image
//                   src={mail}
//                   alt="mail icon"
//                   width={20}
//                   height={20}
//                   className="w-[24px] h-[24px]"
//                 />
//               </span>
//               support@zonkepay.com
//             </h2>
//             <h2 className="flex flex-row gap-2 items-center text-[20px]">
//               <span>
//                 <Image
//                   src={phone}
//                   alt="phone icon"
//                   width={20}
//                   height={20}
//                   className="w-[24px] h-[24px]"
//                 />
//               </span>
//               +27 [Your Number]
//             </h2>
//             <h2 className="flex flex-row gap-2 items-center text-[20px]">
//               <span>
//                 <Image
//                   src={location}
//                   alt="location icon"
//                   width={20}
//                   height={20}
//                   className="w-[24px] h-[24px]"
//                 />
//               </span>
//               South Africa
//             </h2>
//           </div>
//         </div>

//         {/* right */}
//         <div className="md:w-1/2">
//           {isSubmitted ? (
//             <div className="text-center py-8">
//               <h3 className="text-2xl font-semibold text-[#A93922] mb-2">
//                 Thank You!
//               </h3>
//               <p className="text-lg">
//                 Your message has been sent successfully. {`We'll`} get back to
//                 you soon.
//               </p>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="space-y-4">
//               {errors.form && (
//                 <div className="p-2 bg-red-100 text-red-700 rounded-md text-sm">
//                   {errors.form}
//                 </div>
//               )}

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label
//                     htmlFor="firstName"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     First Name <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="firstName"
//                     name="firstName"
//                     required
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     className={`mt-1 block w-full px-3 py-2 border ${
//                       errors.firstName ? "border-red-500" : "border-gray-300"
//                     } rounded-md shadow-sm focus:outline-none focus:ring-[#A93922] focus:border-[#A93922] bg-white`}
//                   />
//                   {errors.firstName && (
//                     <p className="mt-1 text-sm text-red-600">
//                       {errors.firstName}
//                     </p>
//                   )}
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="lastName"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Last Name <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="lastName"
//                     name="lastName"
//                     required
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     className={`mt-1 block w-full px-3 py-2 border ${
//                       errors.lastName ? "border-red-500" : "border-gray-300"
//                     } rounded-md shadow-sm focus:outline-none focus:ring-[#A93922] focus:border-[#A93922] bg-white`}
//                   />
//                   {errors.lastName && (
//                     <p className="mt-1 text-sm text-red-600">
//                       {errors.lastName}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Email <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={`mt-1 block w-full px-3 py-2 border ${
//                     errors.email ? "border-red-500" : "border-gray-300"
//                   } rounded-md shadow-sm bg-white focus:outline-none focus:ring-[#A93922] focus:border-[#A93922]`}
//                 />
//                 {errors.email && (
//                   <p className="mt-1 text-sm text-red-600">{errors.email}</p>
//                 )}
//               </div>

//               <div>
//                 <label
//                   htmlFor="phone"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Phone Number <span className="text-red-500">*</span>
//                 </label>
//                 <div className="flex flex-row gap-2 items-center">
//                   <span>
//                     <Image src={flag} alt="SA Flag" width={30} height={20} />
//                   </span>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     required
//                     pattern="[0-9]{10}"
//                     inputMode="numeric"
//                     maxLength={10}
//                     placeholder="0123456789"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className={`mt-1 block w-full px-3 py-2 bg-white border ${
//                       errors.phone ? "border-red-500" : "border-gray-300"
//                     } rounded-md shadow-sm focus:outline-none focus:ring-[#A93922] focus:border-[#A93922]`}
//                   />
//                 </div>
//                 {errors.phone && (
//                   <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
//                 )}
//               </div>

//               <div>
//                 <label
//                   htmlFor="identity"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   How do you identify yourself?{" "}
//                   <span className="text-red-500">*</span>
//                 </label>
//                 <select
//                   id="identity"
//                   name="identity"
//                   required
//                   value={formData.identity}
//                   onChange={handleChange}
//                   className={`mt-1 block w-full px-3 bg-white py-2 border ${
//                     errors.identity ? "border-red-500" : "border-gray-300"
//                   } rounded-md shadow-sm focus:outline-none focus:ring-[#A93922] focus:border-[#A93922]`}
//                 >
//                   <option value="">Select your role</option>
//                   <option value="Merchant">Merchant</option>
//                   <option value="Seller">Seller</option>
//                   <option value="Consumer">Consumer</option>
//                   <option value="Partner">Partner</option>
//                   <option value="Other">Other</option>
//                 </select>
//                 {errors.identity && (
//                   <p className="mt-1 text-sm text-red-600">{errors.identity}</p>
//                 )}
//               </div>

//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Message <span className="text-red-500">*</span>
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows={4}
//                   required
//                   value={formData.message}
//                   onChange={handleChange}
//                   className={`mt-1 block w-full bg-white px-3 py-2 border ${
//                     errors.message ? "border-red-500" : "border-gray-300"
//                   } rounded-md shadow-sm focus:outline-none focus:ring-[#A93922] focus:border-[#A93922] max-h-[200px]`}
//                 />
//                 {errors.message && (
//                   <p className="mt-1 text-sm text-red-600">{errors.message}</p>
//                 )}
//               </div>

//               <div className="flex flex-col items-center">
//                 <ReCAPTCHA
//                   sitekey={RECAPTCHA_SITE_KEY}
//                   onChange={handleRecaptchaChange}
//                 />
//                 {errors.recaptcha && (
//                   <p className="mt-1 text-sm text-red-600">
//                     {errors.recaptcha}
//                   </p>
//                 )}
//               </div>

//               <div className="flex justify-end">
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="px-6 py-2 text-sm font-medium text-white bg-[#FA5117] rounded-md hover:bg-[#fa3517] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   {isSubmitting ? "Sending..." : "Submit"}
//                 </button>
//               </div>
//             </form>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ContactPage;
