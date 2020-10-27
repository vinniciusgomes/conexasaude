import styled from 'styled-components/native';
import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';
import {FlatList} from 'react-native-gesture-handler';

import {IAppointments} from './index';

export const Container = styled.View`
  padding: ${getStatusBarHeight() + 16}px 8px ${getBottomSpace() + 32}px;
  flex: 1;
`;

export const AppointmentsList = styled(
  FlatList as new () => FlatList<IAppointments>,
)`
  padding: 32px 24px 16px;
`;

export const AppointmentsListTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;
