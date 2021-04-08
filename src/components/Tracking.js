import React, { useState } from 'react';
import { Button, Input, Popover, Modal, Space, Typography } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const styles = {
  background: {
    backgroundImage: `url("https://images.unsplash.com/photo-1495522284885-41b9fc716455?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1652&q=80")`,
    height: "calc(100vh - 48px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  shade: {
    width: "100%",
    height: "calc(100vh - 48px)",
    background: "rgba(0,0,0,0.5)",
    position: "absolute",
    top: 48,
    left: 0,
  },
  helpButton: {
    position: "absolute",
    bottom: 30,
    right: 30,
  }
}

const Tracking = () => {
  const [modalVisible, setModalVisible] = useState();
  const [trackNo, setTrackNo] = useState();

  return (
    <>
      <div style={styles.background} >
        <div style={styles.shade} />
        <Input.Search
          style={{ width: 500 }}
          size="large"
          placeholder="Введите трек-номер"
          onChange={(e) => setTrackNo(e.target.value)}
          onSearch={() => setModalVisible(true)}
        />
        <Popover
          title="Чат со службой поддержки"
          trigger="click"
        >
          <Button
            type="primary"
            shape="round"
            icon={<QuestionCircleOutlined />}
            size="large"
            style={styles.helpButton}
          >
            Чем могу помочь?
          </Button>
        </Popover>
      </div>
      <Modal
        title={`Информация об отправлении ${trackNo}`}
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        onOk={() => setModalVisible(false)}
      >
        <Space direction="vertical">
          <Typography.Text>Статус: Принятие на хранение</Typography.Text>
          <Typography.Text>ФГО ПВЗ ТОО «Tiera», г. Караганда, мкр. Степной 3, д. 3</Typography.Text>
          <Typography.Text>Дата прибытия: {new Date().toLocaleDateString("ru-RU")}</Typography.Text>
        </Space>
      </Modal>
    </>
  );
};

export default Tracking;
