import React from 'react'
import { Link, Outlet } from 'umi';
import styles from './index.less';
import {Card, Badge, TabBar,AutoCenter,Avatar,List  } from 'antd-mobile'
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
  PayCircleOutline,
  SetOutline
} from 'antd-mobile-icons'

const demoAvatarImages = [
  'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
  'https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  'https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
]

const tabs = [
  {
    key: 'home',
    title: '首页',
    icon: <AppOutline />,
    badge: Badge.dot,
  },
  {
    key: 'todo',
    title: '待办',
    icon: <UnorderedListOutline />,
    badge: '5',
  },
  {
    key: 'message',
    title: '消息',
    icon: (active: boolean) =>
      active ? <MessageFill /> : <MessageOutline />,
    badge: '99+',
  },
  {
    key: 'personalCenter',
    title: '我的',
    icon: <UserOutline />,
  },
]

export default function Layout() {
  return (
    <div className={styles.body}>
        <Card className={styles.cardPerson} title={<>  
          <List>
          <List.Item
            prefix={<Avatar src={demoAvatarImages[0]} />}
            description='欢迎登陆，肖文天'
          >
            肖文天
          </List.Item>
        </List>
        </> }>
          卡片内容
        </Card>



      <List style={{'margin-top':'10px'}} header=''>
        <List.Item prefix={<UnorderedListOutline />} onClick={() => {}}>
          账单
        </List.Item>
        <List.Item prefix={<PayCircleOutline />} onClick={() => {}}>
          总资产
        </List.Item>
        <List.Item prefix={<SetOutline />} onClick={() => {}}>
          地址
        </List.Item>
        <List.Item prefix={<SetOutline />} onClick={() => {}}>
          设置
        </List.Item>
      </List>

      <TabBar className={styles.footerTab}>
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
      </TabBar>
    </div>
  );
}
