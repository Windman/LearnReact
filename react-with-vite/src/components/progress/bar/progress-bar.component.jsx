import { useEffect, useState } from "react";

export const ProgressBar = () => {
  const calculatePosition = () => {
    if (!document.body.scrollHeight || !window.scrollY) {
      return 0;
    }

    return Math.min(
      Math.ceil(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
          100
      ),
      100
    );
  };

  const [percentage, setPercentage] = useState(calculatePosition());

  const onScroll = () => setPercentage(calculatePosition());

  useEffect(() => {
    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={"progress-bar"} style={{ width: percentage + "vw" }}></div>
  );
};
