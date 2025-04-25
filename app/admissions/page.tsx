"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
  Award,
  Calendar,
  CheckCircle,
  Clock,
  FileText,
  GraduationCap,
  Heart,
  HelpCircle,
  MapPin,
  Music,
  Palette,
  Trophy,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AdmissionsPage() {
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
                Join Our Community
              </h1>
              <p className="mb-6 text-lg text-muted-foreground">
                At Horizon Academy, we seek students who are intellectually
                curious, motivated to learn, and eager to contribute to our
                vibrant community.
              </p>
              <p className="mb-8 text-lg text-muted-foreground">
                Our admissions process is designed to identify students who will
                thrive in our challenging academic environment and benefit from
                our holistic approach to education.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button size="lg" asChild>
                  <Link href="#apply">Apply Now</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#visit">Visit Campus</Link>
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
                  src="https://images.pexels.com/photos/698516/pexels-photo-698516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Students on campus"
                  width={800}
                  height={600}
                  className="w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
              Why Choose Horizon Academy?
            </h2>
            <p className="mb-10 text-lg text-muted-foreground">
              Discover what sets our educational experience apart and why
              families choose Horizon Academy for their children.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={item}>
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Academic Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our rigorous curriculum challenges students to think
                    critically, solve complex problems, and develop a deep
                    understanding of core subjects, preparing them for success
                    in college and beyond.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Supportive Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our close-knit community fosters meaningful relationships
                    between students, faculty, and families. Students feel
                    known, valued, and supported throughout their educational
                    journey.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Whole Child Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We nurture not just academic growth, but also character
                    development, creativity, physical well-being, and
                    social-emotional skills, helping students become
                    well-rounded individuals.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>State-of-the-Art Campus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our beautiful 50-acre campus provides an inspiring
                    environment for learning, with modern classrooms, advanced
                    technology, extensive athletic facilities, and dedicated
                    spaces for the arts.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Personalized Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    With small class sizes and a student-centered approach, we
                    provide individualized attention and support, helping each
                    student discover and develop their unique strengths and
                    interests.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>College Preparation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our comprehensive college counseling program and rigorous
                    academic preparation result in a 100% college acceptance
                    rate, with graduates attending some of the most selective
                    colleges and universities.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Admissions Process Section */}
      <section className="py-20 w-full" id="process">
        <div className="container mx-auto p-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Admissions Process
            </h2>
            <p className="mb-10 text-lg text-muted-foreground">
              Our admissions process is designed to be thorough yet supportive,
              helping us get to know your child while giving you the information
              you need to make the right educational choice.
            </p>
          </motion.div>

          <div className="mx-auto max-w-4xl">
            <div className="relative">
              <div className="absolute left-8 top-0 h-full w-0.5 bg-muted-foreground/20 md:left-1/2"></div>
              <div className="space-y-12">
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex flex-col items-center md:flex-row">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground md:absolute md:left-1/2 md:-ml-8">
                      <span className="text-xl font-bold">1</span>
                    </div>
                    <div className="mt-8 md:mt-0 md:w-1/2 md:pr-12">
                      <h3 className="text-xl font-bold">Inquire</h3>
                      <p className="mt-2 text-muted-foreground">
                        Complete our online inquiry form to receive information
                        about our programs, admissions events, and application
                        process.
                      </p>
                    </div>
                    <div className="hidden md:block md:w-1/2"></div>
                  </div>
                </motion.div>

                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="flex flex-col items-center md:flex-row">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground md:absolute md:left-1/2 md:-ml-8">
                      <span className="text-xl font-bold">2</span>
                    </div>
                    <div className="hidden md:block md:w-1/2"></div>
                    <div className="mt-8 md:mt-0 md:w-1/2 md:pl-12">
                      <h3 className="text-xl font-bold">Visit Campus</h3>
                      <p className="mt-2 text-muted-foreground">
                        Attend an open house, take a campus tour, or schedule a
                        shadow day for your child to experience Horizon Academy
                        firsthand.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="flex flex-col items-center md:flex-row">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground md:absolute md:left-1/2 md:-ml-8">
                      <span className="text-xl font-bold">3</span>
                    </div>
                    <div className="mt-8 md:mt-0 md:w-1/2 md:pr-12">
                      <h3 className="text-xl font-bold">Apply</h3>
                      <p className="mt-2 text-muted-foreground">
                        Submit your application online, including all required
                        documents such as transcripts, teacher recommendations,
                        and standardized test scores.
                      </p>
                    </div>
                    <div className="hidden md:block md:w-1/2"></div>
                  </div>
                </motion.div>

                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="flex flex-col items-center md:flex-row">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground md:absolute md:left-1/2 md:-ml-8">
                      <span className="text-xl font-bold">4</span>
                    </div>
                    <div className="hidden md:block md:w-1/2"></div>
                    <div className="mt-8 md:mt-0 md:w-1/2 md:pl-12">
                      <h3 className="text-xl font-bold">
                        Assessment & Interview
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        Schedule an assessment for your child and a family
                        interview with our admissions team to help us get to
                        know your child better.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="flex flex-col items-center md:flex-row">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground md:absolute md:left-1/2 md:-ml-8">
                      <span className="text-xl font-bold">5</span>
                    </div>
                    <div className="mt-8 md:mt-0 md:w-1/2 md:pr-12">
                      <h3 className="text-xl font-bold">Admissions Decision</h3>
                      <p className="mt-2 text-muted-foreground">
                        Receive an admissions decision from our committee. If
                        accepted, you'll receive an enrollment contract and
                        information about next steps.
                      </p>
                    </div>
                    <div className="hidden md:block md:w-1/2"></div>
                  </div>
                </motion.div>

                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <div className="flex flex-col items-center md:flex-row">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground md:absolute md:left-1/2 md:-ml-8">
                      <span className="text-xl font-bold">6</span>
                    </div>
                    <div className="hidden md:block md:w-1/2"></div>
                    <div className="mt-8 md:mt-0 md:w-1/2 md:pl-12">
                      <h3 className="text-xl font-bold">Enroll</h3>
                      <p className="mt-2 text-muted-foreground">
                        Complete the enrollment process by submitting your
                        signed contract and deposit. Welcome to the Horizon
                        Academy community!
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" asChild>
              <Link href="#apply">Start Your Application</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="bg-muted py-20 w-full" id="requirements">
        <div className="container mx-auto p-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Application Requirements
            </h2>
            <p className="mb-10 text-lg text-muted-foreground">
              The following materials are required to complete your application
              to Horizon Academy.
            </p>
          </motion.div>

          <Tabs defaultValue="elementary" className="mx-auto max-w-4xl">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="elementary">Elementary (K-5)</TabsTrigger>
              <TabsTrigger value="middle">Middle School (6-8)</TabsTrigger>
              <TabsTrigger value="high">High School (9-12)</TabsTrigger>
            </TabsList>
            <TabsContent value="elementary" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="font-semibold">
                          Completed Online Application
                        </span>
                        <p className="text-sm text-muted-foreground">
                          Including family information, student information, and
                          application fee.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="font-semibold">
                          Teacher Recommendations
                        </span>
                        <p className="text-sm text-muted-foreground">
                          One from current teacher (two for grades 3-5).
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="font-semibold">School Records</span>
                        <p className="text-sm text-muted-foreground">
                          Report cards from current and previous year (if
                          applicable).
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="font-semibold">
                          Readiness Assessment
                        </span>
                        <p className="text-sm text-muted-foreground">
                          Age-appropriate assessment administered by our
                          admissions team.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="font-semibold">Family Interview</span>
                        <p className="text-sm text-muted-foreground">
                          Meeting with parents/guardians and student with a
                          member of our admissions team.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="font-semibold">Classroom Visit</span>
                        <p className="text-sm text-muted-foreground">
                          Half-day visit for the student to experience our
                          classroom environment.
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="middle" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="font-semibold">
                          Completed Online Application
                        </span>
                        <p className="text-sm text-muted-foreground">
                          Including family information, student information, and
                          application fee.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="font-semibold">
                          Teacher Recommendations
                        </span>
                        <p className="text-sm text-muted-foreground">
                          Two recommendations: one from English/language arts
                          teacher and one from math teacher.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="font-semibold">School Records</span>
                        <p className="text-sm text-muted-foreground">
                          Transcripts/report cards from current and previous two
                          years.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="font-semibold">
                          Standardized Test Scores
                        </span>
                        <p className="text-sm text-muted-foreground">
                          Results from any standardized tests taken in the past
                          two years.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="font-semibold">
                          Entrance Assessment
                        </span>
                        <p className="text-sm text-muted-foreground">
                          Assessment of academic skills and aptitude
                          administered by our admissions team.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="font-semibold">Student Essay</span>
                        <p className="text-sm text-muted-foreground">
                          Short essay written by the student about their
                          interests, goals, and why they want to attend Horizon
                          Academy.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="font-semibold">Family Interview</span>
                        <p className="text-sm text-muted-foreground">
                          Interview with parents/guardians and student with our
                          admissions team.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="font-semibold">Shadow Day</span>
                        <p className="text-sm text-muted-foreground">
                          Full-day visit where the student attends classes with
                          a current student.
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="high" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="font-semibold">
                          Completed Online Application
                        </span>
                        <p className="text-sm text-muted-foreground">
                          Including family information, student information, and
                          application fee.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="font-semibold">
                          Teacher Recommendations
                        </span>
                        <p className="text-sm text-muted-foreground">
                          Three recommendations: English, math, and
                          counselor/advisor.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="font-semibold">
                          Official Transcripts
                        </span>
                        <p className="text-sm text-muted-foreground">
                          Complete transcripts from current school and any high
                          schools previously attended.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="font-semibold">
                          Standardized Test Scores
                        </span>
                        <p className="text-sm text-muted-foreground">
                          SSAT, ISEE, or other standardized test results.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="font-semibold">Student Essays</span>
                        <p className="text-sm text-muted-foreground">
                          Personal statement and supplemental essays on assigned
                          topics.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="font-semibold">Activities Resume</span>
                        <p className="text-sm text-muted-foreground">
                          List of extracurricular activities, community service,
                          leadership roles, and work experience.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="font-semibold">Interview</span>
                        <p className="text-sm text-muted-foreground">
                          Personal interview with the student and separate
                          parent/guardian interview.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="font-semibold">Campus Visit</span>
                        <p className="text-sm text-muted-foreground">
                          Full-day shadow experience with a current student.
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Financial Aid Section */}
      <section className="py-20 w-full" id="financial-aid">
        <div className="container mx-auto p-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Financial Aid & Scholarships
            </h2>
            <p className="mb-10 text-lg text-muted-foreground">
              Horizon Academy is committed to making our education accessible to
              qualified students from diverse socioeconomic backgrounds.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Need-Based Financial Aid</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">
                    Our need-based financial aid program provides assistance to
                    families who demonstrate financial need. We use a
                    third-party service to help determine eligibility and award
                    amounts.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    To apply for financial aid, families must complete the
                    following steps:
                  </p>
                  <ul className="mb-6 space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>
                        Complete the Parents' Financial Statement (PFS) through
                        School and Student Services (SSS).
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>
                        Submit required tax documents and financial information.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>
                        Apply by the financial aid deadline (February 1 for
                        priority consideration).
                      </span>
                    </li>
                  </ul>
                  <Button variant="outline" asChild>
                    <Link href="#apply-aid">Apply for Financial Aid</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Merit Scholarships</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">
                    Horizon Academy offers several merit-based scholarships to
                    recognize exceptional students who demonstrate outstanding
                    academic achievement, leadership, artistic talent, or
                    community service.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    Available scholarships include:
                  </p>
                  <ul className="mb-6 space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Award className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>
                        <strong>Presidential Scholars Program:</strong>{" "}
                        Full-tuition scholarships for top academic achievers.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Palette className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>
                        <strong>Arts Excellence Awards:</strong> Partial
                        scholarships for students with exceptional talent in
                        visual arts, music, or theater.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Heart className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>
                        <strong>Community Impact Scholarships:</strong> Awards
                        for students who have demonstrated significant community
                        service and leadership.
                      </span>
                    </li>
                  </ul>
                  <Button variant="outline" asChild>
                    <Link href="#scholarships">Explore Scholarships</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Important Dates Section */}
      <section className="bg-muted py-20 w-full" id="dates">
        <div className="container mx-auto p-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Important Dates & Deadlines
            </h2>
            <p className="mb-10 text-lg text-muted-foreground">
              Mark your calendar with these key dates for the 2024-2025
              admissions cycle.
            </p>
          </motion.div>

          <div className="mx-auto max-w-4xl">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Applications Open</h3>
                        <p className="text-sm text-muted-foreground">
                          For all grade levels
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                      <Clock className="h-4 w-4" />
                      <span>September 1, 2023</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Open House Events</h3>
                        <p className="text-sm text-muted-foreground">
                          Campus tours and information sessions
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                      <Clock className="h-4 w-4" />
                      <span>Oct 14, Nov 18, Jan 20</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">
                          Priority Application Deadline
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          For maximum consideration
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                      <Clock className="h-4 w-4" />
                      <span>January 15, 2024</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">
                          Financial Aid Application Deadline
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          For priority consideration
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                      <Clock className="h-4 w-4" />
                      <span>February 1, 2024</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">
                          Admission Decisions Released
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          For priority applicants
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                      <Clock className="h-4 w-4" />
                      <span>March 10, 2024</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">
                          Enrollment Contracts Due
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          With deposit to secure placement
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                      <Clock className="h-4 w-4" />
                      <span>April 1, 2024</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Rolling Admissions</h3>
                        <p className="text-sm text-muted-foreground">
                          As space allows
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                      <Clock className="h-4 w-4" />
                      <span>After January 15, 2024</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 w-full" id="faq">
        <div className="container mx-auto p-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mb-10 text-lg text-muted-foreground">
              Find answers to common questions about our admissions process.
            </p>
          </motion.div>

          <div className="mx-auto max-w-4xl">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What is the average class size?
                </AccordionTrigger>
                <AccordionContent>
                  Our average class size is 16 students, with a
                  student-to-teacher ratio of 8:1. This allows our teachers to
                  provide personalized attention and support to each student
                  while fostering a collaborative learning environment.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Is transportation available?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we offer bus transportation for students living within a
                  15-mile radius of the school. Our transportation service
                  includes morning pickup and afternoon drop-off. For families
                  outside this radius, we help coordinate carpooling options
                  with other families in your area.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Do you offer before and after school care?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, our Extended Day Program provides supervised care from
                  7:00 AM to 8:15 AM before school and from 3:30 PM to 6:00 PM
                  after school. The program includes homework help, structured
                  activities, and free play. This service is available for an
                  additional fee, with both regular and drop-in options.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  What is your acceptance rate?
                </AccordionTrigger>
                <AccordionContent>
                  Our acceptance rate varies by grade level and year, typically
                  ranging from 30-40%. We consider each applicant holistically,
                  looking beyond test scores and grades to identify students who
                  will thrive in our community and contribute to our school
                  culture.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Do you accept mid-year transfers?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we accept mid-year transfers when space is available. The
                  application process is the same as for regular admission,
                  though decisions are made on a rolling basis. We work closely
                  with transfer students and their families to ensure a smooth
                  transition to our school community.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  What support services do you offer for students with learning
                  differences?
                </AccordionTrigger>
                <AccordionContent>
                  Our Learning Support Center provides services for students
                  with mild to moderate learning differences. We offer
                  individualized learning plans, in-class accommodations,
                  pull-out support, and executive function coaching. Our
                  learning specialists work closely with classroom teachers to
                  ensure each student receives the support they need to succeed.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>
                  What percentage of students receive financial aid?
                </AccordionTrigger>
                <AccordionContent>
                  Approximately 25% of our students receive some form of
                  financial assistance, with awards ranging from partial to full
                  tuition. We are committed to making our education accessible
                  to qualified students from diverse socioeconomic backgrounds.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger>
                  What is your school's approach to technology?
                </AccordionTrigger>
                <AccordionContent>
                  We integrate technology thoughtfully into our curriculum to
                  enhance learning while teaching responsible digital
                  citizenship. Middle and high school students participate in
                  our 1:1 laptop program, while elementary students have access
                  to shared devices. Our approach balances technology use with
                  traditional learning methods and emphasizes critical thinking
                  about digital media.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="mt-12 text-center">
            <p className="mb-6 text-muted-foreground">
              Still have questions? Contact our admissions team.
            </p>
            <Button asChild>
              <Link href="/contact">Contact Admissions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-primary-foreground w-full">
        <div className="container mx-auto p-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Join Our Community?
            </h2>
            <p className="mb-10 text-lg opacity-90">
              Take the first step toward providing your child with an
              exceptional educational experience at Horizon Academy.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Button size="lg" variant="secondary" asChild>
                <Link href="#apply">Apply Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 hover:bg-primary-foreground/10 text-black"
                asChild
              >
                <Link href="#visit">Schedule a Visit</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 hover:bg-primary-foreground/10 text-black"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
