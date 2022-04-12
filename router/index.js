import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

//import screen
import SignIn from '../src/Screen/Login';
import SignUp from '../src/Screen/SignUp';
import BottomTab from '../src/Component/BottomTab';
import BuatArisan from '../src/Screen/BuatArisan';
import GantiPassword from '../src/Screen/GantiPassword';
import EditProfile from '../src/Screen/EditProfile';
import EditArisan from '../src/Screen/EditArisan';
import DetailArisan from '../src/Screen/DetailArisan';
import TambahPeseta from '../src/Screen/TambahPeserta';
import KocokArisan from '../src/Screen/KocokArisan';
import PemenangArisan from '../src/Screen/PemenangArisan';
import HistoryArisan from '../src/Screen/HistoryArisan';
import EditPeserta from '../src/Screen/EditPeserta';
import ConfirmScreen from '../src/Screen/Confirm';

//color
import COLOR from '../src/Config/color';
import SearchArisan from '../src/Screen/SearchArisan/';

const Stack = createNativeStackNavigator();

//StackScreen
const Router = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.loginReducer.isLogin);

  const checkLogin = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      dispatch({type: 'loginSuccess'});
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <Stack.Navigator>
      {isLogin ? (
        <>
          <Stack.Screen
            name="BottomTab"
            component={BottomTab}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Buat Arisan"
            component={BuatArisan}
            options={{
              title: 'Buat Arisan',
              headerTitleStyle: {
                color: COLOR.Black,
              },
              headerStyle: {
                backgroundColor: COLOR.Primary,
              },
            }}
          />

          <Stack.Screen
            name="Ganti Password"
            component={GantiPassword}
            options={{
              title: 'Ganti Password',
              headerTitleStyle: {
                color: COLOR.Black,
              },
              headerStyle: {
                backgroundColor: COLOR.Primary,
              },
            }}
          />
          <Stack.Screen
            name="Search Arisan"
            component={SearchArisan}
            options={{
              title: 'Cari Arisan',
              headerTitleStyle: {
                color: COLOR.Black,
              },
              headerStyle: {
                backgroundColor: COLOR.Primary,
              },
            }}
          />
          <Stack.Screen
            name="Edit Profile"
            component={EditProfile}
            options={{
              title: 'Edit Profile',
              headerTitleStyle: {
                color: COLOR.Black,
              },
              headerStyle: {
                backgroundColor: COLOR.Primary,
              },
            }}
          />
          <Stack.Screen
            name="Edit Arisan"
            component={EditArisan}
            options={{
              title: 'Edit Arisan',
              headerTitleStyle: {
                color: COLOR.Black,
              },
              headerStyle: {
                backgroundColor: COLOR.Primary,
              },
            }}
          />
          <Stack.Screen
            name="Edit Peserta"
            component={EditPeserta}
            options={{
              title: 'Edit Peserta',
              headerTitleStyle: {
                color: COLOR.Black,
              },
              headerStyle: {
                backgroundColor: COLOR.Primary,
              },
            }}
          />
          <Stack.Screen
            name="Detail Arisan"
            component={DetailArisan}
            options={{
              title: 'Detail Arisan',
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
            component={TambahPeseta}
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
          <Stack.Screen
            name="Kocok Arisan"
            component={KocokArisan}
            options={{
              title: 'Kocok Arisan',
              headerTitleStyle: {
                color: COLOR.Black,
              },
              headerStyle: {
                backgroundColor: COLOR.Primary,
              },
            }}
          />
          <Stack.Screen
            name="Pemenang Arisan"
            component={PemenangArisan}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Confirm"
            component={ConfirmScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="History Arisan"
            component={HistoryArisan}
            options={{
              title: 'History Arisan',
              headerTitleStyle: {
                color: COLOR.Black,
              },
              headerStyle: {
                backgroundColor: COLOR.Primary,
              },
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Router;
