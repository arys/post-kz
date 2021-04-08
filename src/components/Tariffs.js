import React from 'react';
import { Table } from 'antd';

const { Column } = Table;

const data = [
  {
    key: '1',
    weight: "0.5",
    destination1: "2,300",
    destination2: "2,500",
    destination3: "2,700",
  },
  {
    key: '2',
    weight: "0.7",
    destination1: "2,700",
    destination2: "2,900",
    destination3: "3,100",
  },
];

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: 50,
  }
}

const Tariffs = () => {
  return (
    <div style={styles.container}>
      <Table dataSource={data} bordered pagination={false}>
        <Column title="Вес (кг)" dataIndex="weight" key="weight" />
        <Column title="Напрвление 1" dataIndex="destination1" key="destination1" />
        <Column title="Напрвление 2" dataIndex="destination2" key="destination2" />
        <Column title="Напрвление 3" dataIndex="destination3" key="destination3" />
      </Table>
    </div>
  );
};

export default Tariffs;
