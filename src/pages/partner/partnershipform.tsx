"use client";

import { useState } from "react";

export function PartnershipForm() {
  const [formData, setFormData] = useState({
    organizationName: "",
    contactPerson: "",
    email: "",
    phone: "",
    partnershipInterest: "Partnership Interest...",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    error: "",
    success: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus({
      loading: true,
      error: "",
      success: "",
    });

    try {
      const res = await fetch("/api/partnership", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus({
        loading: false,
        error: "",
        success:
          "Your partnership inquiry has been submitted successfully! Our team will contact you soon.",
      });

      setFormData({
        organizationName: "",
        contactPerson: "",
        email: "",
        phone: "",
        partnershipInterest: "Partnership Interest...",
        message: "",
      });
    } catch (err: any) {
      setStatus({
        loading: false,
        error: err.message,
        success: "",
      });
    }
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            Partnership Inquiry
          </h2>

          <p className="text-gray-500 font-light">
            We'd love to explore how we can work together to create lasting
            impact. Complete the form below and our team will get back to you
            shortly.
          </p>
        </div>

        {status.success && (
          <div className="mb-6 p-4 rounded-xl border border-green-200 bg-green-50 text-green-700 text-center font-medium">
            {status.success}
          </div>
        )}

        {status.error && (
          <div className="mb-6 p-4 rounded-xl border border-red-200 bg-red-50 text-red-700 text-center font-medium">
            {status.error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-wider font-bold text-gray-700">
                Organization Name
              </label>

              <input
                type="text"
                name="organizationName"
                value={formData.organizationName}
                onChange={handleChange}
                required
                placeholder="ABC Foundation"
                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none transition-all focus:border-green-500 text-gray-900"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-wider font-bold text-gray-700">
                Contact Person
              </label>

              <input
                type="text"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                required
                placeholder="John Smith"
                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none transition-all focus:border-green-500 text-gray-900"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-wider font-bold text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="organization@example.com"
                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none transition-all focus:border-green-500 text-gray-900"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-wider font-bold text-gray-700">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+92 300 0000000"
                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none transition-all focus:border-green-500 text-gray-900"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-wider font-bold text-gray-700">
              Partnership Interest
            </label>

            <select
              name="partnershipInterest"
              value={formData.partnershipInterest}
              onChange={handleChange}
              required
              className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none transition-all focus:border-green-500 text-gray-700"
            >
              <option disabled>Partnership Interest...</option>

              <option value="Corporate Sponsorship">
                Corporate Sponsorship
              </option>

              <option value="Joint Project">
                Joint Project
              </option>

              <option value="Church/NGO Collaboration">
                Church/NGO Collaboration
              </option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-wider font-bold text-gray-700">
              Partnership Proposal
            </label>

            <textarea
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us about your organization and how you'd like to collaborate with Parakletus..."
              className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none transition-all focus:border-green-500 text-gray-900"
            />
          </div>

          <button
            type="submit"
            disabled={status.loading}
            className="w-full py-5 bg-green-600 text-white font-bold rounded-2xl hover:bg-green-700 transition-all shadow-lg shadow-green-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status.loading
              ? "Submitting Partnership Inquiry..."
              : "Become a Partner"}
          </button>
        </form>
      </div>
    </section>
  );
}