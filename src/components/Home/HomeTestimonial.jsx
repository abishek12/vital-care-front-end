"use client";

import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

import BookAssessmentDrawer from "../Buton/AssessmentButton";
import { useGetTestimonialsQuery } from "@/lib/api/testimonial.api";
import { ApiStatusHandler } from "@/components/Redux/ApiStatusHandler";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function HomeTestimonial() {
  const [ref, isInView] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "100px",
  });
  
  const {
    data: testimonials,
    isLoading,
    isError,
    error,
  } = useGetTestimonialsQuery();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      // ref={ref}
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative isolate text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/images/community-group-2.jpg')" }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/70 via-black/55 to-black/45" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-4 py-16 md:grid-cols-12 md:px-6 md:py-24">
        {/* Left section */}
        <motion.div className="md:col-span-5" variants={itemVariants}>
          <div className="inline-flex items-center rounded-full border border-[#3aa657] bg-white/5 px-3 py-1 text-xs font-semibold text-[#3aa657] ring-1 ring-inset ring-[#3aa657]/30">
            TESTIMONIALS
          </div>

          <h2
            id="testimonials-heading"
            className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl"
          >
            <span className="block">A Lifeline Of</span>
            <span className="block text-[var(--primary-red)]">
              NDIS Support
            </span>
          </h2>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/90">
            Hear from those who have found a lifeline in our personalised NDIS
            support...
          </p>

          <div className="mt-6">
            <BookAssessmentDrawer
              trigger={
                <button className="rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/25 hover:bg-white/20">
                  Book An Assessment
                </button>
              }
            />{" "}
          </div>
        </motion.div>

        {/* Right section (Carousel) */}
        <motion.div className="md:col-span-7" variants={itemVariants}>
          <ApiStatusHandler
            isLoading={isLoading}
            isError={isError}
            error={error}
            isEmpty={!testimonials || testimonials.items.length === 0}
            loadingComponent={
              <div className="flex h-64 items-center justify-center text-white">
                <div className="text-center">
                  <div className="mb-2 h-8 w-8 animate-spin rounded-full border-4 border-[var(--primary-red)] border-t-transparent mx-auto"></div>
                  <p>Loading testimonials...</p>
                </div>
              </div>
            }
            errorComponent={
              <div className="flex h-64 items-center justify-center text-white">
                <div className="text-center">
                  <p className="text-lg font-semibold">
                    Error loading testimonials
                  </p>
                  <p className="mt-2 text-sm opacity-80">
                    {error?.data?.message || "Please try again later"}
                  </p>
                </div>
              </div>
            }
            emptyComponent={
              <div className="flex h-64 items-center justify-center text-white">
                <div className="text-center">
                  <p className="text-lg font-semibold">No testimonials yet</p>
                  <p className="mt-2 text-sm opacity-80">
                    Be the first to share your experience!
                  </p>
                </div>
              </div>
            }
          >
            {/* Added conditional rendering for testimonials */}
            {testimonials && testimonials.items.length > 0 && (
              <Swiper
                modules={[Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  768: { slidesPerView: 2 },
                }}
                pagination={{ clickable: true }}
                className="testimonial-swiper"
              >
                {testimonials.items.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <TestimonialCard
                      name={testimonial.fullname}
                      role="NDIS Participant"
                      rating={testimonial.rating || 5}
                      quote={testimonial.description}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </ApiStatusHandler>
        </motion.div>
      </div>
    </motion.section>
  );
}

function TestimonialCard({ name, role, rating, quote }) {
  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <motion.article
      className="overflow-hidden rounded-3xl bg-white/90 text-gray-900 shadow-xl backdrop-blur"
      variants={cardVariants}
    >
      <div className="bg-[var(--primary-blue)] px-6 py-4 text-white">
        <div className="text-sm font-extrabold">— {name}</div>
        <div className="mt-1 flex items-center justify-between gap-3 text-xs">
          <Stars count={rating} />
          <span className="opacity-90">{role}</span>
        </div>
      </div>
      <div className="px-6 py-5 text-sm leading-relaxed text-gray-800">
        <p>{quote}</p>
      </div>
    </motion.article>
  );
}

function Stars({ count = 5 }) {
  const starVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${count} out of 5 stars`}
      role="img"
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < count;
        return (
          <motion.div
            key={i}
            custom={i}
            variants={starVariants}
          >
            <Star
              className={`size-4 ${
                filled ? "text-[var(--primary-red)]" : "text-white/50"
              }`}
              strokeWidth={filled ? 0 : 2}
              fill={filled ? "currentColor" : "none"}
            />
          </motion.div>
        );
      })}
    </div>
  );
}