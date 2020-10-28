import styled from 'styled-components/native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {FlatList, RectButton} from 'react-native-gesture-handler';

import {IAppointments} from './index';

export const Container = styled.View`
  padding: 0 4px ${getBottomSpace() + 32}px;
  flex: 1;
`;

export const AppointmentsList = styled(
  FlatList as new () => FlatList<IAppointments>,
)`
  padding: 32px 16px 16px;
`;

export const AppointmentsListTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;

  margin-bottom: 32px;
`;

export const AppointmentItem = styled(RectButton)`
  width: 100%;

  background: #fff;
  padding: 16px;
  border-radius: 8px;

  margin-bottom: 16px;
`;

export const AppointmentItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PatientName = styled.Text`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const DoctorName = styled.Text`
  font-size: 15px;
  color: #8e8e91;
`;

export const AppointmentDate = styled.Text`
  font-size: 14px;
  color: #8e8e91;
`;

export const SignOutButton = styled.View`
  width: 100%;
  align-items: center;
`;

export const SignOutButtonText = styled.Text`
  color: #e30219;
`;
