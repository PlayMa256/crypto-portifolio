import React from 'react';
import {useFormik} from 'formik';
import {BinanceLogo, Box, Input, Button} from '../../common/components';
import styled from 'styled-components/native';
import {Text, View} from 'react-native';

const InputText = styled(Input)`
  margin-top: 10px;
`;

const AlignedBox = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SourceTitle = styled(Text)`
  color: white;
  font-size: 25px;
  margin-left: 5px;
`;

export default function BinanceAccount() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box>
      <AlignedBox>
        <BinanceLogo height={20} width={20} />
        <SourceTitle>Binance</SourceTitle>
      </AlignedBox>
      <InputText
        placeholder={'API Key'}
        onChangeText={formik.handleChange('apiKey')}
      />
      <InputText
        placeholder={'Secret Key'}
        onChangeText={formik.handleChange('secretKey')}
      />

      <Button label={'Link exchange'} style={{marginTop: 10}} />
    </Box>
  );
}
