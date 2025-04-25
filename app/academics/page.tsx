"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Lightbulb, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AcademicsPage() {
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
                Academic Excellence
              </h1>
              <p className="mb-6 text-lg text-muted-foreground">
                At Horizon Academy, we provide a challenging and supportive
                academic environment that fosters intellectual curiosity,
                critical thinking, and a love of learning.
              </p>
              <p className="mb-8 text-lg text-muted-foreground">
                Our comprehensive curriculum is designed to prepare students for
                success in college and beyond, while nurturing their individual
                talents and interests.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button size="lg" asChild>
                  <Link href="#programs">Explore Programs</Link>
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
                  src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Students in classroom"
                  width={800}
                  height={600}
                  className="w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
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
              Our Educational Philosophy
            </h2>
            <p className="mb-10 text-lg text-muted-foreground">
              Our approach to education is guided by a set of core principles
              that inform our curriculum, teaching methods, and learning
              environment.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={item}>
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Rigorous Academics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We provide a challenging curriculum that develops critical
                    thinking, problem-solving, and communication skills while
                    fostering a deep understanding of core subjects.
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
                  <CardTitle>Student-Centered Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We recognize that each student has unique strengths,
                    interests, and learning styles. Our approach balances
                    structure with flexibility to meet individual needs.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Inquiry & Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We encourage curiosity, creativity, and intellectual
                    risk-taking. Students learn to ask meaningful questions,
                    explore ideas, and develop innovative solutions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Global Perspective</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We prepare students for success in an interconnected world
                    by developing cultural competence, global awareness, and an
                    appreciation for diverse perspectives.
                  </p>
                </CardContent>
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

      {/* Curriculum Section */}
      <section className="bg-muted py-20 w-full" id="curriculum">
        <div className="container mx-auto p-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Curriculum
            </h2>
            <p className="mb-10 text-lg text-muted-foreground">
              Our comprehensive curriculum is designed to develop knowledge,
              skills, and character while preparing students for future success.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Core Academic Subjects</CardTitle>
                <CardDescription>
                  Building strong foundations in essential disciplines
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>
                    <h4 className="font-semibold">English Language Arts</h4>
                    <p className="text-sm text-muted-foreground">
                      Our ELA curriculum develops strong reading, writing,
                      speaking, and listening skills through literature study,
                      writing workshops, and research projects.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold">Mathematics</h4>
                    <p className="text-sm text-muted-foreground">
                      Our math program builds conceptual understanding,
                      procedural fluency, and problem-solving skills through a
                      progression from foundational concepts to advanced topics.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold">Science</h4>
                    <p className="text-sm text-muted-foreground">
                      Our science curriculum emphasizes inquiry,
                      experimentation, and the scientific method across life,
                      physical, and earth sciences, with advanced courses in
                      biology, chemistry, and physics.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold">Social Studies</h4>
                    <p className="text-sm text-muted-foreground">
                      Our social studies program explores history, geography,
                      economics, and civics with a focus on critical thinking,
                      research skills, and global perspectives.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold">World Languages</h4>
                    <p className="text-sm text-muted-foreground">
                      We offer Spanish, French, and Mandarin Chinese, with an
                      emphasis on communication skills, cultural understanding,
                      and global competence.
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Specialized Programs</CardTitle>
                <CardDescription>
                  Enriching the educational experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>
                    <h4 className="font-semibold">Arts Education</h4>
                    <p className="text-sm text-muted-foreground">
                      Our comprehensive arts program includes visual arts,
                      music, theater, and dance, providing opportunities for
                      creative expression and artistic development.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold">
                      Physical Education & Health
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Our PE and health curriculum promotes physical fitness,
                      wellness, teamwork, and healthy lifestyle choices.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold">
                      Technology & Digital Literacy
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Students develop digital literacy, coding skills, and
                      responsible technology use through integrated and
                      specialized courses.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold">STEM Program</h4>
                    <p className="text-sm text-muted-foreground">
                      Our STEM program integrates science, technology,
                      engineering, and math through project-based learning,
                      competitions, and real-world applications.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold">Global Studies</h4>
                    <p className="text-sm text-muted-foreground">
                      This program develops global awareness, cultural
                      competence, and international perspectives through
                      coursework, exchanges, and service learning.
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 text-center">
            <Button size="lg" asChild>
              <Link href="/contact">Request Curriculum Guide</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-20 w-full" id="faculty">
        <div className="container mx-auto p-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Our Faculty
            </h2>
            <p className="mb-10 text-lg text-muted-foreground">
              Our dedicated faculty members are experts in their fields and
              passionate about teaching and mentoring students.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="https://images.pexels.com/photos/5427670/pexels-photo-5427670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Dr. Robert Johnson"
                  width={200}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold">Dr. Robert Johnson</h3>
              <p className="mb-3 text-primary">Science Department Chair</p>
              <p className="mx-auto max-w-sm text-muted-foreground">
                Ph.D. in Physics from MIT with 15 years of teaching experience.
                Dr. Johnson leads our innovative science program and mentors
                students in research projects.
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
                  src="https://images.pexels.com/photos/6929168/pexels-photo-6929168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Ms. Maria Garcia"
                  width={200}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold">Ms. Maria Garcia</h3>
              <p className="mb-3 text-primary">English Department Chair</p>
              <p className="mx-auto max-w-sm text-muted-foreground">
                M.A. in English Literature from Columbia University and
                published author. Ms. Garcia inspires students to develop their
                voices through literature and creative writing.
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
                  src="https://images.pexels.com/photos/8617730/pexels-photo-8617730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Mr. David Kim"
                  width={200}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold">Mr. David Kim</h3>
              <p className="mb-3 text-primary">Mathematics Department Chair</p>
              <p className="mx-auto max-w-sm text-muted-foreground">
                M.S. in Mathematics from Stanford University with experience in
                both education and industry. Mr. Kim makes complex mathematical
                concepts accessible and relevant.
              </p>
            </motion.div>
          </div>

          <div className="mt-12">
            <Card>
              <CardContent className="p-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="mb-4 text-xl font-bold">
                      Faculty Credentials
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <span>85% hold advanced degrees in their field</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <span>Average of 12 years teaching experience</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <span>
                          Regular professional development and continuing
                          education
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <span>
                          Many are published authors, researchers, and industry
                          experts
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-4 text-xl font-bold">
                      Teaching Approach
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <span>Small class sizes (average 18 students)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <span>
                          Differentiated instruction to meet diverse learning
                          needs
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <span>Project-based and experiential learning</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <span>
                          Integration of technology and traditional methods
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Services Section */}
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
              Academic Support & Enrichment
            </h2>
            <p className="mb-10 text-lg text-muted-foreground">
              We provide comprehensive support services to help all students
              succeed, as well as enrichment opportunities for those seeking
              additional challenges.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Academic Support</CardTitle>
                <CardDescription>
                  Helping every student reach their potential
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>
                    <h4 className="font-semibold">Learning Support Center</h4>
                    <p className="text-sm text-muted-foreground">
                      Staffed by learning specialists who provide individualized
                      support for students with diverse learning needs.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold">Academic Coaching</h4>
                    <p className="text-sm text-muted-foreground">
                      One-on-one coaching to develop study skills, time
                      management, and organizational strategies.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold">Peer Tutoring</h4>
                    <p className="text-sm text-muted-foreground">
                      Student-to-student tutoring program that benefits both
                      tutors and tutees.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold">Study Labs</h4>
                    <p className="text-sm text-muted-foreground">
                      After-school study sessions with faculty support in math,
                      science, writing, and languages.
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Enrichment Opportunities</CardTitle>
                <CardDescription>
                  Challenging students to go beyond
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>
                    <h4 className="font-semibold">Honors & AP Courses</h4>
                    <p className="text-sm text-muted-foreground">
                      Advanced coursework for students seeking greater academic
                      challenges.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold">Independent Study</h4>
                    <p className="text-sm text-muted-foreground">
                      Opportunities for students to pursue specialized interests
                      under faculty mentorship.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold">Academic Competitions</h4>
                    <p className="text-sm text-muted-foreground">
                      Participation in math, science, debate, writing, and other
                      academic competitions.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold">Summer Research Program</h4>
                    <p className="text-sm text-muted-foreground">
                      Partnerships with universities and organizations for
                      summer research experiences.
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* College Counseling Section */}
      <section className="py-20 w-full" id="college">
        <div className="container mx-auto p-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              College Counseling
            </h2>
            <p className="mb-10 text-lg text-muted-foreground">
              Our comprehensive college counseling program guides students
              through every step of the college search and application process.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <Card className="h-full">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-bold">Our Approach</h3>
                  <p className="mb-4 text-muted-foreground">
                    Our college counseling program begins in 9th grade and
                    intensifies through senior year. We focus on helping
                    students find colleges that match their interests,
                    abilities, and goals.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    Each student works with a dedicated college counselor who
                    provides personalized guidance throughout the process. Our
                    counselors have extensive experience and maintain
                    relationships with admissions officers at colleges and
                    universities across the country.
                  </p>
                  <h4 className="mb-2 text-lg font-semibold">
                    Services Include:
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>Individual counseling sessions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>College planning workshops</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>College visits and fairs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>Application strategy and essay guidance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>Financial aid and scholarship information</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="h-full">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-bold">
                    College Acceptance Results
                  </h3>
                  <p className="mb-4 text-muted-foreground">
                    Our graduates have been accepted to a wide range of
                    selective colleges and universities, including:
                  </p>
                  <div className="mb-6 grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>Brown University</li>
                        <li>Columbia University</li>
                        <li>Cornell University</li>
                        <li>Dartmouth College</li>
                        <li>Duke University</li>
                        <li>Georgetown University</li>
                        <li>Harvard University</li>
                        <li>Johns Hopkins University</li>
                        <li>MIT</li>
                        <li>Northwestern University</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>Princeton University</li>
                        <li>Stanford University</li>
                        <li>University of California, Berkeley</li>
                        <li>University of Chicago</li>
                        <li>University of Michigan</li>
                        <li>University of Pennsylvania</li>
                        <li>University of Virginia</li>
                        <li>Vanderbilt University</li>
                        <li>Washington University in St. Louis</li>
                        <li>Yale University</li>
                      </ul>
                    </div>
                  </div>
                  <div className="rounded-lg bg-muted p-4 text-center">
                    <p className="font-semibold">Class of 2023 Highlights</p>
                    <div className="mt-2 grid grid-cols-3 gap-2 text-sm">
                      <div>
                        <p className="text-2xl font-bold text-primary">100%</p>
                        <p className="text-muted-foreground">
                          College Acceptance
                        </p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-primary">92%</p>
                        <p className="text-muted-foreground">
                          First-Choice Acceptance
                        </p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-primary">$8.2M</p>
                        <p className="text-muted-foreground">
                          Scholarships Awarded
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="bg-muted py-20 w-full" id="research">
        <div className="container mx-auto p-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Student Research & Innovation
            </h2>
            <p className="mb-10 text-lg text-muted-foreground">
              We provide opportunities for students to engage in original
              research and innovative projects across disciplines.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              className="group overflow-hidden rounded-lg bg-background"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/9242852/pexels-photo-9242852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Science research"
                  width={500}
                  height={300}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">
                  Science Research Program
                </h3>
                <p className="text-muted-foreground">
                  Students work with faculty mentors and university partners on
                  original scientific research projects, many of which have been
                  recognized in national competitions.
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
                  src="https://images.pexels.com/photos/5506050/pexels-photo-5506050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Engineering projects"
                  width={500}
                  height={300}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">
                  Engineering & Design Lab
                </h3>
                <p className="text-muted-foreground">
                  In our state-of-the-art maker space, students design and build
                  solutions to real-world problems, developing engineering
                  skills and creative thinking.
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
                  src="https://images.pexels.com/photos/3912947/pexels-photo-3912947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Humanities research"
                  width={500}
                  height={300}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">Humanities Research</h3>
                <p className="text-muted-foreground">
                  Students explore topics in history, literature, philosophy,
                  and social sciences through independent research projects,
                  scholarly writing, and presentations.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mt-10 text-center">
            <Button size="lg" asChild>
              <Link href="/academics#projects">View Student Projects</Link>
            </Button>
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
                  Experience Academic Excellence
                </h2>
                <p className="mb-8 text-lg opacity-90">
                  Join us for a campus tour to see our academic programs in
                  action. Meet our faculty, visit our classrooms, and learn more
                  about the Horizon Academy experience.
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
