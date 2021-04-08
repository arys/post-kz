import React from 'react';
import PropTypes from 'prop-types';
import { Menu as AntMenu } from 'antd';
import { MailOutlined, DollarOutlined, InfoCircleOutlined, FileDoneOutlined, GlobalOutlined } from '@ant-design/icons';

const Menu = ({ currentPage, onPageChange }) => {
  return (
    <AntMenu
      onClick={(e) => onPageChange(e.key)}
      selectedKeys={[currentPage]}
      mode="horizontal"
    >
    <AntMenu.Item key="tracking" icon={<MailOutlined />}>
      Отследить заказ
    </AntMenu.Item>
    <AntMenu.Item key="tariffs" icon={<DollarOutlined />}>
      Тарифы
    </AntMenu.Item>
    <AntMenu.Item key="about" icon={<InfoCircleOutlined />}>
      О компании
    </AntMenu.Item>
    <AntMenu.Item key="special_orders" icon={<FileDoneOutlined />}>
      Спец заказы
    </AntMenu.Item>
    <AntMenu.Item key="weather" icon={<GlobalOutlined />}>
      <a href="https://weather.com" target="_blank" rel="noopener noreferrer">
        Погода
      </a>
    </AntMenu.Item>
  </AntMenu>
  );
};

Menu.propTypes = {
  currentPage: PropTypes.string,
  onPageChange: PropTypes.func,
};

export default Menu;
