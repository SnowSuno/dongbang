import * as React from "react";
import {AnimatePresence, AnimatePresenceProps} from "framer-motion";
import {useOutlet} from "react-router-dom";


const AnimatedOutlet: React.FC<AnimatePresenceProps> = (props) => {
    const outlet = useOutlet();
    return <AnimatePresence {...props}>{outlet}</AnimatePresence>
}

export default AnimatedOutlet;
