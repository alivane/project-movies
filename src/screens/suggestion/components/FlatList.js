import React from 'react';
import {FlatList, Text} from 'react-native';
import Empty from '../../../components/Empty';
import Vertical from '../../../components/Separation';

const renderEmpty = () => <Empty text="No hay sugerencias :(" />;
const renderSeparation = () => <Vertical color="red" />;

const list = [
  {
    title: 'test',
    key: '1',
  },
  {
    title: 'test 1',
    key: '2',
  },
];

const List: () => React$Node = () => {
  return (
    <FlatList
      data={list}
      ListEmptyComponent={renderEmpty}
      ItemSeparatorComponent={renderSeparation}
      renderItem={({item}) => <Text>{item.title}</Text>} />
  );
};

export default List;
