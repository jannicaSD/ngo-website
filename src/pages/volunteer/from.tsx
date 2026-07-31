"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  profession: string;
  areaOfInterest: string;
  message: string;
}

interface Status {
  loading: boolean;
  error: string;
  success: string;
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    profession: "",
    areaOfInterest: "Select an opportunity...",
    message: "",
  });

  const [status, setStatus] = useState<Status>({
    loading: false,
    error: "",
    success: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ loading: true, error: "", success: "" });

    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const textResponse = await res.text();
      let data;
      try {
        data = JSON.parse(textResponse);
      } catch (parseError) {
        console.error("Non-JSON response received:", textResponse);
        throw new Error("Server returned an invalid response. Check terminal logs.");
      }

      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setStatus({
        loading: false,
        error: "",
        success: "Application submitted successfully! We will contact you soon.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        profession: "",
        areaOfInterest: "Select an opportunity...",
        message: "",
      });
    } catch (err: any) {
      setStatus({ loading: false, error: err.message || "An error occurred", success: "" });
    }
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Volunteer Application</h2>
          <p className="text-gray-500 font-light">
            Join our mission by filling out the form below. We will get back to you shortly.
          </p>
        </div>

        {status.success && (
          <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-xl border border-green-200 text-center font-medium">
            {status.success}
          </div>
        )}
        {status.error && (
          <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl border border-red-200 text-center font-medium">
            {status.error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-[10px] font-bold text-gray-700 uppercase tracking-wider">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-green-500 outline-none transition-all text-gray-900"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-[10px] font-bold text-gray-700 uppercase tracking-wider">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-green-500 outline-none transition-all text-gray-900"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-[10px] font-bold text-gray-700 uppercase tracking-wider">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-green-500 outline-none transition-all text-gray-900"
                placeholder="+92 300 0000000"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-[10px] font-bold text-gray-700 uppercase tracking-wider">
                Profession
              </label>
              <input
                type="text"
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                required
                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-green-500 outline-none transition-all text-gray-900"
                placeholder="e.g. Lawyer, Student"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-[10px] font-bold text-gray-700 uppercase tracking-wider">
              Area of Interest
            </label>
            <select
              name="areaOfInterest"
              value={formData.areaOfInterest}
              onChange={handleChange}
              required
              className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-green-500 outline-none transition-all text-gray-600"
            >
              <option disabled>Select an opportunity...</option>
              <option value="Community Outreach">Community Outreach</option>
              <option value="Legal Assistance">Legal Assistance</option>
              <option value="Education Programs">Education Programs</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-[10px] font-bold text-gray-700 uppercase tracking-wider">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-green-500 outline-none transition-all text-gray-900"
              placeholder="Tell us why you want to volunteer..."
            />
          </div>

          <button
            type="submit"
            disabled={status.loading}
            className="w-full py-5 bg-green-600 text-white font-bold rounded-2xl hover:bg-green-700 transition-all shadow-lg shadow-green-200 mt-8 disabled:opacity-50 cursor-pointer"
          >
            {status.loading ? "Submitting Application..." : "Apply Now"}
          </button>
        </form>
      </div>
    </section>
  );
}