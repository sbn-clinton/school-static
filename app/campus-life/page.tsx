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
import {
  BookOpen,
  Calendar,
  Clock,
  Film,
  Gamepad2,
  Globe,
  HeartHandshake,
  Laptop,
  Microscope,
  Music,
  Palette,
  Shirt,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CampusLifePage() {
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
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Campus Life
            </h1>
            <p className="mb-10 text-lg text-muted-foreground">
              At Horizon Academy, learning extends beyond the classroom. Our
              vibrant campus community offers countless opportunities for
              students to explore their interests, develop their talents, and
              form lifelong friendships.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="overflow-hidden rounded-xl">
              <Image
                src="https://images.pexels.com/photos/7092350/pexels-photo-7092350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Campus life at Horizon Academy"
                width={1200}
                height={500}
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-20 w-full">
        <div className="container mx-auto p-4">
          <Tabs defaultValue="activities" className="mx-auto max-w-5xl">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="activities">Activities</TabsTrigger>
              <TabsTrigger value="facilities">Facilities</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
            </TabsList>

            {/* Activities Tab */}
            <TabsContent value="activities" className="mt-8">
              <motion.div
                className="mx-auto max-w-3xl text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                  Student Activities & Clubs
                </h2>
                <p className="mb-10 text-lg text-muted-foreground">
                  With over 40 clubs and activities, students have endless
                  opportunities to explore their interests, develop new skills,
                  and build meaningful connections.
                </p>
              </motion.div>

              <motion.div
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.div variants={item}>
                  <Card className="h-full">
                    <CardHeader className="pb-2">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Microscope className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Science Olympiad</CardTitle>
                      <CardDescription>Grades 6-12</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Students compete in team-based science competitions,
                        tackling challenges in biology, chemistry, physics, and
                        engineering.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={item}>
                  <Card className="h-full">
                    <CardHeader className="pb-2">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Globe className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Model United Nations</CardTitle>
                      <CardDescription>Grades 8-12</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Students simulate UN committees, representing different
                        countries and debating global issues while developing
                        diplomacy skills.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={item}>
                  <Card className="h-full">
                    <CardHeader className="pb-2">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Palette className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Visual Arts Club</CardTitle>
                      <CardDescription>All Grades</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Students explore various art forms and techniques, from
                        painting and drawing to sculpture and digital art.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={item}>
                  <Card className="h-full">
                    <CardHeader className="pb-2">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Laptop className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Coding Club</CardTitle>
                      <CardDescription>Grades 4-12</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Students learn programming languages, develop apps, and
                        work on coding projects in a collaborative environment.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={item}>
                  <Card className="h-full">
                    <CardHeader className="pb-2">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Music className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Jazz Ensemble</CardTitle>
                      <CardDescription>Grades 7-12</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Students perform jazz standards and contemporary pieces,
                        developing improvisation skills and musical expression.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={item}>
                  <Card className="h-full">
                    <CardHeader className="pb-2">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <HeartHandshake className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Community Service Club</CardTitle>
                      <CardDescription>All Grades</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Students organize and participate in various service
                        projects, making a positive impact in our local
                        community and beyond.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={item}>
                  <Card className="h-full">
                    <CardHeader className="pb-2">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Film className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Film Club</CardTitle>
                      <CardDescription>Grades 8-12</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Students study film history, analyze cinema techniques,
                        and create their own short films using professional
                        equipment.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={item}>
                  <Card className="h-full">
                    <CardHeader className="pb-2">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Gamepad2 className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>E-Sports Team</CardTitle>
                      <CardDescription>Grades 9-12</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Students compete in organized video game competitions,
                        developing teamwork, strategic thinking, and digital
                        literacy.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={item}>
                  <Card className="h-full">
                    <CardHeader className="pb-2">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <BookOpen className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Literary Magazine</CardTitle>
                      <CardDescription>Grades 6-12</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Students create and publish a literary magazine
                        featuring original poetry, short stories, essays, and
                        artwork.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              <div className="mt-12 text-center">
                <Button size="lg" asChild>
                  <Link href="#explore-clubs">Explore All Clubs</Link>
                </Button>
              </div>
            </TabsContent>

            {/* Facilities Tab */}
            <TabsContent value="facilities" className="mt-8">
              <motion.div
                className="mx-auto max-w-3xl text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                  Campus Facilities
                </h2>
                <p className="mb-10 text-lg text-muted-foreground">
                  Our state-of-the-art campus provides students with exceptional
                  spaces for learning, creating, and growing.
                </p>
              </motion.div>

              <div className="grid gap-8 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src="https://images.pexels.com/photos/7743257/pexels-photo-7743257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Innovation Center"
                      width={600}
                      height={400}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Innovation Center</h3>
                    <p className="mt-2 text-muted-foreground">
                      Our 15,000-square-foot Innovation Center features
                      cutting-edge technology labs, a makerspace, robotics
                      workshop, and collaborative work areas where students can
                      bring their ideas to life.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6"
                >
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src="https://images.pexels.com/photos/8923880/pexels-photo-8923880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Performing Arts Center"
                      width={600}
                      height={400}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">
                      Performing Arts Center
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Our Performing Arts Center includes a 500-seat theater,
                      black box studio, dance studio, music rehearsal rooms, and
                      recording studio, providing exceptional spaces for
                      artistic expression.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-6"
                >
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src="https://images.pexels.com/photos/8941609/pexels-photo-8941609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Athletic Complex"
                      width={600}
                      height={400}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Athletic Complex</h3>
                    <p className="mt-2 text-muted-foreground">
                      Our Athletic Complex features a competition gymnasium,
                      fitness center, swimming pool, tennis courts, and
                      multi-purpose fields, supporting our comprehensive
                      athletics program.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-6"
                >
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src="https://images.pexels.com/photos/5676744/pexels-photo-5676744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Learning Commons"
                      width={600}
                      height={400}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Learning Commons</h3>
                    <p className="mt-2 text-muted-foreground">
                      Our Learning Commons combines a traditional library with
                      digital resources, collaborative study spaces, and a café,
                      creating a dynamic hub for research, study, and community.
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-12 text-center">
                <Button size="lg" asChild>
                  <Link href="#campus-tour">Schedule a Campus Tour</Link>
                </Button>
              </div>
            </TabsContent>

            {/* Events Tab */}
            <TabsContent value="events" className="mt-8">
              <motion.div
                className="mx-auto max-w-3xl text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                  Upcoming Events
                </h2>
                <p className="mb-10 text-lg text-muted-foreground">
                  Our calendar is filled with academic, artistic, athletic, and
                  community events throughout the year.
                </p>
              </motion.div>

              <motion.div
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.div variants={item}>
                  <Card className="h-full">
                    <CardHeader className="pb-2">
                      <div className="mb-2 flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-primary">
                          May 15, 2024
                        </span>
                      </div>
                      <CardTitle>Spring Arts Festival</CardTitle>
                      <CardDescription>
                        6:00 PM - 9:00 PM | Performing Arts Center
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Celebrate the artistic talents of our students with
                        performances, exhibitions, and interactive art
                        installations.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={item}>
                  <Card className="h-full">
                    <CardHeader className="pb-2">
                      <div className="mb-2 flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-primary">
                          May 20, 2024
                        </span>
                      </div>
                      <CardTitle>Science Symposium</CardTitle>
                      <CardDescription>
                        1:00 PM - 4:00 PM | Innovation Center
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Students present their original research projects and
                        scientific investigations to the school community.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={item}>
                  <Card className="h-full">
                    <CardHeader className="pb-2">
                      <div className="mb-2 flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-primary">
                          May 25, 2024
                        </span>
                      </div>
                      <CardTitle>Spring Athletic Banquet</CardTitle>
                      <CardDescription>
                        6:30 PM - 8:30 PM | Dining Hall
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Celebrating our spring athletes' achievements and
                        recognizing their dedication and sportsmanship.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={item}>
                  <Card className="h-full">
                    <CardHeader className="pb-2">
                      <div className="mb-2 flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-primary">
                          June 2, 2024
                        </span>
                      </div>
                      <CardTitle>Global Cultures Fair</CardTitle>
                      <CardDescription>
                        11:00 AM - 3:00 PM | Campus Quad
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Experience the diversity of our community through food,
                        music, dance, and cultural displays from around the
                        world.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={item}>
                  <Card className="h-full">
                    <CardHeader className="pb-2">
                      <div className="mb-2 flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-primary">
                          June 8, 2024
                        </span>
                      </div>
                      <CardTitle>Senior Showcase</CardTitle>
                      <CardDescription>
                        5:00 PM - 8:00 PM | Innovation Center
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Graduating seniors present their capstone projects,
                        demonstrating their learning, creativity, and growth.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={item}>
                  <Card className="h-full">
                    <CardHeader className="pb-2">
                      <div className="mb-2 flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-primary">
                          June 15, 2024
                        </span>
                      </div>
                      <CardTitle>Graduation Ceremony</CardTitle>
                      <CardDescription>
                        10:00 AM - 12:00 PM | Campus Quad
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Celebrating the Class of 2024 as they complete their
                        journey at Horizon Academy and prepare for their next
                        chapter.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              <div className="mt-12 text-center">
                <Button size="lg" asChild>
                  <Link href="#full-calendar">View Full Calendar</Link>
                </Button>
              </div>
            </TabsContent>

            {/* Gallery Tab */}
            <TabsContent value="gallery" className="mt-8">
              <motion.div
                className="mx-auto max-w-3xl text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                  Campus Life Gallery
                </h2>
                <p className="mb-10 text-lg text-muted-foreground">
                  Explore moments from our vibrant campus community through
                  these snapshots of student life.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden rounded-xl"
                >
                  <Image
                    src="https://images.pexels.com/photos/5427685/pexels-photo-5427685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Students in science lab"
                    width={300}
                    height={300}
                    className="aspect-square object-cover transition-transform duration-300 hover:scale-105"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="overflow-hidden rounded-xl"
                >
                  <Image
                    src="https://images.pexels.com/photos/21311036/pexels-photo-21311036/free-photo-of-ballerinas-dancing-on-stage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Theater performance"
                    width={300}
                    height={300}
                    className="aspect-square object-cover transition-transform duration-300 hover:scale-105"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="overflow-hidden rounded-xl"
                >
                  <Image
                    src="https://images.pexels.com/photos/8337470/pexels-photo-8337470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Basketball game"
                    width={300}
                    height={300}
                    className="aspect-square object-cover transition-transform duration-300 hover:scale-105"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="overflow-hidden rounded-xl"
                >
                  <Image
                    src="https://images.pexels.com/photos/8382258/pexels-photo-8382258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Art class"
                    width={300}
                    height={300}
                    className="aspect-square object-cover transition-transform duration-300 hover:scale-105"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="overflow-hidden rounded-xl"
                >
                  <Image
                    src="https://images.pexels.com/photos/8617567/pexels-photo-8617567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Robotics competition"
                    width={300}
                    height={300}
                    className="aspect-square object-cover transition-transform duration-300 hover:scale-105"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="overflow-hidden rounded-xl"
                >
                  <Image
                    src="https://images.pexels.com/photos/7567337/pexels-photo-7567337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Music ensemble"
                    width={300}
                    height={300}
                    className="aspect-square object-cover transition-transform duration-300 hover:scale-105"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="overflow-hidden rounded-xl"
                >
                  <Image
                    src="https://images.pexels.com/photos/8034611/pexels-photo-8034611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Community service day"
                    width={300}
                    height={300}
                    className="aspect-square object-cover transition-transform duration-300 hover:scale-105"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  className="overflow-hidden rounded-xl"
                >
                  <Image
                    src="https://images.pexels.com/photos/532251/pexels-photo-532251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Field trip"
                    width={300}
                    height={300}
                    className="aspect-square object-cover transition-transform duration-300 hover:scale-105"
                  />
                </motion.div>
              </div>

              <div className="mt-12 text-center">
                <Button size="lg" asChild>
                  <Link href="#photo-gallery">View Full Gallery</Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Student Life Section */}
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
              A Day in the Life
            </h2>
            <p className="mb-10 text-lg text-muted-foreground">
              Experience what a typical day looks like for our students across
              different grade levels.
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
                      <Clock className="h-6 w-6" />
                    </div>
                    <div className="mt-8 md:mt-0 md:w-1/2 md:pr-12">
                      <h3 className="text-xl font-bold">7:30 AM - 8:15 AM</h3>
                      <p className="mt-2 text-muted-foreground">
                        Students arrive on campus. Many gather in the dining
                        hall for breakfast or meet with friends in the Learning
                        Commons before the day begins.
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
                      <Clock className="h-6 w-6" />
                    </div>
                    <div className="hidden md:block md:w-1/2"></div>
                    <div className="mt-8 md:mt-0 md:w-1/2 md:pl-12">
                      <h3 className="text-xl font-bold">8:15 AM - 9:45 AM</h3>
                      <p className="mt-2 text-muted-foreground">
                        First academic block. Students engage in deep learning
                        through discussion, hands-on activities, and
                        collaborative projects in their core subjects.
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
                      <Clock className="h-6 w-6" />
                    </div>
                    <div className="mt-8 md:mt-0 md:w-1/2 md:pr-12">
                      <h3 className="text-xl font-bold">9:45 AM - 10:00 AM</h3>
                      <p className="mt-2 text-muted-foreground">
                        Morning break. Students recharge with a snack, socialize
                        with friends, or meet briefly with teachers.
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
                      <Clock className="h-6 w-6" />
                    </div>
                    <div className="hidden md:block md:w-1/2"></div>
                    <div className="mt-8 md:mt-0 md:w-1/2 md:pl-12">
                      <h3 className="text-xl font-bold">10:00 AM - 11:30 AM</h3>
                      <p className="mt-2 text-muted-foreground">
                        Second academic block. Students continue with core
                        subjects or participate in specialized electives based
                        on their grade level and interests.
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
                      <Clock className="h-6 w-6" />
                    </div>
                    <div className="mt-8 md:mt-0 md:w-1/2 md:pr-12">
                      <h3 className="text-xl font-bold">11:30 AM - 12:30 PM</h3>
                      <p className="mt-2 text-muted-foreground">
                        Lunch and community time. Students enjoy a nutritious
                        meal in our dining hall, participate in club meetings,
                        or spend time outdoors.
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
                      <Clock className="h-6 w-6" />
                    </div>
                    <div className="hidden md:block md:w-1/2"></div>
                    <div className="mt-8 md:mt-0 md:w-1/2 md:pl-12">
                      <h3 className="text-xl font-bold">12:30 PM - 2:00 PM</h3>
                      <p className="mt-2 text-muted-foreground">
                        Third academic block. Students engage in arts, world
                        languages, or additional core subjects depending on
                        their schedule.
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="flex flex-col items-center md:flex-row">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground md:absolute md:left-1/2 md:-ml-8">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div className="mt-8 md:mt-0 md:w-1/2 md:pr-12">
                      <h3 className="text-xl font-bold">2:00 PM - 3:30 PM</h3>
                      <p className="mt-2 text-muted-foreground">
                        Fourth academic block or athletics. Upper school
                        students may have a final class, while many students
                        participate in sports practices or games.
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
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <div className="flex flex-col items-center md:flex-row">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground md:absolute md:left-1/2 md:-ml-8">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div className="hidden md:block md:w-1/2"></div>
                    <div className="mt-8 md:mt-0 md:w-1/2 md:pl-12">
                      <h3 className="text-xl font-bold">3:30 PM - 5:30 PM</h3>
                      <p className="mt-2 text-muted-foreground">
                        After-school activities. Students participate in clubs,
                        rehearsals, additional sports practices, or attend our
                        Extended Day Program with supervised study time.
                      </p>
                    </div>
                  </div>
                </motion.div>{" "}
                <Clock className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Athletics Section */}
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
              Athletics
            </h2>
            <p className="mb-10 text-lg text-muted-foreground">
              Our comprehensive athletics program builds character, teamwork,
              and physical fitness while fostering school spirit and healthy
              competition.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="https://images.pexels.com/photos/7207760/pexels-photo-7207760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="School athletics"
                  width={700}
                  height={500}
                  className="w-full"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <h3 className="mb-4 text-2xl font-bold">
                Competitive Excellence
              </h3>
              <p className="mb-6 text-muted-foreground">
                Our athletics program offers 18 varsity sports and numerous
                junior varsity and middle school teams. Our student-athletes
                compete at the highest levels, with many teams winning regional
                and state championships.
              </p>

              <h4 className="mb-2 text-xl font-semibold">Fall Sports</h4>
              <ul className="mb-4 grid grid-cols-2 gap-2">
                <li className="flex items-center gap-2">
                  <Shirt className="h-4 w-4 text-primary" />
                  <span>Soccer (Boys & Girls)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shirt className="h-4 w-4 text-primary" />
                  <span>Cross Country</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shirt className="h-4 w-4 text-primary" />
                  <span>Volleyball</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shirt className="h-4 w-4 text-primary" />
                  <span>Field Hockey</span>
                </li>
              </ul>

              <h4 className="mb-2 text-xl font-semibold">Winter Sports</h4>
              <ul className="mb-4 grid grid-cols-2 gap-2">
                <li className="flex items-center gap-2">
                  <Shirt className="h-4 w-4 text-primary" />
                  <span>Basketball (Boys & Girls)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shirt className="h-4 w-4 text-primary" />
                  <span>Swimming</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shirt className="h-4 w-4 text-primary" />
                  <span>Wrestling</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shirt className="h-4 w-4 text-primary" />
                  <span>Indoor Track</span>
                </li>
              </ul>

              <h4 className="mb-2 text-xl font-semibold">Spring Sports</h4>
              <ul className="mb-6 grid grid-cols-2 gap-2">
                <li className="flex items-center gap-2">
                  <Shirt className="h-4 w-4 text-primary" />
                  <span>Baseball</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shirt className="h-4 w-4 text-primary" />
                  <span>Softball</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shirt className="h-4 w-4 text-primary" />
                  <span>Tennis</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shirt className="h-4 w-4 text-primary" />
                  <span>Track & Field</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shirt className="h-4 w-4 text-primary" />
                  <span>Golf</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shirt className="h-4 w-4 text-primary" />
                  <span>Lacrosse</span>
                </li>
              </ul>

              <Button asChild>
                <Link href="#athletics">Learn More About Athletics</Link>
              </Button>
            </motion.div>
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
              Student Voices
            </h2>
            <p className="mb-10 text-lg text-muted-foreground">
              Hear directly from our students about their experiences at Horizon
              Academy.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src="https://images.pexels.com/photos/1462633/pexels-photo-1462633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Student portrait"
                        width={100}
                        height={100}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">Emma Rodriguez</h3>
                      <p className="text-sm text-muted-foreground">
                        Senior, Class of 2024
                      </p>
                    </div>
                  </div>
                  <p className="italic text-muted-foreground">
                    "The opportunities I've had at Horizon Academy have been
                    incredible. From conducting original research in the
                    Innovation Lab to leading our Model UN team at international
                    conferences, I've been able to explore my interests deeply
                    and discover new passions along the way."
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
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src="https://images.pexels.com/photos/6334490/pexels-photo-6334490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Student portrait"
                        width={100}
                        height={100}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">Marcus Johnson</h3>
                      <p className="text-sm text-muted-foreground">
                        Junior, Class of 2025
                      </p>
                    </div>
                  </div>
                  <p className="italic text-muted-foreground">
                    "What I love most about Horizon is the community. My
                    teachers know me as a person, not just a student. They
                    challenge me academically while supporting my growth as an
                    individual. And the friendships I've made here will last a
                    lifetime."
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
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src="https://images.pexels.com/photos/3793238/pexels-photo-3793238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Student portrait"
                        width={100}
                        height={100}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">Sophia Chen</h3>
                      <p className="text-sm text-muted-foreground">
                        Sophomore, Class of 2026
                      </p>
                    </div>
                  </div>
                  <p className="italic text-muted-foreground">
                    "Coming to Horizon was the best decision I've made. I've
                    been able to balance my passion for music with challenging
                    academics and competitive sports. The flexible schedule and
                    supportive faculty make it possible to pursue excellence in
                    multiple areas."
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
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Experience Campus Life Firsthand
            </h2>
            <p className="mb-10 text-lg text-muted-foreground">
              The best way to understand what makes our community special is to
              visit our campus and see it for yourself.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Button size="lg" asChild>
                <Link href="#schedule-tour">Schedule a Tour</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#virtual-tour">Take a Virtual Tour</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
