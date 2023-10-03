import { motion } from "framer-motion";
import { ReactNode } from "react";
interface DivContainerProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}


const FadeIn = ({ children, delay, className }: DivContainerProps) => {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0.01 }}
            animate={{
                opacity: 1,
            }}
            transition={{
                duration: 0.3,
                ease: [0.645, 0.045, 0.355, 1],
                delay,
            }}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;
