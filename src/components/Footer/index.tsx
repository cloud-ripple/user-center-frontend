import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = '云漪出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'github',
          title: <><GithubOutlined /> 云漪 GitHub</>,
          href: 'https://github.com/cloud-ripple',
          blankTarget: true, //是否打开新页面
        },
      ]}
    />
  );
};
export default Footer;
