"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

export default function PartnershipForm() {
  const [formData, setFormData] = useState({
    organizationName: "",
    contactPerson: "",
    email: "",
    phone: "",
    partnershipInterest: "Corporate Sponsorship",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus({
      loading: true,
      success: "",
      error: "",
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
        throw new Error(data.error || "Something went wrong");
      }

      setStatus({
        loading: false,
        success: "Partnership request submitted successfully!",
        error: "",
      });

      setFormData({
        organizationName: "",
        contactPerson: "",
        email: "",
        phone: "",
        partnershipInterest: "Corporate Sponsorship",
        message: "",
      });
    } catch (error) {
      setStatus({
        loading: false,
        success: "",
        error: error instanceof Error ? error.message : "Something went wrong",
      });
    }
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Partnership Inquiry
          </h2>

          <p className="text-gray-500 mt-3">
            We'd love to collaborate with your organization.
          </p>
        </div>

        {status.success && (
          <div className="mb-6 rounded-xl bg-green-50 border border-green-200 p-4 text-green-700">
            {status.success}
          </div>
        )}

        {status.error && (
          <div className="mb-6 rounded-xl bg-red-50 border border-red-200 p-4 text-red-700">
            {status.error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="text"
            name="organizationName"
            placeholder="Organization Name"
            value={formData.organizationName}
            onChange={handleChange}
            required
            className="w-full rounded-xl border p-4"
          />

          <input
            type="text"
            name="contactPerson"
            placeholder="Contact Person"
            value={formData.contactPerson}
            onChange={handleChange}
            required
            className="w-full rounded-xl border p-4"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-xl border p-4"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full rounded-xl border p-4"
          />

          <select
            name="partnershipInterest"
            value={formData.partnershipInterest}
            onChange={handleChange}
            className="w-full rounded-xl border p-4"
          >
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

          <textarea
            name="message"
            rows={5}
            placeholder="Tell us about your partnership proposal..."
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full rounded-xl border p-4"
          />

          <button
            type="submit"
            disabled={status.loading}
            className="w-full rounded-xl bg-green-600 py-4 text-white font-bold hover:bg-green-700 disabled:opacity-50"
          >
            {status.loading ? "Submitting..." : "Submit Partnership Request"}
          </button>

        </form>
      </div>
    </section>
  );
}