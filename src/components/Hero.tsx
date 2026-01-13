import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center section-padding pt-32 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-primary/20 blur-[180px]"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [-20, 20, -20]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[150px]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto w-full">
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-sm text-primary font-medium">Open to Work</span>
        </motion.div>

        {/* Main hero with text + photo integration */}
        <div className="relative">
          {/* First line */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center gap-4 md:gap-6 flex-wrap"
          >
            <span className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold italic text-muted-foreground/40">
              I'm a
            </span>
            <span className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold gradient-text">
              ui/ux
            </span>
          </motion.div>

          {/* Second line with photo integration */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 md:gap-6 mt-2 md:mt-0"
          >
            <span className="font-display text-6xl md:text-8xl lg:text-9xl xl:text-[11rem] font-black tracking-tight gradient-text">
              DESI
            </span>
            
            {/* Profile photo integrated with text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative -mx-4 md:-mx-8"
            >
              {/* Accent circle behind photo */}
              <div className="absolute inset-0 rounded-full bg-primary scale-110" />
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-24 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 xl:w-52 xl:h-52 rounded-full overflow-hidden border-4 border-background"
              >
                <img
                  src={profilePhoto}
                  alt="Abhisshek Suresh Kumar - UI/UX Designer"
                  className="w-full h-full object-cover object-top scale-125"
                />
              </motion.div>
              {/* Floating sparkle */}
              <motion.div
                animate={{ y: [-5, 5, -5], rotate: [0, 15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-2 md:-top-4 md:-right-4"
              >
                <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-primary fill-primary" />
              </motion.div>
            </motion.div>

            <span className="font-display text-6xl md:text-8xl lg:text-9xl xl:text-[11rem] font-black tracking-tight gradient-text">
              GNER
            </span>
          </motion.div>
        </div>

        {/* Description and CTAs */}
        <div className="grid lg:grid-cols-2 gap-8 mt-12 md:mt-16">
          {/* Left side - description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                About Me
              </span>
            </div>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl">
              Crafting <span className="text-primary font-medium">intuitive</span>, scalable, and user-centered digital experiences. Passionate about learning new technologies and adapting quickly to create meaningful designs.
            </p>
          </motion.div>

          {/* Right side - CTAs and info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Services pills */}
            <div className="flex flex-wrap gap-3">
              {["UI Design", "UX Research", "Prototyping", "Design Systems"].map((service, index) => (
                <motion.span
                  key={service}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium cursor-default hover:border-primary/50 transition-colors"
                >
                  {service}
                </motion.span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#portfolio"
                className="group flex items-center gap-2 px-8 py-4 gradient-bg rounded-full text-primary-foreground font-medium glow-effect relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">View My Work</span>
                <ArrowUpRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </motion.a>
              <motion.a
                href="#contact"
                className="group flex items-center gap-2 px-8 py-4 rounded-full border border-border text-foreground font-medium hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Let's Chat
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-medium">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-current"
              />
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
