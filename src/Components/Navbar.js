import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

function Navbar() {
  return (
    <div>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default Navbar;
