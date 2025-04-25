"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { ArrowRight, Award, BookOpen, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/81316585-8229-4fc8-919c-e8edb23e060b.png"
            alt="Campus view"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Welcome to Horizon Academy
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg sm:text-xl">
              Empowering minds, shaping futures. A place where excellence meets
              opportunity.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button size="lg" asChild>
                <Link href="/admissions">Explore Admissions</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10"
                asChild
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-0 left-0 right-0 z-10 flex justify-center pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="flex space-x-8 rounded-full bg-white/10 px-8 py-4 backdrop-blur-md">
            <div className="text-center text-white">
              <div className="text-3xl font-bold">98%</div>
              <div className="text-sm">Graduation Rate</div>
            </div>
            <div className="text-center text-white">
              <div className="text-3xl font-bold">15:1</div>
              <div className="text-sm">Student-Faculty Ratio</div>
            </div>
            <div className="text-center text-white">
              <div className="text-3xl font-bold">92%</div>
              <div className="text-sm">College Acceptance</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 w-full">
        <div className="container mx-auto p-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Excellence in Education
            </h2>
            <p className="mb-10 text-lg text-muted-foreground">
              At Horizon Academy, we believe in nurturing not just academic
              excellence, but also character, creativity, and critical thinking.
              Our holistic approach to education prepares students for success
              in a rapidly changing world.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-3"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={item}>
              <Card>
                <CardHeader className="space-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Academic Excellence</CardTitle>
                  <CardDescription>
                    Rigorous curriculum designed to challenge and inspire
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our curriculum is designed to foster critical thinking,
                    creativity, and a deep understanding of core subjects while
                    preparing students for future success.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-1" asChild>
                    <Link href="/academics">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card>
                <CardHeader className="space-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">
                    Supportive Community
                  </CardTitle>
                  <CardDescription>
                    A nurturing environment where every student belongs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We foster a close-knit community where students feel valued,
                    supported, and empowered to reach their full potential in a
                    safe and inclusive environment.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-1" asChild>
                    <Link href="/campus-life">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card>
                <CardHeader className="space-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Future Ready</CardTitle>
                  <CardDescription>
                    Preparing students for success in college and beyond
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our comprehensive approach ensures students develop the
                    skills, knowledge, and character needed to thrive in
                    college, career, and life.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-1" asChild>
                    <Link href="/about">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-muted py-20 w-full">
        <div className="container mx-auto p-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Our Academic Programs
            </h2>
            <p className="mb-10 text-lg text-muted-foreground">
              Discover our comprehensive range of academic programs designed to
              nurture intellectual curiosity and prepare students for future
              success.
            </p>
          </motion.div>

          <Tabs defaultValue="elementary" className="mx-auto max-w-4xl">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="elementary">Elementary</TabsTrigger>
              <TabsTrigger value="middle">Middle School</TabsTrigger>
              <TabsTrigger value="high">High School</TabsTrigger>
            </TabsList>
            <TabsContent value="elementary" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="https://images.pexels.com/photos/8613059/pexels-photo-8613059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Elementary students learning"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="mb-2 text-2xl font-bold">
                    Elementary School (K-5)
                  </h3>
                  <p className="mb-4 text-muted-foreground">
                    Our elementary program builds a strong foundation in core
                    subjects while nurturing curiosity and a love of learning
                    through hands-on experiences and creative exploration.
                  </p>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>Foundational literacy and numeracy</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>Project-based learning approach</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>Arts and music integration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>Character development</span>
                    </li>
                  </ul>
                  <Button asChild>
                    <Link href="/academics#elementary">Learn More</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="middle" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="https://images.pexels.com/photos/8617813/pexels-photo-8617813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Middle school students in science lab"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="mb-2 text-2xl font-bold">
                    Middle School (6-8)
                  </h3>
                  <p className="mb-4 text-muted-foreground">
                    Our middle school program supports students through this
                    critical transition period with engaging academics,
                    social-emotional learning, and opportunities to explore
                    diverse interests.
                  </p>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>Advanced core curriculum</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>STEM and humanities focus</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>Advisory program</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>Leadership opportunities</span>
                    </li>
                  </ul>
                  <Button asChild>
                    <Link href="/academics#middle">Learn More</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="high" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="https://images.pexels.com/photos/5676744/pexels-photo-5676744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="High school students collaborating"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="mb-2 text-2xl font-bold">
                    High School (9-12)
                  </h3>
                  <p className="mb-4 text-muted-foreground">
                    Our high school program prepares students for college and
                    beyond with rigorous academics, diverse electives, and
                    opportunities for leadership, research, and real-world
                    experience.
                  </p>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>College preparatory curriculum</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>Advanced Placement courses</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>Specialized academies</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>College counseling</span>
                    </li>
                  </ul>
                  <Button asChild>
                    <Link href="/academics#high">Learn More</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Campus Life Section */}
      <section className="py-20 w-full">
        <div className="container mx-auto p-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Campus Life
            </h2>
            <p className="mb-10 text-lg text-muted-foreground">
              Life at Horizon Academy extends beyond the classroom. Our vibrant
              campus community offers numerous opportunities for students to
              explore interests, develop talents, and build lasting friendships.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <motion.div
              className="group overflow-hidden rounded-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/9654181/pexels-photo-9654181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Athletics"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-bold">Athletics</h3>
                  <p className="text-sm">Competitive sports programs</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="group overflow-hidden rounded-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/8923880/pexels-photo-8923880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Arts"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-bold">Arts</h3>
                  <p className="text-sm">Visual and performing arts</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="group overflow-hidden rounded-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/8466021/pexels-photo-8466021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Clubs"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-bold">Clubs</h3>
                  <p className="text-sm">Student-led organizations</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="group overflow-hidden rounded-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/31258415/pexels-photo-31258415/free-photo-of-friendly-classroom-interaction-in-vietnam-school.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Community Service"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-bold">Service</h3>
                  <p className="text-sm">Community engagement</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-10 text-center">
            <Button size="lg" asChild>
              <Link href="/campus-life">Explore Campus Life</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted py-20 w-full">
        <div className="container mx-auto p-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              What Our Community Says
            </h2>
            <p className="mb-10 text-lg text-muted-foreground">
              Hear from our students, parents, and alumni about their
              experiences at Horizon Academy.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded-full bg-primary/10">
                      <Image
                        src="https://images.pexels.com/photos/6538435/pexels-photo-6538435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Student portrait"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">Emma Johnson</h4>
                      <p className="text-sm text-muted-foreground">
                        Class of 2023
                      </p>
                    </div>
                  </div>
                  <p className="italic text-muted-foreground">
                    "My time at Horizon Academy has been transformative. The
                    teachers truly care about each student's success, and I've
                    had so many opportunities to explore my interests and
                    develop my talents."
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded-full bg-primary/10">
                      <Image
                        src="https://images.pexels.com/photos/7869112/pexels-photo-7869112.jpeg"
                        alt="Parent portrait"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">Michael Rodriguez</h4>
                      <p className="text-sm text-muted-foreground">Parent</p>
                    </div>
                  </div>
                  <p className="italic text-muted-foreground">
                    "As parents, we couldn't be happier with our decision to
                    enroll our children at Horizon Academy. The supportive
                    community, challenging academics, and focus on character
                    development have exceeded our expectations."
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded-full bg-primary/10">
                      <Image
                        src="https://images.pexels.com/photos/10375930/pexels-photo-10375930.jpeg"
                        alt="Alumni portrait"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">Dr. Sarah Chen</h4>
                      <p className="text-sm text-muted-foreground">
                        Alumni, Class of 2010
                      </p>
                    </div>
                  </div>
                  <p className="italic text-muted-foreground">
                    "The foundation I received at Horizon Academy prepared me
                    not just for college, but for life. The critical thinking
                    skills, work ethic, and values I developed there continue to
                    serve me in my career as a physician."
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 w-full">
        <div className="container mx-auto p-4">
          <div className="rounded-xl bg-primary p-8 text-primary-foreground md:p-12 lg:p-16">
            <div className="mx-auto max-w-3xl text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Ready to Join Our Community?
                </h2>
                <p className="mb-8 text-lg opacity-90">
                  Take the first step toward providing your child with an
                  exceptional educational experience. Schedule a tour, attend an
                  open house, or apply today.
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/admissions#apply">Apply Now</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground/20 hover:bg-primary-foreground/50 text-black"
                    asChild
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="bg-muted py-20 w-full">
        <div className="container mx-auto p-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              News & Upcoming Events
            </h2>
            <p className="mb-10 text-lg text-muted-foreground">
              Stay up-to-date with the latest happenings at Horizon Academy.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <div className="overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/8471826/pexels-photo-8471826.jpeg"
                    alt="Science fair"
                    width={400}
                    height={200}
                    className="w-full"
                  />
                </div>
                <CardHeader>
                  <div className="text-sm text-muted-foreground">
                    May 15, 2025
                  </div>
                  <CardTitle className="text-xl">Annual Science Fair</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Students will showcase their innovative science projects at
                    our annual Science Fair. Join us to celebrate their
                    achievements and creativity.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-1">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <div className="overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/2342409/pexels-photo-2342409.jpeg"
                    alt="Spring concert"
                    width={400}
                    height={200}
                    className="w-full"
                  />
                </div>
                <CardHeader>
                  <div className="text-sm text-muted-foreground">
                    June 2, 2025
                  </div>
                  <CardTitle className="text-xl">Spring Concert</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our music department presents the annual Spring Concert
                    featuring performances by our band, orchestra, and choir
                    students.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-1">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <div className="overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Graduation ceremony"
                    width={400}
                    height={200}
                    className="w-full"
                  />
                </div>
                <CardHeader>
                  <div className="text-sm text-muted-foreground">
                    June 15, 2025
                  </div>
                  <CardTitle className="text-xl">Graduation Ceremony</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Join us as we celebrate the achievements of the Class of
                    2025 at our annual Graduation Ceremony.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-1">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>

          <div className="mt-10 text-center">
            <Button variant="outline" size="lg">
              View All News & Events
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
