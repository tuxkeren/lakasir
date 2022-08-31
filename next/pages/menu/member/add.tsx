import { Layout } from "@/ui/Layout";
import { NextPage } from "next";
import FormMember from "./form";

const AddMember: NextPage = () => {
  return (
    <Layout title="Add Member" back={true}>
      <div className="py-3">
      <FormMember />
      </div>
    </Layout>
  );
};

export default AddMember;
