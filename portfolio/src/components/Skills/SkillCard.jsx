import { motion } from 'framer-motion';

export default function SkillCard({ image, name, burst, bounce }) {
  return (
    <div className="flex flex-col items-center space-y-2 relative">
      <motion.div
        className="relative flex flex-col items-center"
        animate={bounce ? { y: [0, -12, 0] } : {}}
        transition={
          bounce
            ? {
              repeat: Infinity,
              duration: 3,
              ease: 'easeInOut',
            }
            : {}
        }
      >
        {burst && (
          <motion.div
            className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full bg-white/20 blur-sm"
            initial={{ scale: 0.5, opacity: 0.6 }}
            animate={{ scale: 3, opacity: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            style={{ transform: 'translate(-50%, -50%)' }}
          />
        )}

        {/* Group must be on a native element or motion.div with group class */}
        <div className="relative flex flex-col items-center space-y-2">
          <div className="group relative flex flex-col items-center">
            <motion.img
              src={image}
              className="w-12 h-12 aspect-square object-contain cursor-pointer"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />

            <div className="absolute top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
              <span className="text-white text-sm font-medium">{name}</span>
            </div>
          </div>
        </div>


        <motion.div
          className="mt-4 bg-white rounded-full"
          animate={
            bounce
              ? {
                scaleX: [1, 0.8, 1],
                scaleY: [1, 0.6, 1],
              }
              : {}
          }
          transition={
            bounce
              ? {
                repeat: Infinity,
                duration: 3,
                ease: 'easeInOut',
              }
              : {}
          }
          style={{
            width: '48px',
            height: '8px',
            filter: 'blur(4px)',
            opacity: 0.5,
          }}
        />
      </motion.div>
    </div>
  );
}
