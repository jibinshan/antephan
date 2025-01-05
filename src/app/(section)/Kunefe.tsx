import Image from "next/image";
import React from "react";

const Kunefe: React.FC = () => {
  return (
    <section className="h-[100vh] w-full bg-white">
      <div>
        <h3>Antephan Kunefe</h3>
        <ul>
          <li>
            <Image
              src="/images/home/kunefe/wicker.png"
              width={322}
              height={323}
              alt="wicker"
              className=""
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Kunefe;
