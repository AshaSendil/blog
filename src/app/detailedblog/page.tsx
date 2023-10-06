import { Footer } from "@/components/footer/footer";
import Blogheader from "../blogheader/page";
import DetailedblogContent from "./_component/detailedblogcontent";
import Layout from "../Layout/_component/layout";

export default function DeatiledBlog(){
    return(
        <Layout>
        <Blogheader/>
        <DetailedblogContent/>
        </Layout>
    )
}