import React from "react";
import { ModalProps, Modal } from "@mui/base/Modal";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";


const BackdropUnstyled = React.forwardRef<
  HTMLDivElement,
  { open?: boolean; className: string; ownerState?: any }
>((props, ref) => {
  const { open, className, ownerState, ...other } = props;
  return (
    <div
      className={`xr-modal-backdrop ${open ? "MuiBackdrop-open" : ""
        } ${className}`}
      ref={ref}
      {...other}
    />
  );
});
const MyModal = (
  props: ModalProps & {
    className?: string;
    modalPaperClassName?: string;
    modalPaperStyle?: React.CSSProperties;
    position?: "bottom-sm" | "left";
    animateMode?: "center" | "right" | "left";
  }
) => {
  const {
    className = "",
    modalPaperClassName = "",
    modalPaperStyle = {},
    position = "center",
  } = props;


  return (
    <Modal
      container={() => document.querySelector("#root") as HTMLElement}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
      open={props.open}
      onClose={props.onClose}
      slots={{ backdrop: BackdropUnstyled }}
      className={`xr-modal-wrapper bottom-sm ${className} ${position}`}
    // keepMounted
    >
      {/* {
        props.open ? (
          <AnimatedPaper
            {...props}
          />
        ) : <div />
      } */}
      <ModalPaper
        open={props.open}
        className={`xr-modal-paper ${modalPaperClassName}`}
        style={modalPaperStyle}
      >
        {props.children}
      </ModalPaper>
    </Modal>
  );
};

const ModalPaper = (props: { className: string; style: React.CSSProperties; children: React.ReactNode, open: boolean }) => {
  const paperRef = React.useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    console.log("props.open", props.open);
    if (props.open) {
      gsap.fromTo(paperRef.current, {
        y: 100,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        ease: "power4.out",
      })
    }
  }, [props.open]);
  return (
    <div className={props.className} style={props.style}
      ref={(ref) => {
        paperRef.current = ref;
      }}
    >
      {props.children}
    </div>
  );
}


// const AnimatedPaper = (props: ModalProps & {
//   modalPaperClassName?: string;
//   modalPaperStyle?: React.CSSProperties;
//   animateMode?: "center" | "right" | "left";
// }) => {
//   const { modalPaperClassName = "", modalPaperStyle = {}, animateMode = "center" } = props;

//   useGSAP(() => {
//     gsap.to(".xr-modal-paper", {
//       y: 0,
//       ease: "power4.out",
//       duration: 0.5,
//     });
//   })
//   return (
//     <div
//       className={`xr-modal-paper ${animateMode} ${modalPaperClassName}`}
//       style={modalPaperStyle}
//     >
//       {props.children}
//     </div>
//   );
// };
export default MyModal;



