import { Appbar } from "../components/Appbar";

export default function LandingPage() {
    return (
      <div className="flex min-h-screen flex-col">
        <Appbar />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950/30 dark:to-background">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <span className="inline-flex px-3 py-1 text-sm rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-800/30 dark:text-emerald-400">
                      Launch Offer: 25% Off All Courses
                    </span>
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Unlock Your Potential With Expert-Led Courses
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      Learn from industry experts and transform your skills with our comprehensive online courses.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <button className="inline-flex h-12 items-center justify-center rounded-md bg-emerald-600 px-6 py-3 text-base font-medium text-white shadow transition-colors hover:bg-emerald-700">
                      Browse Courses
                    </button>
                    <button className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-base font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                      Learn More
                    </button>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      <span>10k+ Students</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                      <span>100+ Courses</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-yellow-500"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <span>4.8/5 Rating</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-2xl">
                    <img
                      src="/placeholder.svg?height=500&width=800"
                      alt="Online learning platform"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent flex items-end p-6">
                      <button className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                        Watch Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          {/* Features Section */}
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose EduMaster?</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our platform is designed to provide the best learning experience with features that set us apart.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
                {[
                  {
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-10 w-10 text-emerald-600"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                    ),
                    title: "Expert Instructors",
                    description: "Learn from industry professionals with years of real-world experience.",
                  },
                  {
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-10 w-10 text-emerald-600"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    ),
                    title: "HD Video Content",
                    description: "High-quality video lessons that you can watch anytime, anywhere.",
                  },
                  {
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-10 w-10 text-emerald-600"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    ),
                    title: "Completion Certificates",
                    description: "Earn recognized certificates upon successful course completion.",
                  },
                  {
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-10 w-10 text-emerald-600"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    ),
                    title: "Lifetime Access",
                    description: "Pay once and access your course content forever, including updates.",
                  },
                  {
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-10 w-10 text-emerald-600"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    ),
                    title: "Community Support",
                    description: "Join a community of learners and get help when you need it.",
                  },
                  {
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-10 w-10 text-emerald-600"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ),
                    title: "Satisfaction Guarantee",
                    description: "30-day money-back guarantee if you're not completely satisfied.",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm">
                    {feature.icon}
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground text-center">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
  
          {/* Popular Courses Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Popular Courses</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Explore our most popular courses and start your learning journey today.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-6xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Full Stack Complete Course",
                    category: "Development",
                    rating: 4.9,
                    students: 15420,
                    price: "$89.99",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    title: "DSA Master Complete Batch",
                    category: "DSA",
                    rating: 4.8,
                    students: 12350,
                    price: "$79.99",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    title: "Competitive Programming Batch",
                    category: "DSA & CP",
                    rating: 4.7,
                    students: 9870,
                    price: "$99.99",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    title: "Mobile App Development",
                    category: "Development",
                    rating: 4.9,
                    students: 10250,
                    price: "$94.99",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                ].map((course, index) => (
                  <div key={index} className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div className="relative">
                      <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="w-full h-48 object-cover"
                      />
                      <span className="absolute top-2 right-2 rounded-full px-2 py-1 text-xs font-semibold bg-emerald-600 text-white">
                        {course.category}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2">{course.title}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill={i < Math.floor(course.rating) ? "currentColor" : "none"}
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={`h-4 w-4 ${i < Math.floor(course.rating) ? "text-yellow-500" : "text-gray-300"}`}
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm">{course.rating}</span>
                        <span className="text-sm text-muted-foreground">
                          ({course.students.toLocaleString()} students)
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <span className="font-bold text-lg">{course.price}</span>
                        <button className="inline-flex h-9 items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-emerald-700">
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <button className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground gap-2">
                  View All Courses
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>
          </section>
  
          {/* Testimonials Section */}
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Students Say</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Don't just take our word for it. Here's what our students have to say about their learning experience.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-6xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "Sarah Johnson",
                    role: "Web Developer",
                    content:
                      "The Web Development Bootcamp completely transformed my career. I went from knowing nothing about coding to landing a full-time developer job in just 6 months!",
                    avatar: "/placeholder.svg?height=100&width=100",
                  },
                  {
                    name: "Michael Chen",
                    role: "Marketing Specialist",
                    content:
                      "The Digital Marketing Masterclass provided me with practical skills I could immediately apply to my work. My campaigns are now performing 40% better than before.",
                    avatar: "/placeholder.svg?height=100&width=100",
                  },
                  {
                    name: "Jessica Williams",
                    role: "Data Analyst",
                    content:
                      "As someone transitioning careers, the Data Science course gave me exactly what I needed to break into the field. The instructor support was exceptional.",
                    avatar: "/placeholder.svg?height=100&width=100",
                  },
                  {
                    name: "David Rodriguez",
                    role: "UX Designer",
                    content:
                      "The UX/UI Design course helped me understand the principles behind great design. I've completely revamped my portfolio and landed my dream job!",
                    avatar: "/placeholder.svg?height=100&width=100",
                  },
                  {
                    name: "Emma Thompson",
                    role: "Financial Analyst",
                    content:
                      "The Financial Analysis course was comprehensive and practical. I use the Excel modeling techniques I learned every day in my work.",
                    avatar: "/placeholder.svg?height=100&width=100",
                  },
                  {
                    name: "James Wilson",
                    role: "Mobile Developer",
                    content:
                      "I tried learning app development on my own for years with little success. This course finally made everything click for me. Worth every penny!",
                    avatar: "/placeholder.svg?height=100&width=100",
                  },
                ].map((testimonial, index) => (
                  <div key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm text-left">
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="rounded-full overflow-hidden h-12 w-12">
                          <img
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4 text-yellow-500"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-sm">{testimonial.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
  
          {/* Pricing Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Simple, Transparent Pricing
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Choose the plan that's right for you and start learning today.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
                {[
                  {
                    name: "Basic",
                    price: "$9.99",
                    period: "per month",
                    description: "Perfect for beginners looking to explore our platform.",
                    features: [
                      "Access to 50+ courses",
                      "Basic course materials",
                      "Community forum access",
                      "Email support",
                      "Course completion certificates",
                    ],
                    cta: "Get Started",
                    popular: false,
                  },
                  {
                    name: "Pro",
                    price: "$19.99",
                    period: "per month",
                    description: "Our most popular plan for serious learners.",
                    features: [
                      "Access to all 100+ courses",
                      "Premium course materials",
                      "Community forum access",
                      "Priority email support",
                      "Course completion certificates",
                      "Downloadable resources",
                      "1-on-1 mentor session monthly",
                    ],
                    cta: "Get Started",
                    popular: true,
                  },
                  {
                    name: "Enterprise",
                    price: "$49.99",
                    period: "per month",
                    description: "For teams and organizations looking to upskill.",
                    features: [
                      "Access to all 100+ courses",
                      "Premium course materials",
                      "Private community forum",
                      "24/7 priority support",
                      "Course completion certificates",
                      "Downloadable resources",
                      "Weekly 1-on-1 mentor sessions",
                      "Custom learning paths",
                      "Team analytics dashboard",
                    ],
                    cta: "Contact Sales",
                    popular: false,
                  },
                ].map((plan, index) => (
                  <div
                    key={index}
                    className={`relative rounded-lg border bg-card text-card-foreground shadow ${
                      plan.popular ? "border-emerald-600 shadow-lg" : ""
                    }`}
                  >
                    {plan.popular && (
                      <span className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/2 rounded-full px-3 py-1 text-xs font-semibold bg-emerald-600 text-white">
                        Most Popular
                      </span>
                    )}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <div className="mb-4">
                        <span className="text-3xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground"> {plan.period}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                      <ul className="space-y-2 mb-6">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4 text-emerald-600"
                            >
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                              <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <button
                        className={`w-full inline-flex h-10 items-center justify-center rounded-md ${
                          plan.popular
                            ? "bg-emerald-600 text-white hover:bg-emerald-700"
                            : "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                        } px-4 py-2 text-sm font-medium`}
                      >
                        {plan.cta}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
  
          {/* CTA Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-600 text-white">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                      Ready to Start Your Learning Journey?
                    </h2>
                    <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed opacity-90">
                      Join thousands of students already learning on our platform. Get started today with a 7-day free
                      trial.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <button className="inline-flex h-10 items-center justify-center rounded-md bg-white text-emerald-600 px-4 py-2 text-sm font-medium hover:bg-gray-100">
                      Start Free Trial
                    </button>
                    <button className="inline-flex h-10 items-center justify-center rounded-md border border-white text-white px-4 py-2 text-sm font-medium hover:bg-emerald-700">
                      View Courses
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="space-y-4 w-full max-w-md">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col items-center justify-center p-4 bg-emerald-700/50 rounded-lg">
                        <h3 className="text-3xl font-bold">100+</h3>
                        <p className="text-sm opacity-90">Expert-led courses</p>
                      </div>
                      <div className="flex flex-col items-center justify-center p-4 bg-emerald-700/50 rounded-lg">
                        <h3 className="text-3xl font-bold">10k+</h3>
                        <p className="text-sm opacity-90">Active students</p>
                      </div>
                      <div className="flex flex-col items-center justify-center p-4 bg-emerald-700/50 rounded-lg">
                        <h3 className="text-3xl font-bold">4.8</h3>
                        <p className="text-sm opacity-90">Average rating</p>
                      </div>
                      <div className="flex flex-col items-center justify-center p-4 bg-emerald-700/50 rounded-lg">
                        <h3 className="text-3xl font-bold">30-day</h3>
                        <p className="text-sm opacity-90">Money-back guarantee</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        {/* Footer Section */}
        <footer className="border-t bg-muted">
          <div className="container flex flex-col gap-6 py-12 px-4 md:px-6">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
              <div className="col-span-2 lg:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-emerald-600"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                  <span className="text-xl font-bold">EduMaster</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 max-w-xs">
                  EduMaster is the leading platform for online learning, offering professional courses taught by industry
                  experts.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    <span className="sr-only">Twitter</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    <span className="sr-only">Facebook</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    <span className="sr-only">Instagram</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-4">Courses</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                      Data Science
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                      Digital Marketing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                      UX/UI Design
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                      Finance
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-4">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                      Press
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                      Partners
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-4">Support</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                      Community
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                      Accessibility
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <p className="text-xs text-muted-foreground">
                &copy; {new Date().getFullYear()} EduMaster. All rights reserved.
              </p>
              <nav className="flex gap-4 text-xs">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Cookie Policy
                </a>
              </nav>
            </div>
          </div>
        </footer>
      </div>
    )
}