import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import {
  headContainerAnimation,
  headTextAnimation,
  slideAnimation,
  headContentAnimation,
} from "../config/motion";
import { Button } from "../components";
import { icon } from "../icon";

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src={icon.logo}
              alt="Logo"
              className="w-32 h-16 object-contain"
            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="max-w-md text-[52px] font-bold">
                Create your shirts!
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-4"
            >
              <p className="max-w-md font-bold text-base text-black-800 text-[24px]">
                Simple create your own style!
              </p>
              <Button
                type="filled"
                title="Create It"
                handleClick={() => (state.intro = false)}
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
