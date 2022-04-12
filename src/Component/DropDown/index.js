import moment, {months, weekdays} from 'moment';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {useDispatch, useSelector} from 'react-redux';
import COLOR from '../../Config/color';

//periode pembayaran
const data = [
  {label: 'Bulanan', value: 'Bulanan'},
  {label: 'Mingguan', value: 'Mingguan'},
];

//periode Undian
const data2 = [
  {label: '2 Bulan ke Depan', value: '2 Bulan ke Depan'},
  {label: 'Bulan Depan', value: 'Bulan Depan'},
  {label: '2 Minggu ke Depan', value: '2 Minggu ke Depan'},
  {label: 'Minggu Depan', value: 'Minggu Depan'},
];

//Modal
const data3 = [
  {label: 'Belum Lunas', value: false},
  {label: 'Lunas', value: true},
];

const handleDate = time => {
  if (time === '2 Bulan ke Depan') {
    return moment(new Date()).add(2, 'months').format('DD-MM-YYYY');
  }
  if (time === 'Bulan Depan') {
    return moment(new Date()).add(1, 'months').format('DD-MM-YYYY');
  }
  if (time === '2 Minggu ke Depan') {
    return moment(new Date()).add(2, 'weeks').format('DD-MM-YYYY');
  }
  if (time === 'Minggu Depan') {
    return moment(new Date()).add(1, 'weeks').format('DD-MM-YYYY');
  }
};

//periode Pembayaran
const DropdownComponent1 = () => {
  const [periodePembayaran, setPeriodePembayaran] = useState(null);
  const dispatch = useDispatch();
  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      iconStyle={styles.iconStyle}
      data={data}
      maxHeight={100}
      labelField="label"
      valueField="value"
      placeholder="Pilih Periode Pembayaran"
      value={periodePembayaran}
      onChange={item => {
        setPeriodePembayaran(item.value);
        dispatch({type: 'SET_PERIODE_PEMBAYARAN', payload: item.value});
      }}
    />
  );
};

//Periode Undian
const DropdownComponent2 = () => {
  const [periodeUndian, setPeriodeUndian] = useState(null);
  const dispatch = useDispatch();
  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      iconStyle={styles.iconStyle}
      data={data2}
      maxHeight={200}
      labelField="label"
      valueField="value"
      placeholder="Pilih Periode Undian"
      value={periodeUndian}
      onChange={item => {
        setPeriodeUndian(item.value);
        dispatch({type: 'SET_PERIODE_UNDIAN', payload: handleDate(item.value)});
      }}
    />
  );
};

const DropdownComponent3 = () => {
  const [statusPembayaran, setStatusPembayaran] = useState(null);
  const dispatch = useDispatch();
  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      iconStyle={styles.iconStyle}
      data={data3}
      maxHeight={100}
      labelField="label"
      valueField="value"
      placeholder="Pilih Status Pembayaran"
      value={statusPembayaran}
      onChange={item => {
        setStatusPembayaran(item.value);
        dispatch({type: 'SET_STATUS_PEMBAYARAN', payload: item.value});
      }}
    />
  );
};

export {DropdownComponent1, DropdownComponent2, DropdownComponent3};

const styles = StyleSheet.create({
  dropdown: {
    paddingHorizontal: 10,
    borderRadius: 9,
    borderColor: COLOR.Primary,
    borderWidth: 1,
    marginVertical: 5,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  placeholderStyle: {
    fontSize: 14,
    color: COLOR.Black,
  },
  selectedTextStyle: {
    fontSize: 14,
    color: COLOR.Black,
  },
});
