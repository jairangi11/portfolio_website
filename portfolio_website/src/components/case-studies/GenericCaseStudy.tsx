import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

const GenericCaseStudy: React.FC = () => {
  return (
    <motion.div variants={sectionVariants} className="prose prose-gray max-w-none mt-10">
        <p>Detailed information for this case study is currently being prepared.</p>
    </motion.div>
  );
};

export default GenericCaseStudy; 