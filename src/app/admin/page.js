"use client";

import { useState } from "react";

export default function Admin() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setForm({ ...form, image: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", form.name);
    data.append("description", form.description);

    if (form.image) {
      data.append("image", form.image);
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/hero`, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      const text = await res.text();
      console.log("Status:", res.status);
      console.log("Response:", text);

      if (!res.ok) {
        alert("Update failed. شوف console.");
        return;
      }

      const result = JSON.parse(text);
      console.log(result);

      alert("Updated successfully 🚀");
    } catch (err) {
      console.error("Admin error:", err);
      alert("Error. شوف console.");
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)] p-10 text-[var(--foreground)]">
      <h1 className="mb-6 text-2xl font-bold">Admin Panel</h1>

      <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="rounded border border-[var(--border-soft)] bg-[var(--surface)] p-3"
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="rounded border border-[var(--border-soft)] bg-[var(--surface)] p-3"
        />

        <input type="file" name="image" onChange={handleChange} />

        <button type="submit" className="rounded bg-purple-600 p-3 text-white">
          Update Hero
        </button>
      </form>
    </div>
  );
}