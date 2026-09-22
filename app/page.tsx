"use client";

import { FormEvent, useState } from "react";
import { pgData } from "@/data/pgData";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = form.get("name");
    const phone = form.get("phone");
    const room = form.get("room");
    const message = form.get("message");

    const whatsappMessage = `Hello ${pgData.name},

I am interested in staying at your PG.

Name: ${name}
Phone: ${phone}
Room Preference: ${room}
Message: ${message}`;

    const whatsappUrl = `https://wa.me/${pgData.whatsapp}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    setSubmitted(true);

    window.open(whatsappUrl, "_blank");

    event.currentTarget.reset();
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* =========================
          NAVBAR
      ========================== */}

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          {/* Logo */}

          <a
            href="#"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-xl font-bold text-slate-950">
              {pgData.brand.logoLetter}
            </div>

            <div>
              <p className="font-bold leading-none">
                {pgData.name}
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Premium PG Living
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-7 md:flex">
            <a
              href="#rooms"
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              Rooms
            </a>

            <a
              href="#facilities"
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              Facilities
            </a>

            <a
              href="#gallery"
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              Gallery
            </a>

            <a
              href="#location"
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              Location
            </a>

            <a
              href="#contact"
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              Contact
            </a>
          </nav>

          {/* Desktop WhatsApp */}

          <a
            href={`https://wa.me/${pgData.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 md:block"
          >
            WhatsApp
          </a>

          {/* Mobile Menu Button */}

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-white/10 px-3 py-2 text-xl md:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}

        {menuOpen && (
          <div className="border-t border-white/10 bg-slate-950 px-5 py-5 md:hidden">
            <nav className="flex flex-col gap-2">
              <a
                href="#rooms"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
              >
                Rooms
              </a>

              <a
                href="#facilities"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
              >
                Facilities
              </a>

              <a
                href="#gallery"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
              >
                Gallery
              </a>

              <a
                href="#location"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
              >
                Location
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
              >
                Contact
              </a>

              <a
                href={`https://wa.me/${pgData.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="mt-2 rounded-xl bg-cyan-500 px-4 py-3 text-center font-semibold text-slate-950"
              >
                WhatsApp
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* =========================
          HERO
      ========================== */}

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 md:items-center md:px-6 md:py-24">
        <div>
          <div className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            {pgData.tagline}
          </div>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            {pgData.hero.title}

            <span className="block text-cyan-400">
              {pgData.hero.highlight}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 md:text-lg md:leading-8">
            {pgData.hero.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#rooms"
              className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              View Rooms
            </a>

            <a
              href={`https://wa.me/${pgData.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/10"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
            <div>
              <p className="text-2xl font-bold">24/7</p>
              <p className="text-xs text-slate-500 md:text-sm">
                Security
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">Fast</p>
              <p className="text-xs text-slate-500 md:text-sm">
                Wi-Fi
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">AC</p>
              <p className="text-xs text-slate-500 md:text-sm">
                Rooms
              </p>
            </div>
          </div>
        </div>

        {/* Hero Image */}

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">
          <img
            src={pgData.images.hero}
            alt={`${pgData.name} accommodation`}
            className="h-[360px] w-full object-cover md:h-[500px]"
          />
        </div>
      </section>

      {/* =========================
          ROOMS
      ========================== */}

      <section
        id="rooms"
        className="scroll-mt-24 border-t border-white/10 bg-slate-900/40"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-6">
          <div className="max-w-2xl">
            <p className="font-semibold text-cyan-400">
              ROOMS & PRICING
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Choose your room
            </h2>

            <p className="mt-4 text-slate-400">
              Flexible room options designed for students and
              working professionals.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pgData.rooms.map((room, index) => (
              <div
                key={room.type}
                className={`rounded-3xl border p-7 transition hover:-translate-y-1 ${
                  index === 1
                    ? "border-cyan-400/30 bg-slate-900 shadow-xl shadow-cyan-950/20"
                    : "border-white/10 bg-slate-900 hover:border-cyan-400/40"
                }`}
              >
                <p className="text-sm font-semibold text-cyan-400">
                  {index === 0
                    ? "PRIVATE"
                    : index === 1
                      ? "POPULAR"
                      : "VALUE"}
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  {room.type}
                </h3>

                <p className="mt-4 text-3xl font-bold">
                  {room.price}
                  <span className="text-sm font-normal text-slate-500">
                    /month
                  </span>
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-400">
                  {room.description}
                </p>

                <a
                  href="#contact"
                  className={`mt-8 block rounded-xl px-5 py-3 text-center font-semibold transition ${
                    index === 1
                      ? "bg-cyan-500 text-slate-950 hover:bg-cyan-400"
                      : "bg-white/10 hover:bg-cyan-500 hover:text-slate-950"
                  }`}
                >
                  Enquire Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          FACILITIES
      ========================== */}

      <section
        id="facilities"
        className="scroll-mt-24 mx-auto max-w-7xl px-5 py-20 md:px-6"
      >
        <div className="text-center">
          <p className="font-semibold text-cyan-400">
            FACILITIES
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Everything you need
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Designed to make everyday living simple, comfortable
            and convenient.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pgData.facilities.map((facility) => (
            <div
              key={facility.title}
              className="rounded-3xl border border-white/10 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <div className="text-3xl">
                {facility.icon}
              </div>

              <h3 className="mt-5 text-xl font-bold">
                {facility.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================
          GALLERY
      ========================== */}

      <section
        id="gallery"
        className="scroll-mt-24 border-t border-white/10 bg-slate-900/40"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-6">
          <p className="font-semibold text-cyan-400">
            GALLERY
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Take a look around
          </h2>

          <p className="mt-4 text-slate-400">
            Demo images are being used for this template.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {pgData.images.gallery.map((image, index) => (
              <div
                key={image}
                className="overflow-hidden rounded-3xl"
              >
                <img
                  src={image}
                  alt={`${pgData.name} gallery image ${index + 1}`}
                  className="h-80 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          LOCATION
      ========================== */}

      <section
        id="location"
        className="scroll-mt-24 mx-auto max-w-7xl px-5 py-20 md:px-6"
      >
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-semibold text-cyan-400">
              LOCATION
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Find us easily
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              {pgData.name} is located in {pgData.location}.
              Contact us or open Google Maps to get directions.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
                <p className="text-sm text-slate-500">
                  ADDRESS
                </p>

                <p className="mt-2 font-semibold">
                  {pgData.address}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={pgData.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  📍 Open in Google Maps
                </a>

                <a
                  href={`tel:${pgData.phone}`}
                  className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/10"
                >
                  📞 Call Now
                </a>
              </div>
            </div>
          </div>

          <a
            href={pgData.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-[400px] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-slate-900 transition hover:border-cyan-400/40"
          >
            <div className="text-center transition duration-300 group-hover:scale-105">
              <div className="text-7xl">📍</div>

              <h3 className="mt-5 text-2xl font-bold">
                {pgData.location}
              </h3>

              <p className="mt-2 text-slate-500">
                Click to open Google Maps
              </p>

              <div className="mt-6 inline-block rounded-full bg-white/10 px-5 py-2 text-sm font-semibold">
                Get Directions →
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* =========================
          CONTACT FORM
      ========================== */}

      <section
        id="contact"
        className="mx-auto max-w-7xl px-5 pb-20 md:px-6"
      >
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* Left */}

          <div>
            <p className="font-semibold text-cyan-400">
              ENQUIRE NOW
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              Find your perfect room
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-slate-400">
              Tell us what you are looking for and we will help
              you check availability, pricing and room options.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
                <p className="text-sm text-slate-500">
                  LOCATION
                </p>

                <p className="mt-2 font-semibold">
                  {pgData.location}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
                <p className="text-sm text-slate-500">
                  QUICK CONTACT
                </p>

                <p className="mt-2 font-semibold">
                  {pgData.phone}
                </p>
              </div>
            </div>
          </div>

          {/* Form */}

          <div className="rounded-3xl border border-white/10 bg-slate-900 p-6 md:p-8">
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                />
              </div>

              <div>
                <label
                  htmlFor="room"
                  className="mb-2 block text-sm font-medium"
                >
                  Preferred Room
                </label>

                <select
                  id="room"
                  name="room"
                  required
                  className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                >
                  <option value="">
                    Select a room
                  </option>

                  {pgData.rooms.map((room) => (
                    <option
                      key={room.type}
                      value={room.type}
                    >
                      {room.type} — {room.price}/month
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Example: I want to visit the PG this weekend."
                  className="w-full resize-none rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Send Enquiry on WhatsApp →
              </button>

              {submitted && (
                <p className="text-center text-sm text-green-400">
                  Your enquiry is ready to send on WhatsApp.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================== */}

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between md:px-6">
          <div>
            <p className="font-semibold text-white">
              {pgData.name}
            </p>

            <p className="mt-1">
              {pgData.brand.footerText}
            </p>

            <p className="mt-1">
              {pgData.location}
            </p>
          </div>

          <p>
            © 2026 {pgData.name}. All rights reserved.
          </p>
        </div>
      </footer>

      {/* =========================
          FLOATING WHATSAPP
      ========================== */}

      <a
        href={`https://wa.me/${pgData.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl shadow-2xl transition hover:scale-110"
      >
        💬
      </a>
    </main>
  );
}