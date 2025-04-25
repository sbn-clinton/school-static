"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
  BookOpen,
  Clock,
  GraduationCap,
  Heart,
  MapPin,
  Target,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
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
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 w-full">
        <div className="container mx-auto p-4">
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                About Horizon Academy
              </h1>
              <p className="mb-6 text-lg text-muted-foreground">
                Founded in 1985, Horizon Academy has established itself as a
                leading educational institution committed to academic
                excellence, character development, and preparing students for
                success in a rapidly changing world.
              </p>
              <p className="mb-8 text-lg text-muted-foreground">
                Our approach combines rigorous academics with a nurturing
                community where students are encouraged to explore their
                interests, develop their talents, and become thoughtful, engaged
                citizens.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button size="lg" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/admissions">Admissions</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="https://images.pexels.com/photos/5428267/pexels-photo-5428267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="School building"
                  width={800}
                  height={600}
                  className="w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
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
              Our Mission & Values
            </h2>
            <p className="mb-10 text-lg text-muted-foreground">
              At Horizon Academy, we are guided by a clear mission and a set of
              core values that inform everything we do.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="overflow-hidden">
              <div className="bg-primary p-6 text-primary-foreground">
                <h3 className="mb-2 text-2xl font-bold">Our Mission</h3>
                <p>
                  To provide a transformative educational experience that
                  nurtures intellectual curiosity, character development, and a
                  commitment to making a positive impact in the world.
                </p>
              </div>
              <CardContent className="p-6">
                <p className="mb-6 text-muted-foreground">
                  We fulfill our mission by:
                </p>
                <motion.ul
                  className="grid gap-4"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <motion.li variants={item} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <BookOpen className="h-3 w-3 text-primary" />
                    </div>
                    <span>
                      Providing a rigorous academic program that challenges
                      students to think critically and creatively
                    </span>
                  </motion.li>
                  <motion.li variants={item} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Heart className="h-3 w-3 text-primary" />
                    </div>
                    <span>
                      Fostering a supportive community where every student feels
                      valued and empowered
                    </span>
                  </motion.li>
                  <motion.li variants={item} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <GraduationCap className="h-3 w-3 text-primary" />
                    </div>
                    <span>
                      Preparing students for success in college and beyond
                    </span>
                  </motion.li>
                  <motion.li variants={item} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-3 w-3 text-primary" />
                    </div>
                    <span>
                      Developing ethical leaders who contribute positively to
                      society
                    </span>
                  </motion.li>
                </motion.ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="bg-primary p-6 text-primary-foreground">
                <h3 className="mb-2 text-2xl font-bold">Our Core Values</h3>
                <p>
                  These values guide our decisions, shape our culture, and
                  define our community.
                </p>
              </div>
              <CardContent className="p-6">
                <motion.ul
                  className="grid gap-4"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <motion.li variants={item} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Target className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold">Excellence</span>
                      <p className="text-sm text-muted-foreground">
                        We strive for excellence in all endeavors, challenging
                        ourselves to grow and improve.
                      </p>
                    </div>
                  </motion.li>
                  <motion.li variants={item} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Heart className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold">Integrity</span>
                      <p className="text-sm text-muted-foreground">
                        We act with honesty, ethics, and responsibility in all
                        that we do.
                      </p>
                    </div>
                  </motion.li>
                  <motion.li variants={item} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold">Community</span>
                      <p className="text-sm text-muted-foreground">
                        We foster a supportive, inclusive environment where
                        everyone belongs.
                      </p>
                    </div>
                  </motion.li>
                  <motion.li variants={item} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <BookOpen className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold">Curiosity</span>
                      <p className="text-sm text-muted-foreground">
                        We nurture a love of learning and intellectual
                        exploration.
                      </p>
                    </div>
                  </motion.li>
                </motion.ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History Section */}
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
              Our History
            </h2>
            <p className="mb-10 text-lg text-muted-foreground">
              For over three decades, Horizon Academy has been committed to
              providing an exceptional educational experience.
            </p>
          </motion.div>

          <Tabs defaultValue="founding" className="mx-auto max-w-4xl">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="founding">Founding Years</TabsTrigger>
              <TabsTrigger value="growth">Growth & Development</TabsTrigger>
              <TabsTrigger value="today">Horizon Today</TabsTrigger>
            </TabsList>
            <TabsContent value="founding" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="https://images.pexels.com/photos/8500353/pexels-photo-8500353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="School founding"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="mb-2 text-2xl font-bold">1985-1995</h3>
                  <p className="mb-4 text-muted-foreground">
                    Horizon Academy was founded in 1985 by Dr. Elizabeth Morgan,
                    a visionary educator who believed in creating a school that
                    combined academic rigor with character development and a
                    supportive community.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    Starting with just 50 students and 5 teachers in a small
                    building, the school quickly gained recognition for its
                    innovative approach to education and commitment to
                    excellence.
                  </p>
                  <p className="text-muted-foreground">
                    By 1995, enrollment had grown to 250 students, and the
                    school had expanded its campus to accommodate its growing
                    community.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="growth" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="https://images.pexels.com/photos/8423396/pexels-photo-8423396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="School expansion"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="mb-2 text-2xl font-bold">1996-2010</h3>
                  <p className="mb-4 text-muted-foreground">
                    The late 1990s and early 2000s marked a period of
                    significant growth and development for Horizon Academy.
                    Under the leadership of Dr. Morgan and her successor, Dr.
                    James Wilson, the school expanded its academic programs,
                    athletic facilities, and arts offerings.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    In 2005, Horizon Academy opened its state-of-the-art Science
                    and Technology Center, reflecting its commitment to
                    preparing students for the challenges and opportunities of
                    the 21st century.
                  </p>
                  <p className="text-muted-foreground">
                    By 2010, enrollment had grown to 800 students, and the
                    school had established a reputation as one of the region's
                    premier educational institutions.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="today" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="https://images.pexels.com/photos/11010063/pexels-photo-11010063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Modern campus"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="mb-2 text-2xl font-bold">2011-Present</h3>
                  <p className="mb-4 text-muted-foreground">
                    Today, Horizon Academy serves over 1,200 students from
                    diverse backgrounds. Our beautiful campus features modern
                    classrooms, advanced technology, extensive athletic
                    facilities, and dedicated spaces for the arts.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    Under the current leadership of Dr. Sarah Chen, Horizon
                    Academy continues to evolve while remaining true to its
                    founding mission and values. Recent initiatives include
                    expanded STEM programs, global partnerships, and enhanced
                    sustainability efforts.
                  </p>
                  <p className="text-muted-foreground">
                    As we look to the future, we remain committed to providing
                    an exceptional educational experience that prepares students
                    to thrive in a complex and rapidly changing world.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Campus Section */}
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
              Our Campus
            </h2>
            <p className="mb-10 text-lg text-muted-foreground">
              Situated on 50 acres of beautiful grounds, our campus provides an
              inspiring environment for learning and growth.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              className="group overflow-hidden rounded-lg bg-background"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Academic buildings"
                  width={500}
                  height={300}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">Academic Buildings</h3>
                <p className="text-muted-foreground">
                  Our modern academic buildings feature spacious classrooms,
                  specialized labs, and collaborative learning spaces designed
                  to support our innovative curriculum.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="group overflow-hidden rounded-lg bg-background"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/2874718/pexels-photo-2874718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Athletic facilities"
                  width={500}
                  height={300}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">Athletic Facilities</h3>
                <p className="text-muted-foreground">
                  Our comprehensive athletic facilities include gymnasiums,
                  playing fields, tennis courts, and a swimming pool, supporting
                  our diverse sports programs.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="group overflow-hidden rounded-lg bg-background"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/7605840/pexels-photo-7605840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Arts center"
                  width={500}
                  height={300}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">Arts Center</h3>
                <p className="text-muted-foreground">
                  Our dedicated Arts Center houses studios, practice rooms, and
                  a 500-seat theater, providing spaces for students to explore
                  and develop their artistic talents.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="group overflow-hidden rounded-lg bg-background"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/6281030/pexels-photo-6281030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Library and media center"
                  width={500}
                  height={300}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">
                  Library & Media Center
                </h3>
                <p className="text-muted-foreground">
                  Our library and media center offers extensive print and
                  digital resources, collaborative study spaces, and technology
                  to support research and learning.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="group overflow-hidden rounded-lg bg-background"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/19393164/pexels-photo-19393164/free-photo-of-microscopes-in-classroom.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Science and technology center"
                  width={500}
                  height={300}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">
                  Science & Technology Center
                </h3>
                <p className="text-muted-foreground">
                  Our state-of-the-art Science and Technology Center features
                  advanced labs, maker spaces, and technology resources for
                  hands-on learning and innovation.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="group overflow-hidden rounded-lg bg-background"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/1164572/pexels-photo-1164572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Outdoor learning spaces"
                  width={500}
                  height={300}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">
                  Outdoor Learning Spaces
                </h3>
                <p className="text-muted-foreground">
                  Our campus includes gardens, outdoor classrooms, and natural
                  areas that serve as extensions of our learning environment and
                  connect students with nature.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mt-10 text-center">
            <Button size="lg" asChild>
              <Link href="/contact#visit">Schedule a Campus Tour</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
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
              Our Leadership
            </h2>
            <p className="mb-10 text-lg text-muted-foreground">
              Meet the dedicated professionals who lead Horizon Academy.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="https://images.pexels.com/photos/1139319/pexels-photo-1139319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Dr. Sarah Chen"
                  width={200}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold">Dr. Sarah Chen</h3>
              <p className="mb-3 text-primary">Head of School</p>
              <p className="mx-auto max-w-sm text-muted-foreground">
                Dr. Chen brings over 20 years of experience in education to her
                role as Head of School. She is committed to fostering a culture
                of excellence, innovation, and inclusion.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="https://images.pexels.com/photos/8617757/pexels-photo-8617757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Dr. Michael Rodriguez"
                  width={200}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold">Dr. Michael Rodriguez</h3>
              <p className="mb-3 text-primary">Academic Dean</p>
              <p className="mx-auto max-w-sm text-muted-foreground">
                As Academic Dean, Dr. Rodriguez oversees curriculum development,
                faculty support, and academic programs, ensuring that our
                educational offerings remain rigorous and relevant.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Ms. Jennifer Park"
                  width={200}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold">Ms. Jennifer Park</h3>
              <p className="mb-3 text-primary">Director of Student Life</p>
              <p className="mx-auto max-w-sm text-muted-foreground">
                Ms. Park leads our student life programs, creating opportunities
                for students to develop leadership skills, pursue their
                interests, and build a strong sense of community.
              </p>
            </motion.div>
          </div>

          <div className="mt-16">
            <h3 className="mb-8 text-center text-2xl font-bold">
              Board of Trustees
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <h4 className="mb-4 text-xl font-bold">Our Governance</h4>
                  <p className="mb-4 text-muted-foreground">
                    Horizon Academy is governed by a Board of Trustees comprised
                    of dedicated professionals, parents, and alumni who bring
                    diverse expertise and perspectives to their role.
                  </p>
                  <p className="text-muted-foreground">
                    The Board is responsible for setting the strategic direction
                    of the school, ensuring financial sustainability, and
                    supporting the Head of School in fulfilling the school's
                    mission.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h4 className="mb-4 text-xl font-bold">Board Members</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>
                        Mr. David Johnson, Chair (Parent, Business Executive)
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>Dr. Lisa Wong, Vice Chair (Alumna, Physician)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>
                        Mr. Robert Smith, Treasurer (Financial Advisor)
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>Ms. Angela Davis, Secretary (Attorney)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>Dr. James Wilson (Former Head of School)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>And 7 additional members</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Fast Facts Section */}
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
              Fast Facts
            </h2>
            <p className="mb-10 text-lg text-muted-foreground">
              Key statistics and information about Horizon Academy.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <motion.div
              className="rounded-lg bg-background p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-4xl font-bold">1,200+</h3>
              <p className="text-muted-foreground">Students</p>
            </motion.div>

            <motion.div
              className="rounded-lg bg-background p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-4xl font-bold">120</h3>
              <p className="text-muted-foreground">Faculty Members</p>
            </motion.div>

            <motion.div
              className="rounded-lg bg-background p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-4xl font-bold">50</h3>
              <p className="text-muted-foreground">Acre Campus</p>
            </motion.div>

            <motion.div
              className="rounded-lg bg-background p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-4xl font-bold">1985</h3>
              <p className="text-muted-foreground">Year Founded</p>
            </motion.div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h4 className="mb-4 text-xl font-bold">Academic Profile</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>15:1 student-teacher ratio</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>25 Advanced Placement courses offered</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>100% college acceptance rate</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>85% of faculty hold advanced degrees</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Average class size: 18 students</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="mb-4 text-xl font-bold">Student Life</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>40+ student clubs and organizations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>20 varsity athletic teams</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>15 performing arts productions annually</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>
                      5,000+ community service hours completed annually
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>10 global exchange programs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
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
                  Experience Horizon Academy
                </h2>
                <p className="mb-8 text-lg opacity-90">
                  The best way to understand what makes Horizon Academy special
                  is to visit our campus and see our community in action.
                  Schedule a tour, attend an open house, or apply today.
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/admissions#apply">Apply Now</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground/20 hover:bg-primary-foreground/10 text-black"
                    asChild
                  >
                    <Link href="/contact#visit">Schedule a Visit</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
