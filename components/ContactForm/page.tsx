"use client";
// components/ContactModal.tsx

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

type ContactFormData = {
  name: string;
  email: string;
  identity: string;
  message: string;
};

// local key
// const RECAPTCHA_SITE_KEY = "6LcJhVorAAAAAP_lKQNLb1CpxEg2cV5bYVR2hCJs";

// production key with host name
// const RECAPTCHA_SITE_KEY = "6Lenf1orAAAAAAmSFHGTAzooOsvY-LAbVFYE_1cn";

// new production key
// const RECAPTCHA_SITE_KEY = "6LcEQFsrAAAAACf_burNKvru0h584hVt4GF7obVH"; 
// reCAPTCHA site key



const RECAPTCHA_SITE_KEY = "6Lf_SVsrAAAAAJE-1WSvMXGbSdXukogLED_tmSzb"; 

const validation = (formData: ContactFormData) => {
  emailjs
    .send(
      "service_r1vnbb2",
      "template_k0vme5m",
      {
        from_name: formData.name,
        from_email: formData.email,
        identity: formData.identity,
        message: formData.message,
      },
      {
        publicKey: "BwoLNCmJSzu3vqyz5",
      }
    )
    .then(
      function (response: { status: number; text: string }) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (err: string) {
        console.log("FAILED...", err);
      }
    );
};

const ContactModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    identity: "",
    message: "",
  });

  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert("Please verify that you are not a robot.");
      return;
    }

    console.log("Form submitted:", formData);
    validation(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-xs">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-[#FA5117]">Contact Us</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FA5117] focus:border-[#FA5117]"
              />
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
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FA5117] focus:border-[#FA5117]"
              />
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
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FA5117] focus:border-[#FA5117]"
              >
                <option value="">Select an option</option>
                <option value="Merchant">Merchant</option>
                <option value="Seller">Seller</option>
                <option value="Consumer">Consumer</option>
                <option value="Partner">Partner</option>
                <option value="Other">Other</option>
              </select>
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
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FA5117] focus:border-[#FA5117]"
              />
            </div>

            {/* Google reCAPTCHA */}
            <div className="flex justify-center">
              <ReCAPTCHA
                sitekey={RECAPTCHA_SITE_KEY}
                onChange={handleRecaptchaChange}
              />
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-[#FA5117] rounded-md hover:bg-[#fa3d17]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;


// // components/ContactModal.tsx
// "use client";

// import React, { useState } from "react";

// type ContactFormData = {
//   name: string;
//   email: string;
//   identity: string;
//   message: string;
// };

// // const templateparam = {
// //   name: name,
// //   email: email,

// //   message: message,
// // };

// import emailjs from "@emailjs/browser";

// const validation = (formData: ContactFormData) => {
//   // setLoading(true);
//   emailjs
//     .send(
//       "service_r1vnbb2",
//       "template_k0vme5m",
//       {
//         from_name: formData.name,
//         from_email: formData.email,
//         identity: formData.identity,
//         message: formData.message,
//       },
//       {
//         publicKey: "BwoLNCmJSzu3vqyz5",
//       }
//     )
//     .then(
//       function (response: { status: number; text: string }) {
//         console.log("SUCCESS!", response.status, response.text);
//       },
//       function (err: any) {
//         console.log("FAILED...", err);
//         // setLoading(false);
//       }
//     );
// };

// const ContactModal = ({
//   isOpen,
//   onClose,
// }: {
//   isOpen: boolean;
//   onClose: () => void;
// }) => {
//   const [formData, setFormData] = useState<ContactFormData>({
//     name: "",
//     email: "",
//     identity: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Here you would typically send the form data to your backend
//     console.log("Form submitted:", formData);
//     onClose(); // Close the modal after submission
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 bg-opacity-20 backdrop-blur-xs">
//       <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
//         <div className="p-6">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-semibold text-[#FA5117]">Contact Us</h2>
//             <button
//               onClick={onClose}
//               className="text-gray-500 hover:text-gray-700"
//               aria-label="Close"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 required
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FA5117] focus:border-[#FA5117]"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Email <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FA5117] focus:border-[#FA5117]"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="identity"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 How do you identify yourself?{" "}
//                 <span className="text-red-500">*</span>
//               </label>
//               <select
//                 id="identity"
//                 name="identity"
//                 required
//                 value={formData.identity}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FA5117] focus:border-[#FA5117]"
//               >
//                 <option value="">Select an option</option>
//                 <option value="Merchant">Merchant</option>
//                 <option value="Seller">Seller</option>
//                 <option value="Consumer">Consumer</option>
//                 <option value="Partner">Partner</option>
//                 <option value="Other">Other</option>
//               </select>
//             </div>

//             <div>
//               <label
//                 htmlFor="message"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Message <span className="text-red-500">*</span>
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows={4}
//                 required
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FA5117] focus:border-[#FA5117]"
//               />
//             </div>

//             <div className="flex justify-end space-x-3">
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 onClick={() => validation(formData)}
//                 className="px-4 py-2 text-sm font-medium text-white bg-[#FA5117] rounded-md hover:bg-[#fa3d17]"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactModal;


// // components/ContactModal.tsx
// "use client";

// import React, { useState } from "react";
// import emailjs from '@emailjs/browser';

// // Initialize EmailJS with your User ID
// emailjs.init("BwoLNCmJSzu3vqyz5");

// type ContactFormData = {
//   name: string;
//   email: string;
//   identity: string;
//   message: string;
// };

// const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
//   const [formData, setFormData] = useState<ContactFormData>({
//     name: "",
//     email: "",
//     identity: "",
//     message: "",
//   });
//   // console.log(setFormData);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus(null);

//     try {
//       const serviceId = 'service_r1vnbb2';
//       const templateId = 'template_kOvme5m';

//       // Send the email
//       const response = await emailjs.send(
//         serviceId,
//         templateId,
//         {
//           from_name: formData.name,
//           from_email: formData.email,
//           identity: formData.identity,
//           message: formData.message,
//         }
//       );

//       console.log('EmailJS response:', response);

//       if (response.status === 200) {
//         setSubmitStatus({ success: true, message: 'Message sent successfully!' });
//         setFormData({
//           name: "",
//           email: "",
//           identity: "",
//           message: "",
//         });

//         // Close the modal after 2 seconds
//         setTimeout(() => {
//           onClose();
//         }, 2000);
//       } else {
//         throw new Error(`EmailJS returned status: ${response.status}`);
//       }
//     } catch (error) {
//       console.error('Failed to send message:', error);

//       let errorMessage = 'Failed to send message. Please try again.';
//       if (error instanceof Error) {
//         if (error.message.includes('400')) {
//           errorMessage = 'Invalid form data. Please check your inputs.';
//         } else if (error.message.includes('Network Error')) {
//           errorMessage = 'Network error. Please check your connection.';
//         } else {
//           errorMessage = error.message;
//         }
//       }

//       setSubmitStatus({
//         success: false,
//         message: errorMessage
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 bg-opacity-20 backdrop-blur-xs">
//       <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
//         <div className="p-6">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-semibold text-[#FA5117]">Contact Us</h2>
//             <button
//               onClick={onClose}
//               className="text-gray-500 hover:text-gray-700"
//               aria-label="Close"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>

//           {submitStatus && (
//             <div className={`mb-4 p-3 rounded-md ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
//               {submitStatus.message}
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                 Name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 required
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FA5117] focus:border-[#FA5117]"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FA5117] focus:border-[#FA5117]"
//               />
//             </div>

//             <div>
//               <label htmlFor="identity" className="block text-sm font-medium text-gray-700">
//                 How do you identify yourself? <span className="text-red-500">*</span>
//               </label>
//               <select
//                 id="identity"
//                 name="identity"
//                 required
//                 value={formData.identity}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FA5117] focus:border-[#FA5117]"
//               >
//                 <option value="">Select an option</option>
//                 <option value="Merchant">Merchant</option>
//                 <option value="Seller">Seller</option>
//                 <option value="Consumer">Consumer</option>
//                 <option value="Partner">Partner</option>
//                 <option value="Other">Other</option>
//               </select>
//             </div>

//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//                 Message <span className="text-red-500">*</span>
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows={4}
//                 required
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FA5117] focus:border-[#FA5117]"
//               />
//             </div>

//             <div className="flex justify-end space-x-3">
//               <button
//                 type="button"
//                 onClick={onClose}
//                 disabled={isSubmitting}
//                 className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 disabled:opacity-50"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="px-4 py-2 text-sm font-medium text-white bg-[#FA5117] rounded-md hover:bg-[#fa3d17] disabled:opacity-50 flex items-center"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                     </svg>
//                     Sending...
//                   </>
//                 ) : 'Submit'}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactModal;
