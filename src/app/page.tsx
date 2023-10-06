import { Footer } from "@/components/footer/footer";
import Image from "next/image";
import Blog from "./blog/page";
import TestinominalContent from "./testinominal/_component/testinominalcontent";
import Layout from "./Layout/_component/layout";
import Herosection from "./herosection/_component/herosection";

export default function Home() {
  return (
    <div className="overflow-y-visible">
      <Layout>
        <Herosection />
        <Blog />
        <TestinominalContent />
      </Layout>
    </div>
  );
}
