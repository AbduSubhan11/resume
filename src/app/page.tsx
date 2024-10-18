import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className="md:flex justify-center items-center">
        <div className="p-5 text-3xl space-y-5 md:w-[70%]">
          <div className="">
            <h1>Hi, I am Abdu Subhan a passionate <span className="font-bold">Frontend Developer</span>.</h1>
            <h3>Welcome to my resume.</h3>
          </div>
          <p>
            I specialize in building responsive, dynamic web applications using
            HTML, CSS, JavaScript, React and Nextjs. With over 1+ of experience, I
            bring clean design and efficient code to every project I work on.
          </p>
        </div>
        <div className="md:w-[30%]">
          <Image
            src={"/Image/my pic.jpg"}
            alt="my pic"
            width={500}
            height={1000}
          ></Image>
        </div>
      </div>
    </>
  );
}
