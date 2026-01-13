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

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Text content */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] mb-6"
            >
              <span className="italic font-light text-muted-foreground/60">I'm a </span>
              <span className="gradient-text">ui/ux</span>
              <br />
              <span className="gradient-text tracking-tight">DESIGNER</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8 leading-relaxed"
            >
              Crafting <span className="text-primary font-medium">intuitive</span>, scalable, and user-centered digital experiences. Passionate about learning and adapting quickly.
            </motion.p>

            {/* Services pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {["UI Design", "UX Research", "Prototyping", "Design Systems"].map((service, index) => (
                <motion.span
                  key={service}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium cursor-default hover:border-primary/50 transition-colors"
                >
                  {service}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
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
            </motion.div>
          </div>

          {/* Right - Profile photo with creative treatment */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Large accent circle behind */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-6 md:-inset-10 rounded-full bg-primary/80"
              />
              
              {/* Secondary decorative ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-12 md:-inset-16 rounded-full border-2 border-dashed border-primary/30"
              />

              {/* Photo container */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl"
              >
                <img
                  src={profilePhoto}
                  alt="Abhisshek Suresh Kumar - UI/UX Designer"
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
              </motion.div>

              {/* Floating sparkle decoration */}
              <motion.div
                animate={{ y: [-8, 8, -8], rotate: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 md:-top-6 md:-right-6 p-3 rounded-full bg-card border border-border shadow-lg"
              >
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </motion.div>

              {/* Name tag */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 px-4 py-2 rounded-full bg-card border border-border shadow-lg"
              >
                <span className="text-sm font-medium gradient-text">Abhisshek</span>
              </motion.div>
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
