import { motion } from "framer-motion";
const styledMotion = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};
const Motion = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.5 }}
    style={styledMotion}
  >
    {children}
  </motion.div>
);
export { Motion };
