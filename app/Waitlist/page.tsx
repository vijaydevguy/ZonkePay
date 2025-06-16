"use client";

import Image from "next/image";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";

import ZonkeyLogo from "../../assets/Zonkey_logo.png";
import img1 from "../../assets/waitlist_img1.png";
import img2 from "../../assets/waitlist_img2.png";
import img3 from "../../assets/waitlist_img3.png";
import pattern from "../../assets/pattern.png";
import top_left from "../../assets/top_left.png";
import left_bottom from "../../assets/left_bottom.png";
import right_bottom from "../../assets/right_bottom.png";
import right_top from "../../assets/pattern.png";
import flag from "../../assets/SAflag.png";

import Navbar from "../../components/Navbar/page";

const RECAPTCHA_SITE_KEY = "6LfDQ2IrAAAAAMTUHv4015vTVBMJMUxkcqfNr6qW";

type FormErrors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  recaptcha?: string;
};

const Page = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const Points = [
    {
      id: "1",
      img: img1,
      title: "Cashbacks on Purchases",
      description:
        "Earn rewards on purchases through our network of partner businesses.",
    },
    {
      id: "2",
      img: img2,
      title: "Exclusive Offers",
      description:
        "Access special deals and discounts from top brands and merchants.",
    },
    {
      id: "3",
      img: img3,
      title: "Secure, Trusted Payments",
      description:
        "Enjoy reliable transactions backed by bank-graded security.",
    },
  ];

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "firstName":
      case "lastName":
        if (!value.trim()) return "This field is required";
        if (value.length < 2) return "Must be at least 2 characters";
        if (!/^[a-zA-Z\s-]+$/.test(value))
          return "Only letters, spaces, and hyphens allowed";
        return;
      case "email":
        if (!value) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return "Please enter a valid email address";
        const gmailMatch = value.match(/^([^\s@]+)@gmail\.com(.*)$/i);
        if (gmailMatch && gmailMatch[2] && gmailMatch[2].trim() !== "") {
          return "No characters are allowed after @gmail.com";
        }
        return;
      case "phone":
        if (!value) return "Phone number is required";
        if (!/^\d{10}$/.test(value)) {
          return "Must be a 10-digit number (e.g., 123456789)";
        }
        return;
      default:
        return;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Remove all non-digit characters
      const digitsOnly = value.replace(/\D/g, "");
      // Limit to 10 digits and ensure it starts with 0
      let formattedValue = digitsOnly;
      if (digitsOnly.length > 10) {
        formattedValue = digitsOnly.substring(0, 10);
      }
      // if (digitsOnly.length > 0 && !digitsOnly.startsWith("0")) {
      //   formattedValue = digitsOnly.substring(0, 9);
      // }
      
      setFormData((prev) => ({
        ...prev,
        [name]: formattedValue,
      }));

      const error = validateField(name, formattedValue);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
      return;
    }

    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
    setErrors((prev) => ({
      ...prev,
      recaptcha: token ? undefined : "Please complete the reCAPTCHA",
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

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const serviceId = "service_r1vnbb2";
      const templateId = "template_78fjno5";
      const publicKey = "BwoLNCmJSzu3vqyz5";

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          first_name: formData.firstName,
          last_name: formData.lastName,
          from_email: formData.email,
          from_phone: formData.phone,
          to_name: "Zonkey Team",
          message: "New waitlist registration",
        },
        publicKey
      );

      setSubmitStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", phone: "" });
      setRecaptchaToken(null);
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen flex flex-col lg:flex-row px-[5%] py-12 overflow-x-clip items-center justify-center gap-6">
        {/* Background patterns */}
        <Image
          src={pattern}
          alt="pattern"
          className="absolute top-0 left-0 w-1/3 opacity-20 -z-10"
        />
        <Image
          src={pattern}
          alt="pattern"
          className="absolute bottom-0 right-0 w-1/3 opacity-20 -z-10"
        />
        <Image
          src={top_left}
          alt="top left corner"
          className="absolute top-0 left-0 w-20 md:w-32 -z-10"
        />
        <Image
          src={right_top}
          alt="top right corner"
          className="absolute top-0 right-0 w-20 md:w-62 -z-10"
        />
        <Image
          src={left_bottom}
          alt="bottom left corner"
          className="absolute bottom-0 left-0 w-20 md:w-32 -z-10"
        />
        <Image
          src={right_bottom}
          alt="bottom right corner"
          className="absolute bottom-0 right-0 w-20 md:w-32 -z-10"
        />

        {/* Left content */}
        <div className="flex flex-col gap-4 w-full lg:w-1/2 mb-8 lg:mb-0">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 md:items-end items-center">
              <h2 className="text-[#A93922] text-3xl md:text-[40px]">
                Discover
              </h2>
              <Image src={ZonkeyLogo} alt="img" className="w-20 md:w-auto" />
            </div>
            <h2 className="text-[#2D6E62] text-lg md:text-[20px]">
              Your Ultimate Payment and Shopping Companion.
            </h2>
          </div>
          
          <div className="bg-[#0077B6] rounded-[8px] p-4 md:p-6 gap-4 md:gap-6 flex flex-col">
            <p className="text-lg md:text-[20px] text-white">
              Simplify your shopping and payment experience with exclusive benefits:
            </p>
            {Points.map((point) => (
              <div key={point.id} className="flex flex-row gap-2 items-start">
                <div className="min-w-[50px]">
                  <Image
                    src={point.img}
                    alt={point.title}
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <p className="text-[#FFF3B0] text-base md:text-[18px]">
                    {point.title}
                  </p>
                  <h2 className="text-[#FFFEF3] text-sm md:text-base">
                    {point.description}
                  </h2>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-[#A93922] text-xl md:text-[24px]">
            Register now and start enjoying the benefits!
          </h2>
        </div>

        {/* Right form */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 justify-center items-center">
          <div className="w-full max-w-md">
            {submitStatus === "success" ? (
              <div className="p-4 bg-green-100 text-green-700 rounded-md">
                Thank you for registering! {`We'll`} be in touch soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
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
                      className={`mt-1 block w-full px-3 py-2 bg-white border ${
                        errors.firstName ? "border-red-500" : "border-gray-300"
                      } rounded-md shadow-sm focus:outline-none focus:ring-[#FA5117] focus:border-[#FA5117]`}
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
                      className={`mt-1 block w-full px-3 py-2 bg-white border ${
                        errors.lastName ? "border-red-500" : "border-gray-300"
                      } rounded-md shadow-sm focus:outline-none focus:ring-[#FA5117] focus:border-[#FA5117]`}
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
                    className={`mt-1 block w-full px-3 py-2 bg-white border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm focus:outline-none focus:ring-[#FA5117] focus:border-[#FA5117]`}
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
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0123456789"
                      maxLength={10}
                      className={`mt-1 block w-full px-3 py-2 bg-white border ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      } rounded-md shadow-sm focus:outline-none focus:ring-[#A93922] focus:border-[#A93922]`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>

                <div className="flex flex-col items-center">
                  <ReCAPTCHA
                    sitekey={RECAPTCHA_SITE_KEY}
                    onChange={handleRecaptchaChange}
                    className="transform scale-90 md:scale-100"
                  />
                  {errors.recaptcha && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.recaptcha}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 text-sm font-medium text-white bg-[#FA5117] rounded-md hover:bg-[#fa3d17] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Processing..." : "Pre-register"}
                </button>

                {submitStatus === "error" && (
                  <div className="p-2 bg-red-100 text-red-700 rounded-md text-sm">
                    Something went wrong. Please try again.
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;



// "use client";

// import Image from "next/image";
// import React, { useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
// import emailjs from "@emailjs/browser";

// import ZonkeyLogo from "../../assets/Zonkey_logo.png";
// import img1 from "../../assets/waitlist_img1.png";
// import img2 from "../../assets/waitlist_img2.png";
// import img3 from "../../assets/waitlist_img3.png";
// import pattern from "../../assets/pattern.png";
// import top_left from "../../assets/top_left.png";
// import left_bottom from "../../assets/left_bottom.png";
// import right_bottom from "../../assets/right_bottom.png";
// import right_top from "../../assets/pattern.png";
// import flag from "../../assets/SAflag.png";

// // import Button from "../../components/Button/page";

// import Navbar from "../../components/Navbar/page"

// // const RECAPTCHA_SITE_KEY = "6Lf_SVsrAAAAAJE-1WSvMXGbSdXukogLED_tmSzb";
// // const RECAPTCHA_SITE_KEY = "6LdtmMMqAAAAAO0AAfhBlfqofdA-z8CJLNDJUMbM";

// //new vercel key
// const RECAPTCHA_SITE_KEY = "6LfDQ2IrAAAAAMTUHv4015vTVBMJMUxkcqfNr6qW";

// type FormErrors = {
//   firstName?: string;
//   lastName?: string;
//   email?: string;
//   phone?: string;
//   recaptcha?: string;
// };

// const Page = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//   });

//   const [errors, setErrors] = useState<FormErrors>({});
//   const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<
//     "idle" | "success" | "error"
//   >("idle");

//   const Points = [
//     {
//       id: "1",
//       img: img1,
//       title: "Cashbacks on Purchases",
//       description:
//         "Earn rewards on purchases through our network of partner businesses.",
//     },
//     {
//       id: "2",
//       img: img2,
//       title: "Exclusive Offers",
//       description:
//         "Access special deals and discounts from top brands and merchants.",
//     },
//     {
//       id: "3",
//       img: img3,
//       title: "Secure, Trusted Payments",
//       description:
//         "Enjoy reliable transactions backed by bank-graded security.",
//     },
//   ];

//   const validateField = (name: string, value: string): string | undefined => {
//     switch (name) {
//       case "firstName":
//       case "lastName":
//         if (!value.trim()) return "This field is required";
//         if (value.length < 2) return "Must be at least 2 characters";
//         if (!/^[a-zA-Z\s-]+$/.test(value))
//           return "Only letters, spaces, and hyphens allowed";
//         return;
//       case "email":
//         if (!value) return "Email is required";
//         // Basic email format check
//         if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
//           return "Please enter a valid email address";
//         // If email is gmail.com, ensure nothing after gmail.com
//         const gmailMatch = value.match(/^([^\s@]+)@gmail\.com(.*)$/i);
//         if (gmailMatch && gmailMatch[2] && gmailMatch[2].trim() !== "") {
//           return "No characters are allowed after @gmail.com";
//         }
//         return;
//         // case "phone":
//         if (!value) return "Phone number is required";
//         if (!/^(\+27|0)[0-9]{9}$/.test(value.replace(/\s/g, "")))
//           return "Invalid South African number (e.g., +27XXXXXXXXX or 0XXXXXXXXX)";
//         return;

//       case "phone":
//         if (!value) return "Phone number is required";
//         // Remove all non-digit characters
//         const digitsOnly = value.replace(/\D/g, "");
//         // Check if it's exactly 10 digits
//         if (!/^0\d{9}$/.test(digitsOnly)) {
//           return "Must be a 10-digit number starting with 0 (e.g., 0123456789)";
//         }
//         return;
//       default:
//         return;
//     }
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;

//     const error = validateField(name, value);
//     setErrors((prev) => ({
//       ...prev,
//       [name]: error,
//     }));

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleRecaptchaChange = (token: string | null) => {
//     setRecaptchaToken(token);
//     setErrors((prev) => ({
//       ...prev,
//       recaptcha: token ? undefined : "Please complete the reCAPTCHA",
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

//     if (!validateForm()) {
//       return;
//     }

//     setIsSubmitting(true);
//     setSubmitStatus("idle");

//     try {
//       const serviceId = "service_r1vnbb2";
//       const templateId = "template_78fjno5";
//       const publicKey = "BwoLNCmJSzu3vqyz5";

//       await emailjs.send(
//         serviceId,
//         templateId,
//         {
//           from_name: `${formData.firstName} ${formData.lastName}`,
//           first_name: formData.firstName,
//           last_name: formData.lastName,
//           from_email: formData.email,
//           from_phone: formData.phone,
//           to_name: "Zonkey Team",
//           message: "New waitlist registration",
//         },
//         publicKey
//       );

//       setSubmitStatus("success");
//       setFormData({ firstName: "", lastName: "", email: "", phone: "" });
//       setRecaptchaToken(null);
//     } catch (error) {
//       console.error("Failed to send email:", error);
//       setSubmitStatus("error");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <>
 
//         <Navbar />
 

//       {/* <div className="flex px-[5%] pt-6">
//         <Button text="back" secondary link="/" className="w-fit md:w-auto" />
//       </div> */}
//       <div className="relative min-h-screen flex flex-col lg:flex-row px-[5%] py-12 overflow-x-clip items-center justify-center gap-6">
//         {/* Background patterns - positioned absolutely */}
//         <Image
//           src={pattern}
//           alt="pattern"
//           className="absolute top-0 left-0 w-1/3 opacity-20 -z-10"
//         />
//         <Image
//           src={pattern}
//           alt="pattern"
//           className="absolute bottom-0 right-0 w-1/3 opacity-20 -z-10"
//         />
//         <Image
//           src={top_left}
//           alt="top left corner"
//           className="absolute top-0 left-0 w-20 md:w-32 -z-10"
//         />
//         <Image
//           src={right_top}
//           alt="top right corner"
//           className="absolute top-0 right-0 w-20 md:w-62 -z-10"
//         />
//         <Image
//           src={left_bottom}
//           alt="bottom left corner"
//           className="absolute bottom-0 left-0 w-20 md:w-32 -z-10"
//         />
//         <Image
//           src={right_bottom}
//           alt="bottom right corner"
//           className="absolute bottom-0 right-0 w-20 md:w-32 -z-10"
//         />
//         {/* <div className="absolute left-0 top-0 px-[5%] pt-6 z-20 w-full flex justify-start">
//           <Button text="back" secondary link="/" className="w-fit md:w-auto" />
//         </div> */}
//         {/* left */}
//         <div className="flex flex-col gap-4 w-full lg:w-1/2 mb-8 lg:mb-0">
//           {/* <div >
//             <Button
//               text="back"
//               secondary
//               link="/"
//               className="w-fit md:w-auto"
//             />
//           </div> */}
//           <div className="flex flex-col gap-2">
//             {/* top */}
//             <div className="flex flex-row gap-2 md:items-end items-center">
//               <h2 className="text-[#A93922] text-3xl md:text-[40px]">
//                 Discover
//               </h2>
//               <Image src={ZonkeyLogo} alt="img" className="w-20 md:w-auto" />
//             </div>

//             <h2 className="text-[#2D6E62] text-lg md:text-[20px]">
//               Your Ultimate Payment and Shopping Companion.
//             </h2>
//           </div>
//           {/* center */}
//           <div className="bg-[#0077B6] rounded-[8px] p-4 md:p-6 gap-4 md:gap-6 flex flex-col">
//             <p className="text-lg md:text-[20px] text-white">
//               Simplify your shopping and payment experience with exclusive
//               benefits:
//             </p>
//             {Points.map((point) => (
//               <div key={point.id} className="flex flex-row gap-2 items-start">
//                 <div className="min-w-[50px]">
//                   <Image
//                     src={point.img}
//                     alt={point.title}
//                     width={50}
//                     height={50}
//                   />
//                 </div>
//                 <div>
//                   <p className="text-[#FFF3B0] text-base md:text-[18px]">
//                     {point.title}
//                   </p>
//                   <h2 className="text-[#FFFEF3] text-sm md:text-base">
//                     {point.description}
//                   </h2>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <h2 className="text-[#A93922] text-xl md:text-[24px]">
//             Register now and start enjoying the benefits!
//           </h2>
//         </div>

//         {/* right */}
//         <div className="w-full lg:w-1/2 flex flex-col gap-6 justify-center items-center">
//           <div className="w-full max-w-md">
//             {submitStatus === "success" ? (
//               <div className="p-4 bg-green-100 text-green-700 rounded-md">
//                 Thank you for registering! {`We'll`} be in touch soon.
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-4" noValidate>
//                 <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
//                   <div>
//                     <label
//                       htmlFor="firstName"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       First Name <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       id="firstName"
//                       name="firstName"
//                       required
//                       value={formData.firstName}
//                       onChange={handleChange}
//                       className={`mt-1 block w-full px-3 py-2 bg-white border ${
//                         errors.firstName ? "border-red-500" : "border-gray-300"
//                       } rounded-md shadow-sm focus:outline-none focus:ring-[#FA5117] focus:border-[#FA5117]`}
//                     />
//                     {errors.firstName && (
//                       <p className="mt-1 text-sm text-red-600">
//                         {errors.firstName}
//                       </p>
//                     )}
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="lastName"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Last Name <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       id="lastName"
//                       name="lastName"
//                       required
//                       value={formData.lastName}
//                       onChange={handleChange}
//                       className={`mt-1 block w-full px-3 py-2 bg-white border ${
//                         errors.lastName ? "border-red-500" : "border-gray-300"
//                       } rounded-md shadow-sm focus:outline-none focus:ring-[#FA5117] focus:border-[#FA5117]`}
//                     />
//                     {errors.lastName && (
//                       <p className="mt-1 text-sm text-red-600">
//                         {errors.lastName}
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Email <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     required
//                     value={formData.email}
//                     onChange={handleChange}
//                     className={`mt-1 block w-full px-3 py-2 bg-white border ${
//                       errors.email ? "border-red-500" : "border-gray-300"
//                     } rounded-md shadow-sm focus:outline-none focus:ring-[#FA5117] focus:border-[#FA5117]`}
//                   />
//                   {errors.email && (
//                     <p className="mt-1 text-sm text-red-600">{errors.email}</p>
//                   )}
//                 </div>

//                 {/* <div>
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
//                     placeholder="(+27) phone number"
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
//               </div> */}

//                 <div>
//                   <label
//                     htmlFor="phone"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Phone Number <span className="text-red-500">*</span>
//                   </label>
//                   <div className="flex flex-row gap-2 items-center">
//                     <span>
//                       <Image src={flag} alt="SA Flag" width={30} height={20} />
//                     </span>
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       required
//                       pattern="[0-9]{10}"
//                       inputMode="numeric"
//                       maxLength={10}
//                       placeholder="0123456789"
//                       value={formData.phone}
//                       onChange={(e) => {
//                         // Allow only numbers
//                         const value = e.target.value.replace(/\D/g, "");
//                         // Update the form data
//                         setFormData((prev) => ({
//                           ...prev,
//                           phone: value,
//                         }));
//                         // Validate
//                         const error = validateField("phone", value);
//                         setErrors((prev) => ({
//                           ...prev,
//                           phone: error,
//                         }));
//                       }}
//                       className={`mt-1 block w-full px-3 py-2 bg-white border ${
//                         errors.phone ? "border-red-500" : "border-gray-300"
//                       } rounded-md shadow-sm focus:outline-none focus:ring-[#A93922] focus:border-[#A93922]`}
//                     />
//                   </div>
//                   {errors.phone && (
//                     <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
//                   )}
//                 </div>

//                 {/* Google reCAPTCHA */}
//                 <div className="flex flex-col items-center">
//                   <ReCAPTCHA
//                     sitekey={RECAPTCHA_SITE_KEY}
//                     onChange={handleRecaptchaChange}
//                     className="transform scale-90 md:scale-100"
//                   />
//                   {errors.recaptcha && (
//                     <p className="mt-1 text-sm text-red-600">
//                       {errors.recaptcha}
//                     </p>
//                   )}
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full px-4 py-2 text-sm font-medium text-white bg-[#FA5117] rounded-md hover:bg-[#fa3d17] disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   {isSubmitting ? "Processing..." : "Pre-register"}
//                 </button>

//                 {submitStatus === "error" && (
//                   <div className="p-2 bg-red-100 text-red-700 rounded-md text-sm">
//                     Something went wrong. Please try again.
//                   </div>
//                 )}
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Page;
