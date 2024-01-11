import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import Circle from "../../circle.png";
import Image from "next/image";

export default function Post({ posts }) {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex w-full items-center lg:w-1/2">
          <div className="mb-8 max-w-5xl">
            <div className="mb-8 max-w-5xl">
              <h1 className="leading-100 lg:leading-100 text-6xl">
                {/* className="text-4xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight" */}
                Deliver&nbsp;
                <span className="text-6xl font-bold text-gray-800 dark:text-white">
                  span innovative IT Solutions{" "}
                </span>
                <span className="text-6xl">For Technology</span>{" "}
                <span className="text-6xl">Insights.</span>
              </h1>
            </div>
            <p className="py-5 text-xl leading-normal text-gray-500 dark:text-gray-300 lg:text-xl xl:text-2xl">
              Nextly is a free landing page & marketing website
              template for startups and indie projects. Its built with
              Next.js & TailwindCSS. And its completely open-source.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
              <Link
                href="/"
                rel="noopener"
                className="rounded-md bg-indigo-600 px-8 py-4 text-center text-lg font-medium text-white ">
                Know More
              </Link>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center lg:w-1/2">
          <div className="">
            {/* <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            /> */}
          </div>
        </div>
      </Container>
      {/* <Container>
        <div className="flex flex-col justify-center">
          <div className="text-center text-xl text-gray-700 dark:text-white">
            Trusted by <span className="text-indigo-600">2000+</span>{" "}
            customers worldwide
          </div>
        </div>
      </Container> */}
    </>
  );
}
