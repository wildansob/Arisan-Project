import React, {useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import ButtonPrimary from '../../Component/Button';
import {CardBuatArisan, CardBuatArisan2} from '../../Component/CardBuatArisan';
import {Modal1, Modal2} from '../../Component/modal';
import COLOR from '../../Config/color';

const BuatArisan = () => {
  const dispatch = useDispatch();
  const [hide, setHide] = useState(true);
  const [namaArisan, setNamaArisan] = useState('');
  const [jumlahArisan, setJumlahArisan] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const {selectedPeriodeUndian, selectedPeriodePembayaran} = useSelector(
    state => state.globalReducer,
  );

  const validation = () => {
    if (!namaArisan) return false;
    return true;
  };
  const validationSubmit = () => {
    if (!jumlahArisan) return false;
    if (!selectedPeriodeUndian) return false;
    if (!selectedPeriodePembayaran) return false;
    return true;
  };

  return (
    <View>
      <ScrollView>
        <CardBuatArisan
          text="Nama Arisan"
          placeholder="Masukan nama arisan"
          btnText="Selanjutnya"
          value={namaArisan}
          onChangeText={text => setNamaArisan(text)}
        />
        {hide ? (
          <View
            style={{
              backgroundColor: COLOR.White,
              paddingBottom: moderateScale(20),
            }}>
            <ButtonPrimary
              onPress={() => {
                setHide(prev => !prev);
              }}
              text="Selanjutnya"
              disabled={!validation()}
            />
          </View>
        ) : null}

        {hide ? null : (
          <CardBuatArisan2
            placeholder1="Masukan Jumlah Iuran arisan"
            onPress={() => setIsVisible(true)}
            value1={jumlahArisan}
            onChangeText1={text => setJumlahArisan(text)}
            text1="Jumlah Iuran Arisan"
            text2="Periode Pembayaran"
            text3="Periode Undian"
            keyboardType1="phone-pad"
            btnText="Buat Arisan"
            disable={!validationSubmit()}
          />
        )}
      </ScrollView>

      {/* modal */}
      <Modal1
        isVisible={isVisible}
        headerText="Konfirmasi Arisan"
        konten1={namaArisan}
        konten2={jumlahArisan}
        konten3={selectedPeriodePembayaran}
        konten4={selectedPeriodeUndian}
        textButton1="Batal"
        textButton2="Simpan"
        onPress={() => setIsVisible(false)}
        onPress2={() =>
          dispatch({
            type: 'POST_CREATE_ARISAN',
            payload: {
              title: namaArisan,
              dues: jumlahArisan,
              paymentPeriod: selectedPeriodePembayaran,
              lotteryDate: selectedPeriodeUndian,
            },
          })
        }
      />
    </View>
  );
};

export default BuatArisan;
