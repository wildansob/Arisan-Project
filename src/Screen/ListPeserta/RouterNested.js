import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//ImportScreen
import ListPesertaNested from './ListPeserta';
import TambahPeserta from './TambahPeserta';

//color
import COLOR from '../../Config/color';

const Stack = createNativeStackNavigator();

const RouterNested = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="List Peserta Nested"
        component={ListPesertaNested}
        options={{
          title: 'List Peserta',
          headerTitleStyle: {
            color: COLOR.Black,
          },
          headerStyle: {
            backgroundColor: COLOR.Primary,
          },
        }}
      />
      <Stack.Screen
        name="Tambah Peserta"
        component={TambahPeserta}
        options={{
          title: 'Tambah Peserta',
          headerTitleStyle: {
            color: COLOR.Black,
          },
          headerStyle: {
            backgroundColor: COLOR.Primary,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default RouterNested;
